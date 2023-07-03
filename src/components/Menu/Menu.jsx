import { Link } from 'react-router-dom';

function Menu({ login, items, active, setActive }) {


  return (
    <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
      <div className="menu_blur">
        <div className="menu_blur_content">
          <h2 className="menu_blur_content_header">{login}</h2>
          <ul className="menu_blur_content_header_list">
            {items.map((item) => (
              <li className="menu_blur_content_header_list_item" key={item.value}>
                 <Link to="/news"  className="menu_blur_content_header_list_item_link">
                  {item.value}
                </Link>
                <i className="material-icons">{item.icon}</i>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
