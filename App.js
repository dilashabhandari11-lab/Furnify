import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import AboutPage from "./components/AboutPage";
import { furnitureProducts } from "./data/furnitureProducts";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");

  let filteredProducts = [...furnitureProducts];
  if (activeTab === "new") filteredProducts = filteredProducts.filter(p => p.type === "New");
  else if (activeTab === "thrift") filteredProducts = filteredProducts.filter(p => p.type === "Thrift");

  if (searchTerm && activeTab !== "about") {
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const renderContent = () => {
    if (activeTab === "about") return <AboutPage />;
    if (activeTab === "home") return (
      <>
        <Hero />
        <ProductSection title="✨ New Arrivals" products={furnitureProducts} typeFilter="New" />
        <ProductSection title="♻️ Thrift Treasures" products={furnitureProducts} typeFilter="Thrift" />
      </>
    );
    return <ProductSection title={activeTab === "new" ? "New Furniture" : "Thrift Furniture"} products={filteredProducts} typeFilter={activeTab} />;
  };

  return (
    <div className="App">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;