import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Calendar from "../components/Calendar/Calendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import List from "../components/List/List";
import Total from "../components/Total/Total";
import Weather from "../components/Weather/Weather";

function Home() {
  const [checkboxes, setCheckboxes] = useState([]);

  return (
    <div>
      <Header />
      <div className="content">
        <section className="content_container">
          <div className="weather-conteiner">
            <Weather />
          </div>
          <div className="without-weather">
            <div className="notes-home-conteteiner">
              <Link
                to="/notes"
                className="grid-item notes"
                aria-label="to-your-notes"
              >
                <div className="notes-home-conteteiner_block">
                  <div className="notes-home-conteteiner_block_white">
                    <div className="notes-home-conteteiner_block_white_text">
                      <p>Notes</p>
                    </div>
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
              <div className="calendar">
                <Calendar
                  plugins={[dayGridPlugin, interactionPlugin]}
                  initialView="dayGridMonth"
                  className="myCalendar"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
