import { AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";

const Header = () => {
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

  return (
    <header className="header">
      <nav className="header_sidebar">
        <AiOutlineMenu className="header_sidebar_menu-icon" />
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
      </nav>
      <Link to="/">
        <Logo />
      </Link>
      <div className="side"></div>
    </header>
  );
};

export default Header;
