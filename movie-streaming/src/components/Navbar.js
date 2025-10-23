import React, { useState, useEffect } from "react";
import moviesData from "../data/movies.json";
import "../styles/Navbar.css";

const Navbar = ({ currentPage, setCurrentPage, selectedGenre, setSelectedGenre }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "m") {
        e.preventDefault();
        const searchEvent = new CustomEvent("openSearchModal");
        document.dispatchEvent(searchEvent);
      }
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (!e.target.closest(".navbar-dropdown")) {
        setIsDropdownOpen(false);
      }
      if (!e.target.closest(".navbar-container") && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResize);
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

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
          <div className="navbar-dropdown" onMouseLeave={() => window.innerWidth > 768 && setIsDropdownOpen(false)}>
            <button
              className={`navbar-item ${
                currentPage === "movies" ? "active" : ""
              }`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onMouseEnter={() => window.innerWidth > 768 && setIsDropdownOpen(true)}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              Genre {isDropdownOpen ? '▲' : '▼'}
            </button>
            <div className={`dropdown-content ${isDropdownOpen ? "show" : ""}`}>
              <div className="dropdown-header">
                <span>🎬 Browse by Genre</span>
              </div>
              <button
                className="dropdown-item all-movies"
                onClick={() => {
                  setCurrentPage("movies");
                  setSelectedGenre && setSelectedGenre(null);
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
                      setSelectedGenre && setSelectedGenre(genre.name);
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
          <button 
            className={`navbar-item ${currentPage === "rate" ? "active" : ""}`}
            onClick={() => {
              setCurrentPage("rate");
              setIsMenuOpen(false);
            }}
          >
            Rate
          </button>
          <button 
            className={`navbar-item ${currentPage === "community" ? "active" : ""}`}
            onClick={() => {
              setCurrentPage("community");
              setIsMenuOpen(false);
            }}
          >
            Community
          </button>
          <button 
            className={`navbar-item ${currentPage === "rewards" ? "active" : ""}`}
            onClick={() => {
              setCurrentPage("rewards");
              setIsMenuOpen(false);
            }}
          >
            Rewards
          </button>
          <button 
            className={`navbar-item ${currentPage === "about" ? "active" : ""}`}
            onClick={() => {
              setCurrentPage("about");
              setIsMenuOpen(false);
            }}
          >
            About
          </button>
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
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
