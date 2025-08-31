import React, { useState } from "react";
import useNewsStore from "./NewsStore";

const categories = [
  "business",
  "technology",
  "sports",
  "health",
  "science",
  "entertainment",
];

const Navbar = () => {
  const { category, setCategory, setSearchQuery, fetchNews } = useNewsStore();
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(input);
    fetchNews();
  };

  const handleCategoryClick = (cat) => {
    setCategory(cat);
    setInput(""); // clear search if switching category
  };

  return (
    <nav className="flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* Left: Logo */}
      <div className="text-2xl font-bold text-black">NewsApp</div>

      {/* Center: Category Links */}
      <div className="flex gap-4 text-gray-700 font-medium flex-wrap justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`capitalize ${
              category === cat
                ? "text-black border-b-2 border-gray-800"
                : "hover:text-black cursor-pointer"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Right: Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex items-center border border-gray-300 rounded-lg overflow-hidden mt-3 md:mt-0"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search news..."
          className="px-4 py-2 outline-none w-36 md:w-64 text-sm"
        />
        <button
          type="submit"
          className="bg-gray-600 text-white px-4 py-2 text-sm font-medium hover:bg-gray-700 transition"
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
