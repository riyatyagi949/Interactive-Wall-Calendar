import { format, isSameDay, isToday, isWithinInterval } from 'date-fns';

function DayCell({ day, selectedStart, selectedEnd, onSelect }) {
  const isStart = selectedStart && isSameDay(day.date, selectedStart);
  const isEnd = selectedEnd && isSameDay(day.date, selectedEnd);
  const isSingleDayRange = isStart && isEnd;

  const isInRange =
    selectedStart &&
    selectedEnd &&
    isWithinInterval(day.date, { start: selectedStart, end: selectedEnd });

  const classes = [
    'day-cell',
    !day.isCurrentMonth ? 'day-cell--muted' : '',
    isToday(day.date) ? 'day-cell--today' : '',
    isInRange ? 'day-cell--in-range' : '',
    isStart ? 'day-cell--start' : '',
    isEnd ? 'day-cell--end' : '',
    isSingleDayRange ? 'day-cell--single' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={classes}
      onClick={() => onSelect(day.date)}
      aria-label={`Select ${format(day.date, 'do MMMM yyyy')}`}
      title={day.holidayLabel || format(day.date, 'do MMMM yyyy')}
    >
      <span className="day-cell__number">{format(day.date, 'd')}</span>
      {day.holidayLabel ? <span className="day-cell__dot" aria-hidden="true" /> : null}
    </button>
  );
}

export default DayCell;