import React, { useState, useEffect } from "react";
import axios from "axios";
import Likes from "../Likes";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // запит кожні 10 секунд
    fetchNews();
    const interval = setInterval(fetchNews, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "us",
          apiKey: "6d77c140fd1b4312a0a7594d2322607e",
        },
      });

      setNews(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="news-content">
      <div className="news-content_conteiner">
        <h1 className="news-content_conteiner_header">News</h1>
        {news.map((article) => (
          <section key={article.title} className="news-content_conteiner_article">
            <article className="article_block">
              <h2 className="news-content_conteiner_article_title">
                {article.title}
              </h2>
              <p className="news-content_conteiner_article_text">
                {article.description}
              </p>
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt="News"
                  className="news-content_conteiner_article_image"
                />
              )}
              {localStorage.getItem("login") === "Yuliia" ? (
                <div className="article_block_like">
                  <Likes />
                </div>
              ) : null}
            </article>
          </section>
        ))}
      </div>
    </div>
  );
}

export default News;
