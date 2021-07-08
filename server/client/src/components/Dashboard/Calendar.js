import React from "react";

import { StyledCalendar, Weekdays, CalendarDays } from "./Dashboard.styles";

//fix day being off due to year format
const Calendar = () => {
  const getDateInfo = () => {
    //get current month and year
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    //get day of the week the current month starts on and store as string
    const firstDay = String(new Date(currentYear, currentMonth, 1))
      .toLowerCase()
      .split(" ")[0];

    //initialize variables to use in switch for each respective month
    let numDays = null;
    let monthName = "";

    //assign month name and number of days
    switch (currentMonth) {
      case 0:
        numDays = 31;
        monthName = "January";
        break;
      case 1:
        numDays = 28;
        monthName = "February";
        break;
      case 2:
        numDays = 31;
        monthName = "March";
        break;
      case 3:
        numDays = 30;
        monthName = "April";
        break;
      case 4:
        numDays = 31;
        monthName = "May";
        break;
      case 5:
        numDays = 30;
        monthName = "June";
        break;
      case 6:
        numDays = 31;
        monthName = "July";
        break;
      case 7:
        numDays = 31;
        monthName = "August";
        break;
      case 8:
        numDays = 30;
        monthName = "September";
        break;
      case 9:
        numDays = 31;
        monthName = "October";
        break;
      case 10:
        numDays = 30;
        monthName = "November";
        break;
      case 11:
        numDays = 31;
        monthName = "December";
        break;
      default:
        numDays = 0;
        monthName = "";
    }

    //return object with date information
    // - days in the month, current month name, day of week it starts on
    return { numDays, monthName, firstDay };
  };

  const renderDays = () => {
    //get num days in the current month
    //initialize array to store dates in month for rendering date cells
    const daysInMonth = getDateInfo().numDays;
    const calendarItems = [];

    //push each date in month to array
    for (let i = 1; i <= daysInMonth; i++) {
      calendarItems.push(i);
    }

    //using dates(days) in array - render divs for calendar items
    return calendarItems.map((day) => {
      if (day === new Date().getDate()) {
        return (
          //tag current day for highlighting in calendar
          <div key={day} className="today">
            {day}
          </div>
        );
      }
      //tag first day of month to set day of week the month starts on
      if (day === 1) {
        return (
          <div key={day} className="firstDay">
            {day}
          </div>
        );
      }
      //if not today's date or the first of the month, return the date in a div
      return <div key={day}>{day}</div>;
    });
  };

  return (
    <StyledCalendar>
      <h2>{getDateInfo().monthName.toUpperCase()}</h2>
      <Weekdays>
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
      </Weekdays>
      <CalendarDays firstDay={getDateInfo().firstDay}>
        {renderDays()}
      </CalendarDays>
    </StyledCalendar>
  );
};

export default Calendar;
