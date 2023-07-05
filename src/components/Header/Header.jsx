import  { useState, useEffect } from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import Menu from "../Menu";
import Logout from "../LogOut/LogOut";

const Header = ({
  handleLoginClick,
  handleSignUpClick,
  setIsAuthenticated,
}) => {

  const [userPhoto, setUserPhoto] = useState(null);
  //зображення
  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    const photoURL = URL.createObjectURL(file);
    setUserPhoto(photoURL);
    localStorage.setItem("photo", photoURL);
  };

  useEffect(() => {
    const storedPhoto = localStorage.getItem("photo");
    if (storedPhoto) {
      setUserPhoto(storedPhoto);
    }
  }, []);

  const items = [
    { value: "User", href: "/user", icon: "person" },
    { value: "News", href: "/news", icon: "library_books" },
    { value: "About Daily", href: "/report", icon: "help" },
    { value: "Report a bug", href: "/about", icon: "mood_bad" },
  ];

  const [menuActive, setMenuActive] = useState(false);

  return (
    <div>
      <header className="header">
        <nav className="header_sidebar">
          <div
            className="burger-btn"
            onClick={() => setMenuActive(!menuActive)}
          >
            <span className="burger-btn_line" />
          </div>
          <Menu
            active={menuActive}
            setActive={setMenuActive}
            items={items}
            login={localStorage.getItem("login")}
            aria-label="side-bar"
          />
          {localStorage.getItem("login") === "Yuliia" ? (
            <div className="user-photo-upgrate">
              {userPhoto && (
                <div
                  className="header_sidebar_user-photo"
                  style={{ backgroundImage: `url(${userPhoto})` }}
                ></div>
              )}
              <input
                type="file"
                className="header_sidebar_input"
                onChange={handlePhotoChange}
              />
            </div>
          ) : null}
        </nav>
        <Link
          to={localStorage.getItem("login") === "Yuliia" ? "/" : "/news"}
          aria-label="to home-page" className="logo-link"
        >
          <Logo />
        </Link>
        <div className="side">
          {localStorage.getItem("login") === "Yuliia" ? (
            <Logout setIsAuthenticated={setIsAuthenticated} />
          ) : (
            <p
              className="side_log-out"
              onClick={handleLoginClick}
              aria-label="log-in"
            >
              Log in
            </p>
          )}
          {localStorage.getItem("login") !== "Yuliia" && (
            <p
              className="side_sign-up"
              onClick={handleSignUpClick}
              aria-label="sign-up"
            >
              Sign Up
            </p>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
