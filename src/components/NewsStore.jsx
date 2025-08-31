import { create } from "zustand";

const useNewsStore = create((set, get) => ({
  articles: [],
  category: "business",

  setArticles: (newArticles) => set({ articles: newArticles }),
  setCategory: (newCategory) => {
    set({ category: newCategory });
    get().fetchNews(); // automatically fetch new data when category changes
  },

  fetchNews: async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    if (!apiKey) {
      console.warn("API key is missing in your .env file");
      return;
    }

    const { category } = get();
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.articles) {
        set({ articles: data.articles });
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  },
}));

export default useNewsStore;
