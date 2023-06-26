import Header from '../components/Header/Header';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import List from '../components/List/List';
import Total from '../components/Total/Total';
import Weather from '../components/Weather/Weather';
import React, { useState } from 'react';

function Home() {
  const [checkboxes, setCheckboxes] = useState([]);

  return (
    <div>
      <Header />
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
      <div className="conteiner-weather-calendar">
        <div className="conteiner-weather-calendar_weather">
          <Weather />
        </div>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          className="myCalendar"
        />
      </div>
    </div>
  );
}

export default Home;
