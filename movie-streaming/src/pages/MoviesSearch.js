import React, { useState, useEffect, useRef } from 'react';
import Button from '../components/Button';
import moviesData from '../data/movies.json';
import '../styles/MoviesSearch.css';

const MoviesSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  
  const { movies, genres } = moviesData;

  const handleSearch = () => {
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
  };
  
  useEffect(() => {
    if (searchQuery || selectedGenre !== 'All') {
      handleSearch();
    }
  }, [selectedGenre]);
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
        e.preventDefault();
        setIsSearchOpen(true);
        setTimeout(() => searchInputRef.current?.focus(), 100);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="movies-search-page">
      <div className="search-hero">
        <h1>Find Your Perfect Movie</h1>
        <p>Search through thousands of movies and TV shows</p>
        
        <div className="search-container">
          <div className="search-trigger" onClick={() => setIsSearchOpen(true)}>
            <span className="search-icon">🔍</span>
            <span className="search-placeholder">Search movies, actors, categories...</span>
            <span className="search-shortcut">Ctrl+M</span>
          </div>
        </div>
        
        {isSearchOpen && (
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
                  <button 
                    className="close-search"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    ✕
                  </button>
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
                    <div key={movie.id} className="search-result-item">
                      <img src={movie.poster} alt={movie.title} className="result-thumb" />
                      <div className="result-details">
                        <h4>{movie.title}</h4>
                        <div className="result-meta-inline">
                          <span>{movie.year}</span>
                          <span>{movie.genre}</span>
                          <span>⭐ {movie.rating}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="small" icon="▶">Play</Button>
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
        )}
      </div>


    </div>
  );
};

export default MoviesSearch;