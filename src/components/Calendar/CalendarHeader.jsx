import { ChevronLeft, ChevronRight } from 'lucide-react';

function CalendarHeader({ monthLabel, yearLabel, onPreviousMonth, onNextMonth }) {
  return (
    <header className="calendar-header">
      <div>
        <p className="calendar-header__eyebrow">Wall planner</p>
        <h2 className="calendar-header__title">
          {monthLabel} <span>{yearLabel}</span>
        </h2>
      </div>

      <div className="calendar-header__actions">
        <button
          type="button"
          className="nav-button"
          onClick={onPreviousMonth}
          aria-label="Show previous month"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          className="nav-button"
          onClick={onNextMonth}
          aria-label="Show next month"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </header>
  );
}

export default CalendarHeader;