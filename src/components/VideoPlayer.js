import React, { useState, useEffect, useRef } from 'react';
import '../styles/VideoPlayer.css';

const VideoPlayer = ({ movie, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [volume, setVolume] = useState(80);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (document.fullscreenElement) {
          document.exitFullscreen();
          setIsFullscreen(false);
        } else {
          onClose();
        }
      }
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying(!isPlaying);
      }
      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      }
    };
    
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [isPlaying, onClose]);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setProgress(prev => prev < 100 ? prev + 0.1 : 100);
      }, 100);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handlePlay = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsPlaying(true);
    }, 1000);
  };

  const hideControlsAfterDelay = () => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  };

  const showControlsTemporarily = () => {
    setShowControls(true);
    hideControlsAfterDelay();
  };

  if (!movie) return null;

  return (
    <div className={`video-player-overlay ${isFullscreen ? 'fullscreen' : ''}`} onClick={onClose}>
      <div ref={containerRef} className={`video-player-container ${isFullscreen ? 'fullscreen' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className="video-player-header">
          <h2>{movie.title}</h2>
          <button className="close-player" onClick={onClose} title="Close (Esc)">✕</button>
        </div>
        <div 
          className="video-player"
          onMouseMove={showControlsTemporarily}
          onClick={showControlsTemporarily}
        >
          {isLoading && (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Loading {movie.title}...</p>
            </div>
          )}
          {!isPlaying && !isLoading && (
            <div className="video-placeholder">
              <img src={movie.poster} alt={movie.title} className="backdrop-poster" />
              <div className="play-overlay">
                <div className="play-icon" onClick={handlePlay}>▶</div>
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <p>{movie.year} • {movie.duration} • {movie.genre}</p>
                  <div className="rating">⭐ {movie.rating}</div>
                </div>
              </div>
            </div>
          )}
          {isPlaying && (
            <div className="playing-overlay" onClick={() => setIsPlaying(false)}>
              <div className="pause-icon">⏸</div>
            </div>
          )}
        </div>
        <div className={`video-controls ${showControls ? 'visible' : 'hidden'}`}>
          <button className="control-btn" title="Previous">⏮</button>
          <button 
            className="control-btn play-pause" 
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? 'Pause (Space)' : 'Play (Space)'}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button className="control-btn" title="Next">⏭</button>
          <div className="progress-bar" title="Seek">
            <div className="progress-fill" style={{width: `${progress}%`}}></div>
            <div className="progress-thumb" style={{left: `${progress}%`}}></div>
          </div>
          <div className="volume-control">
            <button className="control-btn volume-btn" title="Volume">
              {volume === 0 ? '🔇' : volume < 50 ? '🔉' : '🔊'}
            </button>
            <div className="volume-slider">
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
              />
            </div>
          </div>
          <span className="time">{Math.floor(progress)}% / {movie.duration}</span>
          <button className="control-btn" onClick={toggleFullscreen} title={isFullscreen ? 'Exit Fullscreen (F)' : 'Fullscreen (F)'}>
            {isFullscreen ? '⛷' : '⛶'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;