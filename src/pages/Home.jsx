import Header from "../components/Header/Header";
import Calendar from "../components/Calendar/Calendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import List from "../components/List/List";
import Total from "../components/Total/Total";
import Weather from "../components/Weather/Weather";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [checkboxes, setCheckboxes] = useState([]);

  return (
    <div>
      <Header />
      <div className="content">
        <div className="content_container">
        <div className="notes-home-conteteiner">
          <Link to="/notes" className="grid-item notes">
            <div className="notes-home-conteteiner_block">
              <div className="notes-home-conteteiner_block_white">
                <div className="notes-home-conteteiner_block_white_text"><p>Notes</p></div>
              </div>
           </div>
        </Link>
        </div>
        <div className="todo-list-conteiner">
        <div className="todo-list">
          <List
            checkboxes={checkboxes}
            setCheckboxes={setCheckboxes}
            className="conteiner_form"
          />
          <Total
            checkboxes={checkboxes}
            setCheckboxes={setCheckboxes}
            className="conteiner-total_block_items"
          />
        </div>
        </div>
        <div className="weather-calendar-conteiner">
         <div className="weather">
          <Weather />
          </div>
          <div className="calendar">
          <Calendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            className="myCalendar"
          />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
