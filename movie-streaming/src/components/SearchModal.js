import React, { useState, useEffect, useRef, useCallback } from 'react';
import Button from './Button';
import moviesData from '../data/movies.json';
import '../styles/SearchModal.css';

const SearchModal = ({ isOpen, onClose, onMovieSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const searchInputRef = useRef(null);
  
  const { movies, genres } = moviesData;

  const handleSearch = useCallback(() => {
    if (!searchQuery.trim() && selectedGenre === 'All') {
      setSearchResults([]);
      return;
    }
    
    setIsSearching(true);
    setTimeout(() => {
      let results = movies.filter(movie => {
        const matchesSearch = !searchQuery.trim() || 
          movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          movie.categories.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase())) ||
          movie.cast.some(actor => actor.toLowerCase().includes(searchQuery.toLowerCase()));
        
        const matchesGenre = selectedGenre === 'All' || movie.genre === selectedGenre;
        
        return matchesSearch && matchesGenre;
      });
      
      setSearchResults(results);
      setIsSearching(false);
    }, 300);
  }, [searchQuery, selectedGenre, movies]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleMovieClick = (movie) => {
    if (onMovieSelect) {
      onMovieSelect(movie);
    }
  };

  const handlePlayMovie = (movie, e) => {
    e.stopPropagation();
    if (onMovieSelect) {
      onMovieSelect(movie, 'play');
    }
  };

  useEffect(() => {
    if (searchQuery || selectedGenre !== 'All') {
      handleSearch();
    }
  }, [selectedGenre,searchQuery, handleSearch]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="search-modal">
      <div className="search-modal-content">
        <div className="search-modal-header">
          <div className="search-input-container">
            <span className="search-icon">🔍</span>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search movies, actors, categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="search-modal-input"
            />
            <button className="close-search" onClick={onClose}>✕</button>
          </div>
          <div className="search-filters">
            <select 
              value={selectedGenre} 
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="genre-filter"
            >
              <option value="All">All Genres</option>
              {genres.map(genre => (
                <option key={genre.id} value={genre.name}>
                  {genre.name} ({genre.count})
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {searchResults.length > 0 && (
          <div className="search-modal-results">
            {searchResults.slice(0, 6).map(movie => (
              <div key={movie.id} className="search-result-item" onClick={() => handleMovieClick(movie)}>
                <img src={movie.poster} alt={movie.title} className="result-thumb" />
                <div className="result-details">
                  <h4>{movie.title}</h4>
                  <div className="result-meta-inline">
                    <span>{movie.year}</span>
                    <span>{movie.genre}</span>
                    <span>⭐ {movie.rating}</span>
                  </div>
                </div>
                <Button variant="ghost" size="small" icon="▶" onClick={(e) => handlePlayMovie(movie, e)}>Play</Button>
              </div>
            ))}
            {searchResults.length > 6 && (
              <div className="more-results">
                +{searchResults.length - 6} more results
              </div>
            )}
          </div>
        )}
        
        {(searchQuery || selectedGenre !== 'All') && searchResults.length === 0 && !isSearching && (
          <div className="no-results-modal">
            <span className="no-results-icon">🎬</span>
            <p>No movies found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
