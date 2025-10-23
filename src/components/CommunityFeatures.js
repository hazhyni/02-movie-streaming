import React from "react";
import "../styles/CommunityFeatures.css";

const CommunityFeatures = () => {
  return (
    <>
      {/* Section 1: Rating & Reviews */}
      <section className="feature-section rating-section">
        <div className="section-content">
          <div className="content-left">
            <h2>Rate & Review Movies</h2>
            <p>
              Share your opinions and discover what others think about your
              favorite films
            </p>
            <div className="feature-list">
              <div className="feature-item">
                <span className="icon">⭐</span>
                <span>5-star rating system</span>
              </div>
              <div className="feature-item">
                <span className="icon">📝</span>
                <span>Write detailed reviews</span>
              </div>
              <div className="feature-item">
                <span className="icon">👍</span>
                <span>Like and share reviews</span>
              </div>
            </div>
          </div>
          <div className="content-right">
            <div className="interactive-demo rating-demo">
              <div className="movie-card-demo">
                <img
                  src="https://image.tmdb.org/t/p/w300/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
                  alt="Movie"
                />
                <div className="rating-overlay">
                  <div className="stars-interactive">
                    <span className="star-big">⭐</span>
                    <span className="star-big">⭐</span>
                    <span className="star-big">⭐</span>
                    <span className="star-big">⭐</span>
                    <span className="star-big">⭐</span>
                  </div>
                  <div className="rating-text">4.8/5 (2.1k reviews)</div>
                </div>
              </div>
              <div className="floating-reviews">
                <div className="review-bubble bubble-1">"Epic movie! 🔥"</div>
                <div className="review-bubble bubble-2">
                  "Best superhero film"
                </div>
                <div className="review-bubble bubble-3">
                  "Amazing visuals! ⭐⭐⭐⭐⭐"
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Live Community */}
      <section className="feature-section community-section">
        <div className="section-content">
          <div className="content-left">
            <div className="interactive-demo community-demo">
              <div className="chat-window">
                <div className="chat-header">
                  <span>🔴 Live Chat - Avengers Endgame</span>
                  <span className="viewers">1.2k watching</span>
                </div>
                <div className="chat-messages">
                  <div className="message slide-up">
                    <div className="user-avatar">👨</div>
                    <span>This scene gives me chills! 🔥</span>
                  </div>
                  <div className="message slide-up delay-1">
                    <div className="user-avatar">👩</div>
                    <span>Tony Stark is the GOAT 🐐</span>
                  </div>
                  <div className="message slide-up delay-2">
                    <div className="user-avatar">🧑</div>
                    <span>I'm crying 😭😭😭</span>
                  </div>
                </div>
              </div>
              <div className="community-stats">
                <div className="stat-item pulse">
                  <span className="stat-number">50k+</span>
                  <span className="stat-label">Active Users</span>
                </div>
                <div className="stat-item pulse delay-1">
                  <span className="stat-number">200+</span>
                  <span className="stat-label">Communities</span>
                </div>
              </div>
            </div>
          </div>
          <div className="content-right">
            <h2>Live Community Experience</h2>
            <p>
              Connect with movie fans worldwide and share the excitement in
              real-time
            </p>
            <div className="feature-list">
              <div className="feature-item">
                <span className="icon">💬</span>
                <span>Real-time chat during movies</span>
              </div>
              <div className="feature-item">
                <span className="icon">👥</span>
                <span>Join fan communities</span>
              </div>
              <div className="feature-item">
                <span className="icon">🎉</span>
                <span>Host watch parties</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Earn Rewards */}
      <section className="feature-section rating-section">
        <div className="section-content">
          <div className="content-left">
            <h2>Unlock Cinema Rewards</h2>
            <p>
              Turn your movie passion into valuable rewards and exclusive experiences
            </p>
            <div className="feature-list">
              <div className="feature-item">
                <span className="icon">💳</span>
                <span>Cashback on purchases</span>
              </div>
              <div className="feature-item">
                <span className="icon">🎆</span>
                <span>Exclusive merchandise</span>
              </div>
              <div className="feature-item">
                <span className="icon">🎥</span>
                <span>Behind-the-scenes content</span>
              </div>
            </div>
          </div>
          <div className="content-right">
            <div className="interactive-demo rating-demo">
              <div className="movie-card-demo">
                <img
                  src="https://image.tmdb.org/t/p/w300/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg"
                  alt="Rewards"
                />
                <div className="rating-overlay">
                  <div className="stars-interactive">
                    <span className="star-big">💳</span>
                    <span className="star-big">🎆</span>
                    <span className="star-big">🎥</span>
                    <span className="star-big">🔥</span>
                    <span className="star-big">🏅</span>
                  </div>
                  <div className="rating-text">Gold Member (2,500 points)</div>
                </div>
              </div>
              <div className="floating-reviews">
                <div className="review-bubble bubble-1">"Cashback Earned! 💳"</div>
                <div className="review-bubble bubble-2">
                  "Exclusive Item Unlocked!"
                </div>
                <div className="review-bubble bubble-3">
                  "Bonus Content Available! 🎥🎆"
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommunityFeatures;
