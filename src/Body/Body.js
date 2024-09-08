import React, { useState } from "react";
import "./Body.css";
import PictureGallery from "../PictureGallery/PictureGallery";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

function Body({ onEmailConfirmed }) {
  const [email, setEmail] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showShadowBox, setShowShadowBox] = useState(true);
  const [isPageEmpty, setIsPageEmpty] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsConfirmed(!isConfirmed);
  };

  const handleStartClick = () => {
    if (isConfirmed) {
      alert(`Email ${email} confirmed! You can now start.`);
      setShowShadowBox(false);
      setIsPageEmpty(true);
      onEmailConfirmed();
    }
  };

  return (
    <>
      {isPageEmpty ? (
        <div className="body-container">
          <Home />
          <PictureGallery onBack={() => setIsPageEmpty(true)} />
          <Footer />
        </div>
      ) : (
        <div className="body-container">
          {showShadowBox && (
            <div className="start-message">
              <p>Please confirm your email to start the game.</p>
            </div>
          )}
          <div className={`content ${showShadowBox ? 'hide-content' : 'show-content'}`}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="email-input"
            />
            <div className="confirmation-container">
              <input
                type="checkbox"
                checked={isConfirmed}
                onChange={handleCheckboxChange}
              />
              <label>Confirm email</label>
            </div>
            <button onClick={handleStartClick} className="start-button" disabled={!email}>
              Start
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Body;
