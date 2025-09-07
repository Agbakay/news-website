import React, { useEffect } from "react";
import useNewsStore from "./NewsStore";
import NewsCard from "./NewsCard";

const Hero = () => {
  const { articles, fetchNews } = useNewsStore();

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <div>
      {/* News Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {articles.length > 0 ? (
          articles.map((_, index) => <NewsCard key={index} index={index} />)
        ) : (
          <p>Loading news...</p>
        )}
      </div>
      <input type="email" name="" id="" placeholder="Eail"/>
    </div>
  );
};

export default Hero;
