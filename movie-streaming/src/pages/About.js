import React from "react";
import "../styles/About.css";

const About = () => {
  const features = [
    {
      icon: "🎬",
      title: "Unlimited Movies",
      description: "Access thousands of movies across all genres"
    },
    {
      icon: "📱",
      title: "Multi-Device",
      description: "Watch on any device, anywhere, anytime"
    },
    {
      icon: "⭐",
      title: "Rate & Review",
      description: "Share your opinions and discover new favorites"
    },
    {
      icon: "💬",
      title: "Community",
      description: "Connect with fellow movie enthusiasts"
    }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sarah Chen",
      role: "Head of Content",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Mike Rodriguez",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About HyFlix</h1>
        <p>Your ultimate destination for movie streaming and community engagement</p>
      </div>

      <div className="about-content">
        <section className="mission-section">
          <h2>🎯 Our Mission</h2>
          <p>
            At HyFlix, we believe movies have the power to inspire, entertain, and bring people together. 
            Our mission is to create the ultimate streaming platform where movie lovers can discover, 
            watch, and discuss their favorite films in a vibrant community environment.
          </p>
        </section>

        <section className="features-section">
          <h2>✨ What We Offer</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="stats-section">
          <h2>📊 By the Numbers</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Movies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Users</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1M+</span>
              <span className="stat-label">Reviews</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>👥 Meet Our Team</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <img src={member.image} alt={member.name} className="team-photo" />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section">
          <h2>📞 Get in Touch</h2>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>support@hyflix.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🌐</span>
              <span>www.hyflix.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;