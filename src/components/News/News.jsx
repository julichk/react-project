import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Skeleton, Card, Alert } from "antd";
import Likes from "../Likes";

function News() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); 

  const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
  const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

  const fetchNews = useCallback(async () => {
    try {
      const response = await axios.get(REACT_APP_BASE_URL, {
        params: {
          country: "us",
          apiKey: REACT_APP_API_KEY,
          pageSize: 10,
        },
      });
      setNews(response.data.articles);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }, [REACT_APP_BASE_URL]);

  useEffect(() => {
    fetchNews();
    const interval = setInterval(fetchNews, 300000);

    return () => {
      clearInterval(interval);
    };
  }, [fetchNews]);

  return (
    <div className="news-content">
      {isLoading ? (
        <Card className="skeleton-news">
          <Skeleton active paragraph={{ rows: 5 }} />
          <Skeleton.Image className="skeleton-news_img" />
        </Card>
      ) : error ? (
        <Alert
          message="Error"
          description="An error occurred while fetching the news. Please try again later."
          type="error"
          showIcon
        />
      ) : (
        <div className="news-content_conteiner">
          <h1 className="news-content_conteiner_header">News</h1>
          {news.map((article) => (
            <section
              key={article.title}
              className="news-content_conteiner_article"
            >
              <article className="article_block">
                <h2 className="news-content_conteiner_article_title">
                  {article.title}
                </h2>
                <p className="news-content_conteiner_article_text">
                  {article.description}
                </p>
                {article.urlToImage ? (
                  <img
                    src={article.urlToImage}
                    alt="News"
                    className="news-content_conteiner_article_image"
                  />
                ) : (
                  <Skeleton.Image
                    style={{
                      width: "40%",
                      height: "40%",
                      borderRadius: "5px",
                    }}
                    className="news-content_conteiner_article_image"
                  />
                )}
                {localStorage.getItem("login") === "Yuliia" && (
                  <div className="article_block_like">
                    <Likes />
                  </div>
                )}
              </article>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

export default News;
