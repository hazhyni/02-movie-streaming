import React, { useState, useEffect } from 'react';
import SearchModal from './SearchModal';
import VideoPlayer from './VideoPlayer';

const GlobalSearch = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [playingMovie, setPlayingMovie] = useState(null);

  const handleMovieSelect = (movie, action) => {
    if (action === 'play') {
      setPlayingMovie(movie);
    }
    setIsSearchOpen(false);
  };

  useEffect(() => {
    const handleOpenSearch = () => {
      setIsSearchOpen(true);
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (e.target.classList.contains('search-modal')) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('openSearchModal', handleOpenSearch);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('openSearchModal', handleOpenSearch);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onMovieSelect={handleMovieSelect}
      />
      <VideoPlayer 
        movie={playingMovie}
        onClose={() => setPlayingMovie(null)}
      />
    </>
  );
};

export default GlobalSearch;