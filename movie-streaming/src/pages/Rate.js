import React, { useState, useEffect } from "react";
import moviesData from "../data/movies.json";
import "../styles/Rate.css";

const Rate = () => {
  const [votes, setVotes] = useState({
    1: { 1: 45, 2: 32, 3: 28, 4: 15 },
    2: { 5: 67, 6: 43, 7: 29 },
    3: { 8: 52, 9: 38, 10: 31, 11: 24 }
  });
  const [hasVoted, setHasVoted] = useState({});
  const [selectedOption, setSelectedOption] = useState({});
  const [showConfetti, setShowConfetti] = useState(false);
  const [hoveredOption, setHoveredOption] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { movies } = moviesData;

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const polls = [
    {
      id: 1,
      question: "🏆 Best Action Movie of All Time?",
      options: movies.filter(m => m.genre === "Action").slice(0, 4)
    },
    {
      id: 2, 
      question: "🦸 Most Anticipated Superhero Movie?",
      options: movies.filter(m => m.genre === "Superhero").slice(0, 3)
    },
    {
      id: 3,
      question: "🚀 Best Sci-Fi Experience?", 
      options: movies.filter(m => m.genre === "Sci-Fi").slice(0, 4)
    }
  ];

  const handleVote = (pollId, movieId) => {
    if (hasVoted[pollId]) return;
    
    setSelectedOption(prev => ({ ...prev, [pollId]: movieId }));
    
    setTimeout(() => {
      setVotes(prev => ({
        ...prev,
        [pollId]: {
          ...prev[pollId],
          [movieId]: (prev[pollId]?.[movieId] || 0) + 1
        }
      }));
      
      setHasVoted(prev => ({ ...prev, [pollId]: true }));
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }, 300);
  };

  const getTotalVotes = (pollId) => {
    const pollVotes = votes[pollId] || {};
    return Object.values(pollVotes).reduce((sum, count) => sum + count, 0);
  };

  const getVotePercentage = (pollId, movieId) => {
    const total = getTotalVotes(pollId);
    const movieVotes = votes[pollId]?.[movieId] || 0;
    return total > 0 ? Math.round((movieVotes / total) * 100) : 0;
  };

  const getWinner = (pollId) => {
    const pollVotes = votes[pollId] || {};
    const maxVotes = Math.max(...Object.values(pollVotes));
    return Object.keys(pollVotes).find(key => pollVotes[key] === maxVotes);
  };

  if (isLoading) {
    return (
      <div className="rate-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading polls...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rate-page">
      {showConfetti && <div className="confetti">🎉</div>}
      
      <div className="rate-header">
        <h1>Movie Polls</h1>
        <p>Vote for your favorite movies and see live results!</p>
        <div className="stats-summary">
          <span>👥 {Object.values(votes).reduce((sum, poll) => sum + Object.values(poll).reduce((a, b) => a + b, 0), 0)} total votes</span>
          <span>📊 {Object.keys(hasVoted).length}/3 polls completed</span>
        </div>
      </div>

      <div className="polls-container">
        {polls.map((poll) => {
          const winner = getWinner(poll.id);
          return (
            <div key={poll.id} className={`poll-card ${hasVoted[poll.id] ? 'completed' : ''}`}>
              <h2 className="poll-question">{poll.question}</h2>
              <div className="poll-options">
                {poll.options.map((movie) => {
                  const percentage = getVotePercentage(poll.id, movie.id);
                  const movieVotes = votes[poll.id]?.[movie.id] || 0;
                  const isVoted = hasVoted[poll.id];
                  const isSelected = selectedOption[poll.id] === movie.id;
                  const isWinner = winner == movie.id && isVoted;
                  const isHovered = hoveredOption === `${poll.id}-${movie.id}`;
                  
                  return (
                    <div 
                      key={movie.id} 
                      className={`poll-option ${isVoted ? 'voted' : ''} ${isSelected ? 'selected' : ''} ${isWinner ? 'winner' : ''}`}
                      onClick={() => handleVote(poll.id, movie.id)}
                      onMouseEnter={() => setHoveredOption(`${poll.id}-${movie.id}`)}
                      onMouseLeave={() => setHoveredOption(null)}
                    >
                      <div className="movie-option">
                        <div className="poster-container">
                          <img src={movie.poster} alt={movie.title} className="option-poster" />
                          {isWinner && <div className="winner-badge">👑</div>}
                          {!isVoted && isHovered && <div className="vote-hint">Click to vote!</div>}
                        </div>
                        <div className="option-info">
                          <h4>{movie.title}</h4>
                          <p>{movie.year} • ⭐ {movie.rating}</p>
                          {isVoted && <span className="rank">#{poll.options.sort((a, b) => (votes[poll.id]?.[b.id] || 0) - (votes[poll.id]?.[a.id] || 0)).findIndex(m => m.id === movie.id) + 1}</span>}
                        </div>
                      </div>
                      {(isVoted || getTotalVotes(poll.id) > 0) && (
                        <div className="vote-results">
                          <div className="vote-bar">
                            <div 
                              className="vote-fill" 
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <div className="vote-stats">
                            <span>{percentage}%</span>
                            <span>{movieVotes} votes</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              {hasVoted[poll.id] ? (
                <div className="poll-footer completed">
                  <p>✅ Vote recorded! Total: {getTotalVotes(poll.id)} votes</p>
                </div>
              ) : (
                <div className="poll-footer pending">
                  <p>👆 Click on a movie to cast your vote</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rate;