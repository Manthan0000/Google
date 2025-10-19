import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSurveyClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      window.open('https://forms.gle/zxonpDcWuybeAZdc9', '_blank');
    }, 500);
  };

  const emojis = ['😂', '🤣', '😭', '💀', '🔥', '✨', '💯', '👑', '🎉', '🚀'];

  return (
    <div className="App">
      {showConfetti && (
        <div className="confetti">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="confetti-piece"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                backgroundColor: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'][Math.floor(Math.random() * 6)]
              }}
            />
          ))}
        </div>
      )}
      
      <div className={`container ${isVisible ? 'visible' : ''}`}>
        <header className="header">
          <h1 className="title">
            <span className="emoji">📱</span>
            Social Media Survey
            <span className="emoji">📱</span>
          </h1>
          <p className="subtitle">Fill the form and get good marks in mid-sem! 🎯</p>
        </header>

        <main className="main-content">
          <div className="hero-section">
            <div className="floating-emojis">
              {emojis.map((emoji, index) => (
                <span 
                  key={index} 
                  className="floating-emoji"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    left: `${10 + (index * 8)}%`
                  }}
                >
                  {emoji}
                </span>
              ))}
            </div>
            
            <div className="survey-card">
              <h2 className="card-title">
                No social media for one day? 
                <br />
                That's like WhatsApp group without good morning texts 🌞🌸😂
              </h2>
              
              <div className="message-box">
                <p className="message-text">
                  <span className="highlight">Fill the form and get good marks in mid-sem! 🎯</span>
                </p>
                <p className="signature">Best wishes from Manthan Jasoliya 🙏</p>
              </div>

              <button 
                className="survey-button"
                onClick={handleSurveyClick}
              >
                <span className="button-text">Form Bhar De Bhai! 📝</span>
                <span className="button-emoji">👉</span>
              </button>
            </div>
          </div>

          <div className="info-section">
            <div className="simple-stats">
              <div className="stat">
                <span className="stat-number">2 min</span>
                <span className="stat-label">Quick Survey</span>
              </div>
              <div className="stat">
                <span className="stat-number">🎯</span>
                <span className="stat-label">Good Marks</span>
              </div>
              <div className="stat">
                <span className="stat-number">🔒</span>
                <span className="stat-label">Anonymous</span>
              </div>
            </div>
          </div>
        </main>

        <footer className="footer">
          <p>Made with ❤️ for language research | IIIT Vadodara</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
