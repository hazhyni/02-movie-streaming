import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "m") {
        e.preventDefault();
        // Trigger search modal on any page
        const searchEvent = new CustomEvent("openSearchModal");
        document.dispatchEvent(searchEvent);
      }
    };

    const handleClickOutside = (e) => {
      if (!e.target.closest(".navbar-dropdown")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h2>HyFlix</h2>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <button
            className={`navbar-item ${currentPage === "home" ? "active" : ""}`}
            onClick={() => {
              setCurrentPage("home");
              setIsMenuOpen(false);
            }}
          >
            Home
          </button>
          <div className="navbar-dropdown">
            <button
              className={`navbar-item ${
                currentPage === "movies" ? "active" : ""
              }`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onMouseEnter={() => setIsDropdownOpen(true)}
            >
              Genre ▼
            </button>
            <div className={`dropdown-content ${isDropdownOpen ? "show" : ""}`}>
              <button
                onClick={() => {
                  setCurrentPage("movies");
                  setIsMenuOpen(false);
                  setIsDropdownOpen(false);
                }}
              >
                Movies
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsDropdownOpen(false);
                }}
              >
                TV Series
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsDropdownOpen(false);
                }}
              >
                Documentaries
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsDropdownOpen(false);
                }}
              >
                Anime
              </button>
            </div>
          </div>
          <button className="navbar-item">Rate</button>
          <button className="navbar-item">Community</button>
          <button className="navbar-item">Rewards</button>
          <button className="navbar-item">About</button>
        </div>

        <div className="navbar-actions">
          <div
            className="search-box"
            onClick={() => {
              const searchEvent = new CustomEvent("openSearchModal");
              document.dispatchEvent(searchEvent);
            }}
          >
            <input type="text" placeholder="Search movies..." readOnly />
            <button className="search-btn">🔍</button>
            <span className="search-shortcut">Ctrl+M</span>
          </div>
          <div className="user-profile">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="Profile" />
          </div>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            setIsDropdownOpen(false);
          }}
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
