import React from "react";

const NewsCard = ({ title, description, src, url }) => {
  return (
    <div className="max-w-md rounded-2xl shadow-md overflow-hidden bg-white mb-6">
      {src && (
        <img
          className="w-full h-48 object-cover"
          src={src}
          alt={title || "News image"}
        />
      )}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-4">
          {description
            ? description.length > 120
              ? description.slice(0, 120) + "..."
              : description
            : "No description available."}
        </p>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            Read More
          </a>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
