import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from '../Home/Home';
import PictureGallery from '../PictureGallery/PictureGallery';
import Footer from '../Footer/Footer';
import Body from '../Body/Body';
import ContactUs from '../ContactUs/ContactUs';
import Login from '../LogIn/LogIn';

function App() {
  const [isEmailPage, setIsEmailPage] = useState(true);
  const navigate = useNavigate();

  const handleEmailConfirmation = () => {
    setIsEmailPage(false);
  };

  const handleGoBack = () => {
    setIsEmailPage(true);
    navigate('/');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleLogInClick = () => {
    navigate('/login');
  };

  return (
    <div className="app-container">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home
                onBack={handleGoBack}
                showContactForm={handleContactClick}
                onLoginClick={handleLogInClick}
              />
              {isEmailPage ? (
                <Body onEmailConfirmed={handleEmailConfirmation} />
              ) : (
                <PictureGallery />
              )}
              <Footer />
            </>
          }
        />
        <Route
          path="/PictureGallery"
          element={
            <>
              <Home
                onBack={handleGoBack}
                showContactForm={handleContactClick}
                onLoginClick={handleLogInClick}
              />
              <PictureGallery />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Home
                onBack={handleGoBack}
                showContactForm={handleContactClick}
                onLoginClick={handleLogInClick}
              />
              <Login onBack={handleGoBack} />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Home
                onBack={handleGoBack}
                showContactForm={handleContactClick}
                onLoginClick={handleLogInClick}
              />
              <ContactUs />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;