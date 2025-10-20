import React from "react";
import Button from "../components/Button";
import "../styles/Welcome.css";

const Welcome = ({ setCurrentPage }) => {
  return (
    <div className="welcome">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Unlimited movies, TV shows, and more</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <div className="hero-actions">
            <Button
              variant="primary"
              size="large"
              onClick={() => setCurrentPage("movies")}
            >
              Get Started
            </Button>
            <Button variant="secondary" size="large">
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

      <div className="features">
        <div className="feature">
          <div className="feature-icon-animated">
            <div className="devices-demo">
              <div className="device phone">📱</div>
              <div className="device tablet">💻</div>
              <div className="device tv">📺</div>
              <div className="streaming-waves">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
              </div>
            </div>
          </div>
          <h3>Watch on any device</h3>
          <p>Stream on your phone, tablet, laptop, and TV</p>
        </div>
        <div className="feature">
          <div className="feature-icon-animated">
            <div className="download-demo">
              <div className="movie-poster">🎬</div>
              <div className="download-path">
                <div className="download-dot dot-1"></div>
                <div className="download-dot dot-2"></div>
                <div className="download-dot dot-3"></div>
                <div className="download-dot dot-4"></div>
              </div>
              <div className="phone-device">📱</div>
              <div className="download-bar">
                <div className="download-fill"></div>
                <span className="download-percent">Downloaded</span>
              </div>
            </div>
          </div>
          <h3>Download for offline</h3>
          <p>Save your favorites to watch offline</p>
        </div>
        <div className="feature">
          <div className="feature-icon-animated">
            <div className="profiles-demo">
              <div className="main-profile">👤</div>
              <div className="profile-avatars">
                <div className="avatar kid1">👶</div>
                <div className="avatar kid2">👧</div>
                <div className="avatar adult">👨</div>
              </div>
              <div className="profile-selector">
                <div className="selector-dot active"></div>
                <div className="selector-dot"></div>
                <div className="selector-dot"></div>
              </div>
            </div>
          </div>
          <h3>Create profiles</h3>
          <p>Send kids on adventures with their favorite characters</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
