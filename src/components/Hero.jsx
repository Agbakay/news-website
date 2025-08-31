import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const Hero = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    const apiKey = import.meta.env.VITE_API_KEY;
    if (!apiKey) {
      console.warn("Api key is missing in your code");
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.articles) {
          setArticles(data.articles);
        }
      })
      .catch((error) => console.error("Failed to fetch news:", error));
  }, []);

  return (
    <div>
      {articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsCard
            key={index}
            title={news.title}
            descritption={news.descritption}
            src={news.url.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        <p>Loading News...</p>
      )}
    </div>
  );
};

export default Hero;
