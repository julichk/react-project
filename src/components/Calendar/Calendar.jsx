import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    const storedEvents = localStorage.getItem('calendarEvents');
    this.state = {
      events: storedEvents ? JSON.parse(storedEvents) : []
    };
    if (storedEvents) {
      localStorage.setItem('calendarEvents', JSON.stringify(this.state.events));
    };
  }

  handleDateSelect = (arg) => {
    const title = prompt('Enter event title:');
    if (title) {
      const newEvent = {
        id: Date.now(),
        title: title,
        start: arg.start,
        end: arg.end,
        allDay: true
      };
      this.setState(
        (prevState) => ({
          events: [...prevState.events, newEvent]
        }),
        () => {
          localStorage.setItem('calendarEvents', JSON.stringify(this.state.events));
        }
      );
    }
  }

  render() {
    return (
      <div className='myCalendar'>
        <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={this.state.events}
        dateClick={this.handleDateClick}
        eventContent={this.renderEventContent}
        select={this.handleDateSelect}
        selectable={true}
        />
      </div>
    );
  }


  renderEventContent = (eventInfo) => {
    return (
      <div className='myEvent'>
        <b className='b'>{eventInfo.timeText}</b>
        <i className='myEvent_text'>{eventInfo.event.title}</i>
      </div>
    );
  }
}

export default Calendar;
