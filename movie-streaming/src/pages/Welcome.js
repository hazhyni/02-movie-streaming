import React from "react";
import Button from "../components/Button";
import "../styles/Welcome.css";

const Welcome = ({ setCurrentPage }) => {
  return (
    <div className="welcome">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span>🎬 Welcome to HyFlix</span>
          </div>
          <h1>Stream Your Favorite Movies & Shows</h1>
          <p>Discover thousands of movies and TV shows. Watch anywhere, anytime on any device.</p>
          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon">📱</span>
              <span>Any Device</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🌍</span>
              <span>Anywhere</span>
            </div>
            <div className="feature">
              <span className="feature-icon">⚡</span>
              <span>HD Quality</span>
            </div>
          </div>
          <div className="hero-actions">
            <Button
              variant="primary"
              size="large"
              onClick={() => setCurrentPage("movies")}
            >
              🚀 Start Watching
            </Button>
            <Button 
              variant="secondary" 
              size="large"
              onClick={() => setCurrentPage("about")}
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="hero-image">
          <div className="scrolling-posters">
            <div className="poster-column">
              <img
                src="https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
                alt="Avengers"
                className="poster"
              />
              <img
                src="https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg"
                alt="Joker"
                className="poster"
              />
              <img
                src="https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
                alt="Top Gun"
                className="poster"
              />
              <img
                src="https://image.tmdb.org/t/p/w500/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg"
                alt="Black Panther"
                className="poster"
              />
              <img
                src="https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
                alt="Spider-Man"
                className="poster"
              />
              <img
                src="https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
                alt="Dune"
                className="poster"
              />
              <img
                src="https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
                alt="Avengers"
                className="poster"
              />
              <img
                src="https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg"
                alt="Joker"
                className="poster"
              />
            </div>
            <div className="poster-column">
              <img
                src="https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
                alt="Top Gun"
                className="poster"
              />
              <img
                src="https://image.tmdb.org/t/p/w500/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg"
                alt="Black Panther"
                className="poster"
              />
              <img
                src="https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
                alt="Spider-Man"
                className="poster"
              />
              <img
                src="https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
                alt="Dune"
                className="poster"
              />
              <img
                src="https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
                alt="Avengers"
                className="poster"
              />
              <img
                src="https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg"
                alt="Joker"
                className="poster"
              />
              <img
                src="https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
                alt="Top Gun"
                className="poster"
              />
              <img
                src="https://image.tmdb.org/t/p/w500/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg"
                alt="Black Panther"
                className="poster"
              />
            </div>
            <div className="poster-column">
              <img
                src="https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
                alt="Spider-Man"
                className="poster"
              />
              <img
                src="https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
                alt="Dune"
                className="poster"
              />
              <img
                src="https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
                alt="Avengers"
                className="poster"
              />
              <img
                src="https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg"
                alt="Joker"
                className="poster"
              />
              <img
                src="https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
                alt="Top Gun"
                className="poster"
              />
              <img
                src="https://image.tmdb.org/t/p/w500/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg"
                alt="Black Panther"
                className="poster"
              />
              <img
                src="https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
                alt="Spider-Man"
                className="poster"
              />
              <img
                src="https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
                alt="Dune"
                className="poster"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Movies & Shows</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4K</div>
            <div className="stat-label">Ultra HD Quality</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Available</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Countries</div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="features-container">
          <h2>Why Choose HyFlix?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-large">📺</div>
              <h3>Unlimited Streaming</h3>
              <p>Watch as much as you want, whenever you want</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-large">💾</div>
              <h3>Download & Watch</h3>
              <p>Download your favorites to watch offline</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-large">👥</div>
              <h3>Multiple Profiles</h3>
              <p>Create profiles for different family members</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-large">🎯</div>
              <h3>Smart Recommendations</h3>
              <p>Discover new content based on your preferences</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="cta-container">
          <h2>Ready to Start Watching?</h2>
          <p>Join millions of users streaming their favorite content</p>
          <Button
            variant="primary"
            size="large"
            onClick={() => setCurrentPage("movies")}
          >
            🎬 Browse Movies Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;