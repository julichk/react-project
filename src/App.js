import React, { useState } from 'react';
import Header from './components/Header';
import Calendar from './components/Calendar/Calendar';
import List from './components/List/List';
import Total from './components/Total/Total';
import Router from './pages/Router';
import Weather from './components/Weather/Weather';

function App() {
  const [checkboxes, setCheckboxes] = useState([]);

  return (
    <div className="App">
      <Header />
      <Router />
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
        <Calendar className="myCalendar" />
      </div>
    </div>
  );
}

export default App;
