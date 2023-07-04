import React, { useState } from "react";
import Header from "../components/Header/Header";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp";
import News from "../components/News";

function NewsPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const isAuthenticated = showLogin || showSignUp;
  

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleLogout = () => {
    setShowLogin(false);
    setShowSignUp(false);
  };

  return (
    <div>
      <Header
        handleLoginClick={handleLoginClick}
        handleSignUpClick={handleSignUpClick}
        isAuthenticated={isAuthenticated}
      />
      <div className="news-content">
        {showLogin ? (
          <Login handleLogout={handleLogout} />
        ) : showSignUp ? (
          <SignUp handleLogout={handleLogout} />
        ) : (
          <>
            <News />
          </>
        )}
      </div>
    </div>
  );
}

export default NewsPage;
