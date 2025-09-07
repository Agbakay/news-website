import React from "react";
import useNewsStore from "./NewsStore";

const NewsCard = ({ index }) => {
  const { articles } = useNewsStore();
  const news = articles[index];

  if (!news) return null;
  return (
    <div className="px-10">
      <div className="max-w-md rounded-2xl shadow-md overflow-hidden bg-white mb-6">
        {news.urlToImage && (
          <img
            className="w-full h-48 object-cover"
            src={news.urlToImage}
            alt={news.title || "News image"}
          />
        )}
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2">{news.title}</h2>
          <p className="text-sm text-gray-600 mb-4">
            {news.description || "Empty placeholder"}
          </p>
          {news.url && (
            <a
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 font-semibold hover:bg-gray-400 px-5 py-2 rounded-lg bg-black"
            >
              Read Article
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
