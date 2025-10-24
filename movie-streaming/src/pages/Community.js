import React, { useState } from "react";
import moviesData from "../data/movies.json";
import reviewsData from "../data/reviews.json";
import discussionsData from "../data/discussions.json";
import "../styles/Community.css";

const Community = () => {
  const [activeTab, setActiveTab] = useState("discussions");
  const [newPost, setNewPost] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");
  const [showMovieDropdown, setShowMovieDropdown] = useState(false);
  const [movieSearch, setMovieSearch] = useState("");
  const [selectedMovieData, setSelectedMovieData] = useState(null);

  const [selectedGenre, setSelectedGenre] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [discussionPage, setDiscussionPage] = useState(1);
  const reviewsPerPage = 4;
  const discussionsPerPage = 3;
  const [discussions, setDiscussions] = useState(discussionsData.discussions);

  const { movies } = moviesData;
  const { reviews } = reviewsData;

  const handleLike = (id) => {
    setDiscussions((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const handlePost = () => {
    if (!newPost.trim() || !selectedMovie) return;

    const movie = movies.find((m) => m.id === selectedMovie);
    const post = {
      id: Date.now(),
      user: "You",
      avatar: "👤",
      movie: movie?.title || "General",
      title: newPost.slice(0, 50) + (newPost.length > 50 ? "..." : ""),
      content: newPost,
      likes: 0,
      replies: 0,
      time: "Just now",
      liked: false,
    };

    setDiscussions((prev) => [post, ...prev]);
    setNewPost("");
    setSelectedMovie("");
    setSelectedMovieData(null);
    setMovieSearch("");
    setShowMovieDropdown(false);
    setDiscussionPage(1);
  };

  const filteredMovies = movies
    .filter((movie) => {
      const search = movieSearch.toLowerCase();
      return (
        movie.title.toLowerCase().includes(search) ||
        movie.genre.toLowerCase().includes(search) ||
        movie.year.toString().includes(search)
      );
    })
    .sort((a, b) => {
      const search = movieSearch.toLowerCase();
      const aTitle = a.title.toLowerCase().includes(search);
      const bTitle = b.title.toLowerCase().includes(search);
      if (aTitle && !bTitle) return -1;
      if (!aTitle && bTitle) return 1;
      return b.rating - a.rating;
    });

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie.id);
    setSelectedMovieData(movie);
    setMovieSearch("");
    setShowMovieDropdown(false);
  };

  const clearSelection = () => {
    setSelectedMovie("");
    setSelectedMovieData(null);
    setMovieSearch("");
  };



  const renderDiscussions = () => (
    <div className="discussions-section">
      <div className="post-creator">
        <h3>💬 Start a Discussion</h3>
        <div className="movie-selector-container">
          {selectedMovieData ? (
            <div className="selected-movie">
              <img
                src={selectedMovieData.poster}
                alt={selectedMovieData.title}
                className="selected-thumb"
              />
              <div className="selected-info">
                <span className="selected-title">
                  {selectedMovieData.title}
                </span>
                <span className="selected-meta">
                  {selectedMovieData.year} • {selectedMovieData.genre} • ⭐{" "}
                  {selectedMovieData.rating}
                </span>
              </div>
              <button className="clear-btn" onClick={clearSelection}>
                ✕
              </button>
            </div>
          ) : (
            <>
              <button
                className="movie-selector-btn"
                onClick={() => setShowMovieDropdown(true)}
              >
                🎬 Select a movie to discuss
              </button>

              {showMovieDropdown && (
                <div
                  className="movie-modal-overlay"
                  onClick={() => setShowMovieDropdown(false)}
                >
                  <div
                    className="movie-modal"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="modal-header">
                      <h3>🎬 Choose a Movie</h3>
                      <button
                        className="close-modal"
                        onClick={() => setShowMovieDropdown(false)}
                      >
                        ✕
                      </button>
                    </div>

                    <div className="search-container">
                      <input
                        type="text"
                        value={movieSearch}
                        onChange={(e) => setMovieSearch(e.target.value)}
                        placeholder="Search movies..."
                        className="modal-search"
                        autoFocus
                      />
                    </div>

                    <div className="movies-slider">
                      {filteredMovies.map((movie) => (
                        <div
                          key={movie.id}
                          className="movie-card-slider"
                          onClick={() => handleMovieSelect(movie)}
                        >
                          <div className="card-poster">
                            <img src={movie.poster} alt={movie.title} />
                            <div className="card-overlay">
                              <span className="select-text">Select</span>
                            </div>
                          </div>
                          <div className="card-info">
                            <h4>{movie.title}</h4>
                            <div className="card-meta">
                              <span className="card-year">{movie.year}</span>
                              <span className="card-genre">{movie.genre}</span>
                              <span className="card-rating">
                                ⭐ {movie.rating}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share your thoughts about this movie..."
          className="post-input"
        />
        <button
          onClick={handlePost}
          className="post-btn"
          disabled={!newPost.trim() || !selectedMovie}
        >
          📝 Post Discussion
        </button>
      </div>

      <div className="discussions-container">
        <div className="discussions-header">
          <h3>💬 Recent Discussions</h3>
          <span className="discussions-count">
            {discussions.length} discussions
          </span>
        </div>

        <div className="discussions-list">
          {(() => {
            const startIndex = (discussionPage - 1) * discussionsPerPage;
            const paginatedDiscussions = discussions.slice(
              startIndex,
              startIndex + discussionsPerPage
            );

            return paginatedDiscussions.map((post) => (
              <div key={post.id} className="discussion-card">
                <div className="discussion-header">
                  <div className="user-info">
                    <span className="avatar">{post.avatar}</span>
                    <div>
                      <span className="username">{post.user}</span>
                      <span className="movie-tag">{post.movie}</span>
                    </div>
                  </div>
                  <span className="time">{post.time}</span>
                </div>
                <h4 className="discussion-title">{post.title}</h4>
                <p className="discussion-content">{post.content}</p>
                <div className="discussion-actions">
                  <button
                    className={`action-btn ${post.liked ? "liked" : ""}`}
                    onClick={() => handleLike(post.id)}
                  >
                    ❤️ {post.likes}
                  </button>
                  <button className="action-btn">💬 {post.replies}</button>
                  <button className="action-btn">🔗 Share</button>
                </div>
              </div>
            ));
          })()}
        </div>

        {Math.ceil(discussions.length / discussionsPerPage) > 1 && (
          <div className="pagination">
            <button
              className="page-btn"
              disabled={discussionPage === 1}
              onClick={() => setDiscussionPage((prev) => prev - 1)}
            >
              ← Previous
            </button>

            {Array.from(
              { length: Math.ceil(discussions.length / discussionsPerPage) },
              (_, i) => i + 1
            ).map((page) => (
              <button
                key={page}
                className={`page-btn ${
                  discussionPage === page ? "active" : ""
                }`}
                onClick={() => setDiscussionPage(page)}
              >
                {page}
              </button>
            ))}

            <button
              className="page-btn"
              disabled={
                discussionPage ===
                Math.ceil(discussions.length / discussionsPerPage)
              }
              onClick={() => setDiscussionPage((prev) => prev + 1)}
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderTrending = () => (
    <div className="trending-section">
      <h3>🔥 Trending Topics</h3>
      <div className="trending-list">
        {[
          "#AvengersEndgame",
          "#JokerMovie",
          "#DunePartTwo",
          "#TopGunMaverick",
          "#BlackPanther",
        ].map((tag, index) => (
          <div key={tag} className="trending-item">
            <span className="trend-rank">#{index + 1}</span>
            <span className="trend-tag">{tag}</span>
            <span className="trend-count">
              {Math.floor(Math.random() * 1000) + 100} posts
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderReviews = () => {
    const filteredReviews = reviews.filter((review) => {
      if (selectedGenre === "All") return true;
      const movie = movies.find((m) => m.id === review.movieId);
      return movie?.genre === selectedGenre;
    });

    const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const paginatedReviews = filteredReviews.slice(
      startIndex,
      startIndex + reviewsPerPage
    );

    const genres = ["All", ...new Set(movies.map((m) => m.genre))];

    return (
      <div className="reviews-section">
        <div className="reviews-layout">
          <div className="genre-sidebar">
            <h4>🎭 Genres</h4>
            <div className="genre-list">
              {genres.map((genre) => (
                <button
                  key={genre}
                  className={`genre-btn ${
                    selectedGenre === genre ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedGenre(genre);
                    setCurrentPage(1);
                  }}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          <div className="reviews-content">
            <div className="reviews-header">
              <h3>⭐ Latest Reviews</h3>
              <span className="reviews-count">
                {filteredReviews.length} reviews
              </span>
            </div>

            <div className="reviews-grid">
              {paginatedReviews.map((review) => {
                const movie = movies.find((m) => m.id === review.movieId);
                return (
                  <div key={review.id} className="review-card">
                    <img
                      src={movie?.poster}
                      alt={movie?.title}
                      className="review-poster"
                    />
                    <div className="review-info">
                      <h4>{movie?.title}</h4>
                      <div className="rating-stars">
                        {"⭐".repeat(Math.floor(review.rating / 2))}
                      </div>
                      <p className="review-snippet">{review.content}</p>
                      <span className="reviewer">
                        {review.avatar} {review.user}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {totalPages > 1 && (
              <div className="pagination">
                <button
                  className="page-btn"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                  ← Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      className={`page-btn ${
                        currentPage === page ? "active" : ""
                      }`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  className="page-btn"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="community-page">
      <div className="community-header">
        <h1>Community Hub</h1>
        <p>Connect with fellow movie enthusiasts and share your passion!</p>
      </div>

      <div className="community-tabs">
        <button
          className={`tab ${activeTab === "discussions" ? "active" : ""}`}
          onClick={() => setActiveTab("discussions")}
        >
          💬 Discussions
        </button>
        <button
          className={`tab ${activeTab === "trending" ? "active" : ""}`}
          onClick={() => setActiveTab("trending")}
        >
          🔥 Trending
        </button>
        <button
          className={`tab ${activeTab === "reviews" ? "active" : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          ⭐ Reviews
        </button>
      </div>

      <div className="community-content">
        {activeTab === "discussions" && renderDiscussions()}
        {activeTab === "trending" && renderTrending()}
        {activeTab === "reviews" && renderReviews()}
      </div>
    </div>
  );
};

export default Community;
