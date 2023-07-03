import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'us', 
          apiKey: '6d77c140fd1b4312a0a7594d2322607e' 
        }
      });

      setNews(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='news-content'>
      <div className='news-content_conteiner'>
        <h1 className='news-content_conteiner_header'>News</h1>
        {news.map((article) => (
          <div key={article.title} className='news-content_conteiner_article'>
            <h2 className='news-content_conteiner_article_title'>{article.title}</h2>
            <p className='news-content_conteiner_article_text'>{article.description}</p>
            {article.urlToImage && <img src={article.urlToImage} alt="News" className='news-content_conteiner_article_image' />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
