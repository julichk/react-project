// import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
// import { useState } from "react";


function Menu ({header, items, active, setActive}){
  

  return(
    <div className={active ? "menu active" : "menu"} onClick={() => setActive(false)}>
      <div className="menu_blur">
        <div className="menu_blur_content">
          <h2 className="menu_blur_content_header">{header}</h2>
          <ul className="menu_blur_content_header_list">
            {items.map(item => 
              <li className="menu_blur_content_header_list_item">
                <a href='{item.href}' className="menu_blur_content_header_list_item_link">{item.value}</a>
                <i class="material-icons">{item.icon}</i>
              </li>
              )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;