import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryFilter from "./components/Category";

const App = () => {
  return (
    <>
      <Navbar />
      <CategoryFilter />
      <Hero />
      <Footer />
    </>
  );
};

export default App;
