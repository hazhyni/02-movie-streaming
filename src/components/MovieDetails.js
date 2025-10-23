import React from 'react';
import '../styles/MovieDetails.css';

const MovieDetails = ({ movie, onPlay }) => {
  if (!movie) return null;

  return (
    <div className="movie-details">
      <div className="movie-details-backdrop">
        <img src={movie.backdrop} alt={movie.title} />
        <div className="backdrop-overlay"></div>
      </div>
      <div className="movie-details-content">
        <div className="movie-poster">
          <img src={movie.poster} alt={movie.title} />
        </div>
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <div className="movie-meta">
            <span className="rating">⭐ {movie.rating}</span>
            <span className="year">{movie.year}</span>
            <span className="duration">{movie.duration}</span>
            <span className="genre">{movie.genre}</span>
          </div>
          <p className="description">{movie.description}</p>
          <div className="movie-cast">
            <strong>Cast:</strong> {movie.cast.join(', ')}
          </div>
          <div className="movie-director">
            <strong>Director:</strong> {movie.director}
          </div>
          <div className="movie-actions">
            <button className="play-btn-large" onClick={() => onPlay(movie)}>
              ▶ Play
            </button>
            <button className="add-list-btn">+ My List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;