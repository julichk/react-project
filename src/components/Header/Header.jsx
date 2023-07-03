import React, { useState, useEffect } from "react";
import Logo from "../Logo";
import { Link, useLocation } from "react-router-dom";
import Menu from "../Menu";
import Logout from "../LogOut/LogOut";



const Header = ({ handleLoginClick, handleSignUpClick}) => {
  // додавання аватару
  const [userPhoto, setUserPhoto] = useState(null);



  useEffect(() => {
    const storedPhoto = localStorage.getItem("photo");
    if (storedPhoto) {
      setUserPhoto(storedPhoto);
    }
  }, []);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    const photoURL = URL.createObjectURL(file);
    setUserPhoto(photoURL);
    localStorage.setItem("photo", photoURL);
  };

  // меню
  const items = [
    { value: "User", href: "/user", icon: "person" },
    { value: "News", href: "/news", icon: "library_books" },
    { value: "About Daily", href: "/report", icon: "help" },
    { value: "Report a bug", href: "/about", icon: "mood_bad" }
  ];

  const [menuActive, setMenuActive] = useState(false);

 
  const location = useLocation();

  return (
    <div>
      <header className="header" active={menuActive} setActive={setMenuActive}>
        <nav className="header_sidebar">
        <div className="burger-btn"  onClick={() => setMenuActive(!menuActive)}>
            <span className="burger-btn_line" />
          </div>
          <Menu
            active={menuActive}
            setActive={setMenuActive}
            items={items}
          />
          {!location.pathname.includes("/news") && (
            <div className="user-photo-upgrate">
              <div
                className="header_sidebar_user-photo"
                style={{ backgroundImage: `url(${userPhoto})` }}
              ></div>
              <input
                type="file"
                className="header_sidebar_input"
                onChange={handlePhotoChange}
              />
            </div>
          )}
        </nav>
        <Link to={location.pathname === "/news" ? "/news" : "/"}>
          <Logo />
        </Link>
        <div className="side">
          {location.pathname === "/" ? (<Logout />) : (
            <p className="side_log-out" onClick={handleLoginClick}>
              Log in
            </p>)}
          {location.pathname === "/news" && (
            <p className="side_sign-up" onClick={handleSignUpClick}>
              Sign Up
            </p>)}
        </div>
      </header>
    </div>
  );
};

export default Header;
