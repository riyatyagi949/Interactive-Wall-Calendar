import { format } from 'date-fns';
import { WEEK_DAYS } from '../../utils/calendar';
import DayCell from './DayCell';

function CalendarGrid({ days, selectedStart, selectedEnd, onSelect }) {
  return (
    <section className="calendar-grid-wrapper" aria-label="Monthly calendar">
      <div className="week-row" role="row">
        {WEEK_DAYS.map((dayName) => (
          <div key={dayName} className="week-row__item" role="columnheader">
            {dayName}
          </div>
        ))}
      </div>

      <div className="calendar-grid" role="grid">
        {days.map((day) => (
          <div key={format(day.date, 'yyyy-MM-dd')} role="gridcell">
            <DayCell
              day={day}
              selectedStart={selectedStart}
              selectedEnd={selectedEnd}
              onSelect={onSelect}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CalendarGrid;