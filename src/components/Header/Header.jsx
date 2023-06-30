import { AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import Menu from "../Menu";


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

  const items  = [{value:"User", href:"/user", icon:"person"},{value:"Report a bug", href:"/report", icon:"mood_bad"},{value:"About Daily", href:"/about", icon:"help"}]

  const [menuActive, setMenuActive] = useState(false);

  return (
    <div>
      <header className="header"  active={menuActive} setActive={setMenuActive}>
      <nav className="header_sidebar">
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span className="burger-btn_line"/>
        </div>
        <Menu active={menuActive} setActive={setMenuActive} header="Username" items={items} />
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
    
    </div>
  );
};

export default Header;
