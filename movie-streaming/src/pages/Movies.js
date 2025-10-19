import React, { useState, useEffect, useRef, useCallback } from "react";
import Button from "../components/Button";
import moviesData from "../data/movies.json";
import "../styles/Movies.css";

const Movies = ({ openSearch = false }) => {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  const { movies, genres } = moviesData;

  const years = [
    "All",
    "2022",
    "2021",
    "2019",
    "2018",
    "2014",
    "2010",
    "2008",
    "1994",
  ];

  const handleSearch = useCallback(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    setTimeout(() => {
      const query = searchQuery.toLowerCase().trim();
      let results = movies.filter((movie) => {
        return (
          movie.title.toLowerCase().includes(query) ||
          movie.description.toLowerCase().includes(query) ||
          movie.director.toLowerCase().includes(query) ||
          movie.categories.some((cat) =>
            cat.toLowerCase().includes(query)
          ) ||
          movie.cast.some((actor) =>
            actor.toLowerCase().includes(query)
          ) ||
          movie.year.toString().includes(query)
        );
      });

      // Sort by relevance
      results.sort((a, b) => {
        const aTitle = a.title.toLowerCase().includes(query) ? 1 : 0;
        const bTitle = b.title.toLowerCase().includes(query) ? 1 : 0;
        if (aTitle !== bTitle) return bTitle - aTitle;
        
        return b.rating - a.rating;
      });

      setSearchResults(results);
      setIsSearching(false);
    }, 200);
  }, [searchQuery, movies]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    if (searchQuery || selectedGenre !== "All") {
      handleSearch();
    }
  }, [selectedGenre, searchQuery, handleSearch]);

  useEffect(() => {
    if (openSearch) {
      setIsSearchOpen(true);
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [openSearch]);

  useEffect(() => {
    // Reset openSearch state after component mounts
    return () => {
      if (openSearch) {
        // This will be handled by parent component
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setSearchQuery("");
        setSearchResults([]);
      }
    };

    const handleOpenSearch = () => {
      setIsSearchOpen(true);
      setTimeout(() => searchInputRef.current?.focus(), 100);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("openSearchModal", handleOpenSearch);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("openSearchModal", handleOpenSearch);
    };
  }, []);

  const filteredMovies = movies.filter((movie) => {
    return (
      (selectedGenre === "All" || movie.genre === selectedGenre) &&
      (selectedYear === "All" || movie.year.toString() === selectedYear)
    );
  });

  return (
    <div className="movies-page">
      <div className="movies-header">
        <h1>Movies Collection</h1>
        <p>Discover your next favorite movie</p>
      </div>

      <div className="movies-filters">
        <div className="filter-group">
          <label>Genre:</label>
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            {genres.map((genre) => (
              <option key={genre.id} value={genre.name}>
                {genre.name} ({genre.count})
              </option>
            ))}
            <option value="All">All Genres</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Year:</label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="results-count">
          {filteredMovies.length} movies found
        </div>
      </div>

      {isSearchOpen && (
        <div className="search-modal" onClick={() => setIsSearchOpen(false)}>
          <div className="search-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="search-modal-header">
              <div className="search-input-container">
                <span className="search-icon">🔍</span>
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search by title, actor, director, year..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="search-modal-input"
                />
                <button
                  className="close-search"
                  onClick={() => setIsSearchOpen(false)}
                >
                  ✕
                </button>
              </div>
            </div>

            {searchResults.length > 0 && (
              <div className="search-modal-results">
                {searchResults.slice(0, 6).map((movie) => (
                  <div key={movie.id} className="search-result-item">
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="result-thumb"
                    />
                    <div className="result-details">
                      <h4>{movie.title}</h4>
                      <div className="result-meta-inline">
                        <span>{movie.year}</span>
                        <span>{movie.genre}</span>
                        <span>⭐ {movie.rating}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="small" icon="▶">
                      Play
                    </Button>
                  </div>
                ))}
                {searchResults.length > 6 && (
                  <div className="more-results">
                    +{searchResults.length - 6} more results
                  </div>
                )}
              </div>
            )}

            {(searchQuery || selectedGenre !== "All") &&
              searchResults.length === 0 &&
              !isSearching && (
                <div className="no-results-modal">
                  <span className="no-results-icon">🎬</span>
                  <p>No movies found</p>
                </div>
              )}
          </div>
        </div>
      )}

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <div className="movie-poster">
              <img src={movie.poster} alt={movie.title} />
              <div className="movie-overlay">
                <button className="play-btn">▶</button>
                <button className="info-btn">ℹ</button>
              </div>
            </div>
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <div className="movie-meta">
                <span className="genre">{movie.genre}</span>
                <span className="year">{movie.year}</span>
                <span className="rating">⭐ {movie.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
