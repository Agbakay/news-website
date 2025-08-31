import { create } from "zustand";

const useNewsStore = create((set, get) => ({
  articles: [],
  category: "business",

  setArticles: (newArticles) => set({ articles: newArticles }),
  setCategory: (newCategory) => {
    set({ category: newCategory, searchQuery: "" });
    get().fetchNews(); // automatically fetch new data when category changes
  },

  setSearchQuery: (query) => set({ searchQuery: query }),

  fetchNews: async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    if (!apiKey) {
      console.warn("API key is missing in the .env file");
      return;
    }

    const { category, searchQuery } = get();
    let url = "";

    if ((searchQuery || "").trim() !== "") {
      url = `http://newsapi.org/v2/everything?q=${encodeURIComponent(
        searchQuery
      )}&sortBy=publishedAt&language=en&apiKey=${apiKey}`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.articles) {
        set({ articles: data.articles });
      }
    } catch (error) {
      console.error("Error loading news:", error);
    }
  },
}));

export default useNewsStore;
