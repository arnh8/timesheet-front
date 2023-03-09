import { useState } from "react";
import "../styles/Calendar.css";
import Day from "./Day";

import SelectionArea from "@viselect/react";

//The calendar module takes a month and a year? as props to initialize?
export default function Calendar(props) {
    const date = new Date(props.year, props.month, 1);
    const days = daysHelper(date);

    return (
        <div className="calendar">
            <div id="monthName">Month {props.month}</div>
            <div id="daysWrapper">
                {days.map((day) => {
                    return <Day date={day} key={day.getTime()} />;
                })}
            </div>
        </div>
    );
}

function daysHelper(date) {
    //Given a Date object, create and return an array of the calendar (dates)
    //that would display the 42 days
    date.getDay();
    let dayIndex = date;

    //back up to the nearest sunday
    while (dayIndex.getDay() !== 0) {
        dayIndex.setDate(dayIndex.getDate() - 1);
    }

    const arr = [];

    for (let i = 0; i < 42; i++) {
        const newDate = new Date(dayIndex);
        arr.push(newDate);
        dayIndex.setDate(dayIndex.getDate() + 1);
    }

    return arr;
}
