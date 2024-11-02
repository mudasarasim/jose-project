import React, { useState } from 'react';
import './Calender.css';

const daysOfWeek = ['Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'];
const initialWeeks = [
    { days: ['Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'], dates: [24, 25, 26, 27, 28, 29, 30] },
    { days: ['Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'], dates: [31, 1, 2, 3, 4, 5, 6] },
    // Add more weeks if needed
];
const times = [
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
    '19:00', '19:30'
];

const Calendar = () => {
    const [currentWeekIndex, setCurrentWeekIndex] = useState(0);

    const handlePreviousWeek = () => {
        if (currentWeekIndex > 0) {
            setCurrentWeekIndex(currentWeekIndex - 1);
        }
    };

    const handleNextWeek = () => {
        if (currentWeekIndex < initialWeeks.length - 1) {
            setCurrentWeekIndex(currentWeekIndex + 1);
        }
    };

    const currentWeek = initialWeeks[currentWeekIndex];

    return (
        <div className="calendar-container">
            <div className="week-slider">
                <button onClick={handlePreviousWeek} disabled={currentWeekIndex === 0} className="arrow-button" style={{marginLeft: '40px'}}>◀</button>
                <div className="week-days">
                    {currentWeek.days.map((day, index) => (
                        <div key={index} className="day">
                            <div className="date">{currentWeek.dates[index]}</div>
                            <div className="day-name">{day}</div>
                        </div>
                    ))}
                </div>
                <button onClick={handleNextWeek} disabled={currentWeekIndex === initialWeeks.length - 1} className="arrow-button">▶</button>
            </div>            
            
            {/* Body with time slots */}
            <div className="calendar-body" style={{marginTop: '-20px'}}>
                <div className="time-column">
                    {times.map((time, index) => (
                        <div key={index} className="time-slot">{time}</div>
                    ))}
                </div>
                
                <div className="calendar-grid">
                    {times.map((_, timeIndex) => (
                        daysOfWeek.map((_, dayIndex) => (
                            <div key={`${dayIndex}-${timeIndex}`} className="slot">
                                <span style={{float: 'right'}}></span>
                            </div>
                        ))
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
