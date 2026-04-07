import { useMemo, useState } from 'react';
import { addMonths, differenceInCalendarDays, format, subMonths } from 'date-fns';
import { useCalendarRange } from '../../hooks/useCalendarRange';
import { getMonthDays, getMonthLabel, getYearLabel } from '../../utils/calendar';
import CalendarGrid from './CalendarGrid';
import CalendarHeader from './CalendarHeader';
import NotesPanel from './NotesPanel';
import './calendar.css';

function CalendarCard() {
  const [viewDate, setViewDate] = useState(new Date());
  const {
    selectedStart,
    selectedEnd,
    selectedDays,
    rangeKey,
    handleDayClick,
    resetRange,
  } = useCalendarRange();

  const monthLabel = getMonthLabel(viewDate);
  const yearLabel = getYearLabel(viewDate);
  const monthDays = useMemo(() => getMonthDays(viewDate), [viewDate]);

  const selectedCount =
    selectedStart && selectedEnd
      ? differenceInCalendarDays(selectedEnd, selectedStart) + 1
      : selectedDays.length;

  return (
    <section className="calendar-scene">
      <div className="hanger" aria-hidden="true">
        <span className="hanger__pin" />
        <span className="hanger__ring" />
      </div>

      <article className="calendar-paper">
        <div className="calendar-hero">
          <div className="calendar-hero__overlay calendar-hero__overlay--left" />
          <div className="calendar-hero__overlay calendar-hero__overlay--right" />

          <div className="calendar-hero__badge">
            <span>{yearLabel}</span>
            <strong>{monthLabel.toUpperCase()}</strong>
          </div>
        </div>

        <div className="calendar-body">
          <div className="calendar-sidebar">
            <div className="calendar-sidebar__intro">
              <p className="sidebar-kicker">Printed mood</p>
              <h1>Interactive wall calendar</h1>
              <p>
                Select a date range, keep quick notes, and review the month in a layout inspired by a physical wall planner.
              </p>
            </div>

            <div className="calendar-stats">
              <div className="stat-card">
                <span className="stat-card__label">Visible month</span>
                <strong>{format(viewDate, 'MMMM yyyy')}</strong>
              </div>
              <div className="stat-card stat-card--accent">
                <span className="stat-card__label">Selected days</span>
                <strong>{selectedCount || 0}</strong>
              </div>
            </div>

            <NotesPanel
              viewDate={viewDate}
              selectedStart={selectedStart}
              selectedEnd={selectedEnd}
              rangeKey={rangeKey}
              onResetRange={resetRange}
            />
          </div>

          <div className="calendar-main">
            <CalendarHeader
              monthLabel={monthLabel}
              yearLabel={yearLabel}
              onPreviousMonth={() => setViewDate((current) => subMonths(current, 1))}
              onNextMonth={() => setViewDate((current) => addMonths(current, 1))}
            />

            <div className="selection-banner">
              {selectedStart && selectedEnd ? (
                <p>
                  Selected range: <strong>{format(selectedStart, 'dd MMM')}</strong> to{' '}
                  <strong>{format(selectedEnd, 'dd MMM')}</strong>
                </p>
              ) : (
                <p>Tap one date for the start, then another date for the end.</p>
              )}
            </div>

            <CalendarGrid
              days={monthDays}
              selectedStart={selectedStart}
              selectedEnd={selectedEnd}
              onSelect={handleDayClick}
            />
          </div>
        </div>
      </article>
    </section>
  );
}

export default CalendarCard;