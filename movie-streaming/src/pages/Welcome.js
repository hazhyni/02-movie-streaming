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
    </div>
  );
};

export default Welcome;