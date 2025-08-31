import React from "react";
import useNewsStore from "./NewsStore";

const categories = [
  "business",
  "technology",
  "sports",
  "health",
  "science",
  "entertainment",
];

const CategoryFilter = () => {
  const { category, setCategory } = useNewsStore();

  return (
    <div className="flex flex-wrap gap-3 mt-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            category === cat
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
