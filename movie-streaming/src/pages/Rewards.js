import React, { useState } from "react";
import "../styles/Rewards.css";

const Rewards = () => {
  const [userPoints, setUserPoints] = useState(2450);
  const [claimedRewards, setClaimedRewards] = useState([]);
  const [activeTab, setActiveTab] = useState("rewards");
  const [showAnimation, setShowAnimation] = useState(false);

  const rewards = [
    {
      id: 1,
      title: "Free Premium Month",
      description: "Get 1 month of premium access",
      points: 1000,
      icon: "👑",
      category: "Premium"
    },
    {
      id: 2,
      title: "Movie Poster",
      description: "Digital movie poster collection",
      points: 500,
      icon: "🎬",
      category: "Digital"
    },
    {
      id: 3,
      title: "Early Access",
      description: "Watch new releases 24h early",
      points: 800,
      icon: "⚡",
      category: "Access"
    },
    {
      id: 4,
      title: "Cinema Voucher",
      description: "$10 cinema ticket discount",
      points: 1500,
      icon: "🎫",
      category: "Voucher"
    },
    {
      id: 5,
      title: "Exclusive Badge",
      description: "Show off your movie expertise",
      points: 300,
      icon: "🏆",
      category: "Badge"
    },
    {
      id: 6,
      title: "Director's Cut",
      description: "Access to director's commentary",
      points: 600,
      icon: "🎥",
      category: "Content"
    }
  ];

  const activities = [
    { action: "Watch a movie", points: 50 },
    { action: "Rate a movie", points: 20 },
    { action: "Write a review", points: 100 },
    { action: "Share a movie", points: 30 },
    { action: "Join discussion", points: 40 },
    { action: "Daily login", points: 10 }
  ];

  const handleClaim = (rewardId, cost) => {
    if (userPoints >= cost && !claimedRewards.includes(rewardId)) {
      setUserPoints(prev => prev - cost);
      setClaimedRewards(prev => [...prev, rewardId]);
      setShowAnimation(true);
      setTimeout(() => setShowAnimation(false), 2000);
    }
  };

  const getUserLevel = () => {
    if (userPoints >= 5000) return { level: "Master", icon: "👑", color: "#ffd700" };
    if (userPoints >= 3000) return { level: "Expert", icon: "🎖️", color: "#ff6b6b" };
    if (userPoints >= 1500) return { level: "Pro", icon: "🏆", color: "#4ade80" };
    if (userPoints >= 500) return { level: "Fan", icon: "⭐", color: "#60a5fa" };
    return { level: "Newbie", icon: "🎬", color: "#a78bfa" };
  };

  const getProgressToNext = () => {
    const levels = [0, 500, 1500, 3000, 5000];
    const currentLevelIndex = levels.findIndex(level => userPoints < level);
    if (currentLevelIndex === -1) return { progress: 100, nextLevel: "Max Level" };
    
    const currentLevel = levels[currentLevelIndex - 1] || 0;
    const nextLevel = levels[currentLevelIndex];
    const progress = ((userPoints - currentLevel) / (nextLevel - currentLevel)) * 100;
    
    return { progress, nextLevel, pointsNeeded: nextLevel - userPoints };
  };

  return (
    <div className="rewards-page">
      <div className="rewards-header">
        <h1>🎁 Rewards Center</h1>
        <p>Earn points by watching movies and unlock amazing rewards!</p>
      </div>

      {showAnimation && (
        <div className="success-animation">
          <div className="success-content">
            <div className="success-icon">🎉</div>
            <span>Reward Claimed!</span>
          </div>
        </div>
      )}

      <div className="dashboard-container">
        <div className="profile-card">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
            alt="Profile" 
            className="profile-avatar"
          />
          
          <div className="profile-details">
            <h2 className="username">MovieLover</h2>
            <div className="user-level">
              <span className="level-icon">{getUserLevel().icon}</span>
              <span className="level-text" style={{color: getUserLevel().color}}>
                {getUserLevel().level} Cinephile
              </span>
            </div>
          </div>
          
          <div className="points-display">
            <span className="points-value">{userPoints.toLocaleString()}</span>
            <span className="points-label">Points</span>
          </div>
          
          <div className="progress-section">
            <div className="progress-info">
              <span>Progress to {getUserLevel().level === "Master" ? "Max Level" : getProgressToNext().nextLevel}</span>
              {getProgressToNext().pointsNeeded && (
                <span>{getProgressToNext().pointsNeeded} pts needed</span>
              )}
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{width: `${getProgressToNext().progress}%`}}
              ></div>
            </div>
          </div>
        </div>

        <div className="quick-actions">
          <h3>🚀 Earn Points</h3>
          <div className="actions-grid">
            {activities.slice(0, 4).map((activity, index) => (
              <div key={index} className="action-card">
                <div className="action-icon">
                  {index === 0 ? "🎬" : index === 1 ? "⭐" : index === 2 ? "✍️" : "🔗"}
                </div>
                <div className="action-info">
                  <span className="action-name">{activity.action}</span>
                  <span className="action-points">+{activity.points} pts</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="content-tabs">
        <button 
          className={`tab-btn ${activeTab === "rewards" ? "active" : ""}`}
          onClick={() => setActiveTab("rewards")}
        >
          🎁 Rewards
        </button>
        <button 
          className={`tab-btn ${activeTab === "history" ? "active" : ""}`}
          onClick={() => setActiveTab("history")}
        >
          📈 History
        </button>
        <button 
          className={`tab-btn ${activeTab === "leaderboard" ? "active" : ""}`}
          onClick={() => setActiveTab("leaderboard")}
        >
          🏆 Leaderboard
        </button>
      </div>

      {activeTab === "rewards" && (
        <div className="rewards-section">
          <div className="section-header">
            <div className="header-content">
              <h2>🏪 Available Rewards</h2>
              <p className="section-subtitle">Redeem your points for amazing rewards</p>
            </div>
            <div className="filter-chips">
              <button className="filter-chip active">All</button>
              <button className="filter-chip">Premium</button>
              <button className="filter-chip">Digital</button>
              <button className="filter-chip">Voucher</button>
            </div>
          </div>
          
          <div className="rewards-grid">
            {rewards.map(reward => {
              const canClaim = userPoints >= reward.points;
              const isClaimed = claimedRewards.includes(reward.id);
              
              return (
                <div key={reward.id} className={`reward-card ${isClaimed ? 'claimed' : ''} ${!canClaim ? 'locked' : ''}`}>
                  <div className="reward-header">
                    <div className="reward-icon">{reward.icon}</div>
                    <div className="reward-title-section">
                      <h4>{reward.title}</h4>
                      <div className="reward-category">{reward.category}</div>
                    </div>
                  </div>
                  <p className="reward-description">{reward.description}</p>
                  <div className="reward-footer">
                    <span className="reward-cost">{reward.points} pts</span>
                    <button 
                      className="claim-btn"
                      disabled={!canClaim || isClaimed}
                      onClick={() => handleClaim(reward.id, reward.points)}
                    >
                      {isClaimed ? 'Claimed' : canClaim ? 'Claim' : 'Locked'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {activeTab === "history" && (
        <div className="history-section">
          <h2>📈 Points History</h2>
          <div className="history-list">
            <div className="history-item">
              <span className="history-icon">🎬</span>
              <div className="history-details">
                <span className="history-action">Watched "Avengers: Endgame"</span>
                <span className="history-time">2 hours ago</span>
              </div>
              <span className="history-points">+50 pts</span>
            </div>
            <div className="history-item">
              <span className="history-icon">⭐</span>
              <div className="history-details">
                <span className="history-action">Rated "Joker"</span>
                <span className="history-time">1 day ago</span>
              </div>
              <span className="history-points">+20 pts</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === "leaderboard" && (
        <div className="leaderboard-section">
          <h2>🏆 Top Movie Fans</h2>
          <div className="leaderboard-list">
            <div className="leaderboard-item rank-1">
              <span className="rank">#1</span>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="User" className="user-avatar" />
              <span className="user-name">CinemaKing</span>
              <span className="user-points">8,450 pts</span>
            </div>
            <div className="leaderboard-item rank-2">
              <span className="rank">#2</span>
              <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" alt="User" className="user-avatar" />
              <span className="user-name">MovieQueen</span>
              <span className="user-points">6,230 pts</span>
            </div>
            <div className="leaderboard-item current-user">
              <span className="rank">#8</span>
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="You" className="user-avatar" />
              <span className="user-name">You (MovieLover)</span>
              <span className="user-points">{userPoints.toLocaleString()} pts</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rewards;