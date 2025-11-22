import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarView = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 6, 1)); // July 2024
  
  // Store selected dates with month and day info
  const [selectedDates] = useState([
    { month: 6, day: 5, year: 2024 }, // July 5, 2024
    { month: 7, day: 7, year: 2024 }, // August 7, 2024
  ]);
  
  // Date ranges to highlight with darker green background
  const [dateRanges] = useState([
    { month: 6, start: 8, end: 14, year: 2024 }, // July 8-14
    { month: 6, start: 15, end: 21, year: 2024 }, // July 15-21
    { month: 6, start: 22, end: 28, year: 2024 }, // July 22-28
    { month: 6, start: 29, end: 31, year: 2024 }, // July 29-31
    { month: 7, start: 1, end: 7, year: 2024 }, // August 1-7
  ]);

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatMonthYear = (date) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const getDateRangeInfo = (day, month, year) => {
    const range = dateRanges.find(r => 
      r.month === month && 
      r.year === year && 
      day >= r.start && 
      day <= r.end
    );
    
    if (!range) return null;
    
    return {
      inRange: true
    };
  };

  const isDateSelected = (day, month, year) => {
    return selectedDates.some(
      sd => sd.day === day && sd.month === month && sd.year === year
    );
  };

  const renderCalendar = (monthOffset) => {
    const displayDate = new Date(currentDate);
    displayDate.setMonth(currentDate.getMonth() + monthOffset);
    
    const daysInMonth = getDaysInMonth(displayDate);
    const firstDay = getFirstDayOfMonth(displayDate);
    const month = displayDate.getMonth();
    const year = displayDate.getFullYear();

    const days = [];
    const dayHeaders = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = isDateSelected(day, month, year);
      const rangeInfo = getDateRangeInfo(day, month, year);
      const inRange = rangeInfo !== null;
      
      days.push(
        <div
          key={day}
          className={`
            h-10 flex items-center justify-center text-sm relative
            ${inRange ? ' ' : ''}
            ${isSelected ? 'text-black font-semibold' : 'text-white'}
            cursor-pointer hover:opacity-80 transition-opacity
          `}
        >
          {isSelected && (
            <div className="absolute w-10 h-10 rounded-full bg-[#c4ff00] flex items-center justify-center z-10">
              {day}
            </div>
          )}
          {!isSelected && <span className="relative z-0">{day}</span>}
        </div>
      );
    }

    return (
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-center mb-6 relative h-8">
          {monthOffset === 0 && (
            <button
              onClick={() => navigateMonth(-1)}
              className="text-white hover:text-[#c4ff00] transition-colors p-1 absolute left-0"
              aria-label="Previous month"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          <h3 className="text-white text-lg font-normal">
            {formatMonthYear(displayDate)}
          </h3>
          {monthOffset === 1 && (
            <button
              onClick={() => navigateMonth(1)}
              className="text-white hover:text-[#c4ff00] transition-colors p-1 absolute right-0"
              aria-label="Next month"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
        
        <div className="grid grid-cols-7 gap-0 w-full">
          {dayHeaders.map((day, index) => (
            <div
              key={index}
              className="h-10 flex items-center justify-center text-sm text-gray-400 font-normal"
            >
              {day}
            </div>
          ))}
          {days}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-fit bg-[#1a2e1a] p-8">
      <div className="max-w-6xl mx-auto">
        {/* <div className="mb-8">
          <h1 className="text-white text-3xl font-semibold mb-2">Reports</h1>
          <p className="text-gray-400 text-sm">Track your progress and visualize your nutrition journey.</p>
        </div> */}
        
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
          {renderCalendar(0)}
          {renderCalendar(1)}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;