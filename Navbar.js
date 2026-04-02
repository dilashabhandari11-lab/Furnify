import React from "react";
import { useCart } from "./CartContext";
import "./Navbar.css";

const Navbar = ({ activeTab, setActiveTab, searchTerm, setSearchTerm, onCartOpen }) => {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => setActiveTab("home")} style={{ cursor: "pointer" }}>
        Furnify
      </div>
      <ul className="nav-links">
        <li className={activeTab === "home" ? "active" : ""} onClick={() => setActiveTab("home")}>Home</li>
        <li className={activeTab === "new" ? "active" : ""} onClick={() => setActiveTab("new")}>New</li>
        <li className={activeTab === "thrift" ? "active" : ""} onClick={() => setActiveTab("thrift")}>Thrift</li>
        <li className={activeTab === "about" ? "active" : ""} onClick={() => setActiveTab("about")}>About</li>
      </ul>

      <div className="navbar-right">
        {activeTab !== "about" && (
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        )}
        <button className="cart-btn" onClick={onCartOpen}>
          🛒
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;