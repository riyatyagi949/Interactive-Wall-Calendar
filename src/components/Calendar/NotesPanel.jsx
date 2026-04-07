import { useEffect, useMemo, useState } from 'react';
import { CalendarRange, NotebookPen, RotateCcw } from 'lucide-react';
import { format } from 'date-fns';
import { getStoredValue, setStoredValue } from '../../utils/storage';

function NotesPanel({ viewDate, selectedStart, selectedEnd, rangeKey, onResetRange }) {
  const monthStorageKey = `month-note-${format(viewDate, 'yyyy-MM')}`;
  const rangeStorageKey = `range-note-${rangeKey}`;

  const [monthNote, setMonthNote] = useState('');
  const [rangeNote, setRangeNote] = useState('');

  useEffect(() => {
    setMonthNote(getStoredValue(monthStorageKey, ''));
  }, [monthStorageKey]);

  useEffect(() => {
    setRangeNote(rangeKey === 'no-range' ? '' : getStoredValue(rangeStorageKey, ''));
  }, [rangeStorageKey, rangeKey]);

  useEffect(() => {
    setStoredValue(monthStorageKey, monthNote);
  }, [monthNote, monthStorageKey]);

  useEffect(() => {
    if (rangeKey !== 'no-range') {
      setStoredValue(rangeStorageKey, rangeNote);
    }
  }, [rangeKey, rangeNote, rangeStorageKey]);

  const rangeLabel = useMemo(() => {
    if (!selectedStart || !selectedEnd) return 'Pick a start and end date';
    return `${format(selectedStart, 'dd MMM')} - ${format(selectedEnd, 'dd MMM')}`;
  }, [selectedStart, selectedEnd]);

  return (
    <aside className="notes-panel">
      <section className="notes-card">
        <div className="notes-card__header">
          <div>
            <p className="notes-card__label">Month notes</p>
            <h3>
              <NotebookPen size={16} /> Planner memo
            </h3>
          </div>
        </div>
        <textarea
          value={monthNote}
          onChange={(event) => setMonthNote(event.target.value)}
          placeholder="Add reminders, goals, or things to remember this month."
          className="notes-textarea"
        />
      </section>

      <section className="notes-card notes-card--range">
        <div className="notes-card__header">
          <div>
            <p className="notes-card__label">Selected range</p>
            <h3>
              <CalendarRange size={16} /> {rangeLabel}
            </h3>
          </div>

          <button type="button" className="reset-button" onClick={onResetRange}>
            <RotateCcw size={14} /> Reset
          </button>
        </div>

        <textarea
          value={rangeNote}
          onChange={(event) => setRangeNote(event.target.value)}
          placeholder="Write a note for your selected date range."
          className="notes-textarea"
          disabled={rangeKey === 'no-range'}
        />
      </section>
    </aside>
  );
}

export default NotesPanel;