import React, { useState } from "react";
import moviesData from "../data/movies.json";
import VideoPlayer from "../components/VideoPlayer";
import MovieDetails from "../components/MovieDetails";
import Button from "../components/Button";
import "../styles/Movies.css";

const Movies = ({ selectedGenre: propSelectedGenre, setSelectedGenre: propSetSelectedGenre }) => {
  const [selectedGenre, setSelectedGenre] = useState(propSelectedGenre || "All");
  const [selectedYear, setSelectedYear] = useState("All");

  // Update local state when prop changes
  React.useEffect(() => {
    if (propSelectedGenre !== undefined) {
      setSelectedGenre(propSelectedGenre || "All");
    }
  }, [propSelectedGenre]);
  const [playingMovie, setPlayingMovie] = useState(null);
  const [detailMovie, setDetailMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedCard, setExpandedCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 8;

  const { movies, genres } = moviesData;

  // Simulate loading
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const years = React.useMemo(() => [
    "All",
    ...Array.from(new Set(movies.map(movie => movie.year)))
      .sort((a, b) => b - a)
      .map(year => year.toString())
  ], [movies]);



  const filteredMovies = React.useMemo(() => 
    movies.filter((movie) => {
      return (
        (selectedGenre === "All" || movie.genre === selectedGenre) &&
        (selectedYear === "All" || movie.year.toString() === selectedYear)
      );
    }), [movies, selectedGenre, selectedYear]
  );

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
  const startIndex = (currentPage - 1) * moviesPerPage;
  const currentMovies = filteredMovies.slice(startIndex, startIndex + moviesPerPage);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedGenre, selectedYear]);

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
            onChange={(e) => {
              const newGenre = e.target.value;
              setSelectedGenre(newGenre);
              if (propSetSelectedGenre) {
                propSetSelectedGenre(newGenre === "All" ? null : newGenre);
              }
            }}
          >
            <option value="All">All Genres</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.name}>
                {genre.name} ({genre.count})
              </option>
            ))}
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
          {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
        </div>
      </div>

      {detailMovie && (
        <MovieDetails 
          movie={detailMovie}
          onPlay={setPlayingMovie}
          onClose={() => setDetailMovie(null)}
        />
      )}

      {isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading movies...</p>
        </div>
      ) : filteredMovies.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🎬</div>
          <h3>No movies found</h3>
          <p>Try adjusting your filters to see more results</p>
          <Button 
            variant="primary"
            onClick={() => {
              setSelectedGenre("All");
              setSelectedYear("All");
            }}
          >
            Reset Filters
          </Button>
        </div>
      ) : (
        <>
          {totalPages > 1 && (
            <div className="pagination">
              <button 
                className="pagination-btn" 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                ‹ Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <button 
                className="pagination-btn" 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next ›
              </button>
            </div>
          )}
          <div className="movies-grid">
          {currentMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <div className="movie-poster">
                <img 
                  src={movie.poster} 
                  alt={movie.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = '/placeholder-movie.jpg';
                    e.target.onerror = null;
                  }}
                />
                <div className="movie-overlay">
                  <Button 
                    variant="circular"
                    onClick={() => setPlayingMovie(movie)}
                    title="Play Movie"
                    icon="▶"
                  />
                  <Button 
                    variant="circular"
                    className="btn-info"
                    onClick={() => setDetailMovie(movie)}
                    title="Movie Details"
                    icon="ℹ"
                  />
                </div>
              </div>
              <div className="movie-info">
                <div className="title-row">
                  <h3 title={movie.title}>{movie.title}</h3>
                  <span className="rating-badge">{movie.rating}</span>
                </div>
                <div className="movie-meta">
                  <div className="meta-row">
                    <span className="genre">{movie.genre}</span>
                    <span className="year">{movie.year}</span>
                  </div>
                  <div className="description-container">
                    <p className={`movie-description ${expandedCard === movie.id ? 'expanded' : ''}`}>
                      {movie.description}
                    </p>
                    {movie.description.length > 100 && (
                      <button 
                        className="description-toggle"
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedCard(expandedCard === movie.id ? null : movie.id);
                        }}
                      >
                        {expandedCard === movie.id ? 'Show less' : 'Detail...'}
                      </button>
                    )}
                  </div>
                  <div className="meta-row">
                    <span className="likes">❤️ {movie.loves}</span>
                    <span className="views">👁️ {(movie.views / 1000000).toFixed(1)}M</span>
                  </div>
                </div>
                <div className="movie-pagination">
                  <span className="movie-number">{filteredMovies.indexOf(movie) + 1}</span>
                  <span className="movie-total">of {filteredMovies.length}</span>
                </div>
              </div>
            </div>
          ))}
          </div>
          {totalPages > 1 && (
            <div className="pagination">
              <button 
                className="pagination-btn" 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                ‹ Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <button 
                className="pagination-btn" 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next ›
              </button>
            </div>
          )}
        </>
      )}
      <VideoPlayer 
        movie={playingMovie}
        onClose={() => setPlayingMovie(null)}
      />
    </div>
  );
};

export default Movies;
