import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLeaving(true), 1100);
    const completeTimer = window.setTimeout(onComplete, 1450);

    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`loading-screen ${isLeaving ? 'loading-screen--leaving' : ''}`}
      role="status"
      aria-label="Loading GJ Nexora Business Portfolio"
    >
      <div className="loading-screen__content">
        <div className="loading-screen__logo-frame">
          <img
            src="/logo_light.jpg"
            alt="GJ Nexora"
            className="loading-screen__logo"
          />
        </div>
        <h1>GJ NEXORA BUSINESS PORTFOLIO</h1>
        <p>Business Solutions <span aria-hidden="true">&bull;</span> Simplified</p>
        <div className="loading-screen__track" aria-hidden="true">
          <div className="loading-screen__progress" />
        </div>
      </div>
    </div>
  );
};