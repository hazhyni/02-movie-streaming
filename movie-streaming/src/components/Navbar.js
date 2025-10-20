import React, { useState, useEffect } from "react";
import moviesData from "../data/movies.json";
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
              <div className="dropdown-header">
                <span>🎬 Browse by Genre</span>
              </div>
              <button
                className="dropdown-item all-movies"
                onClick={() => {
                  setCurrentPage("movies");
                  setIsMenuOpen(false);
                  setIsDropdownOpen(false);
                }}
              >
                <span className="genre-icon">🍿</span>
                <div className="genre-info">
                  <span className="genre-name">All Movies</span>
                  <span className="genre-count">{moviesData.movies.length} movies</span>
                </div>
              </button>
              {moviesData.genres.map(genre => {
                const genreEmojis = {
                  'Action': '💥',
                  'Drama': '🎭',
                  'Sci-Fi': '🚀',
                  'Adventure': '🗺️',
                  'Superhero': '🦸',
                  'Thriller': '😱',
                  'Crime': '🔍',
                  'Comedy': '😂'
                };
                return (
                  <button
                    key={genre.id}
                    className="dropdown-item"
                    onClick={() => {
                      setCurrentPage("movies");
                      setIsMenuOpen(false);
                      setIsDropdownOpen(false);
                    }}
                  >
                    <span className="genre-icon">{genreEmojis[genre.name] || '🎬'}</span>
                    <div className="genre-info">
                      <span className="genre-name">{genre.name}</span>
                      <span className="genre-count">{genre.count} movies</span>
                    </div>
                  </button>
                );
              })}
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
