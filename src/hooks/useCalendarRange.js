import { useMemo, useState } from 'react';
import {
  eachDayOfInterval,
  format,
  isAfter,
  isBefore,
  isSameDay,
} from 'date-fns';

export function useCalendarRange() {
  const [selectedStart, setSelectedStart] = useState(null);
  const [selectedEnd, setSelectedEnd] = useState(null);

  const handleDayClick = (day) => {
    if (!selectedStart || (selectedStart && selectedEnd)) {
      setSelectedStart(day);
      setSelectedEnd(null);
      return;
    }

    if (isSameDay(day, selectedStart)) {
      setSelectedEnd(day);
      return;
    }

    if (isBefore(day, selectedStart)) {
      setSelectedStart(day);
      setSelectedEnd(selectedStart);
      return;
    }

    if (isAfter(day, selectedStart)) {
      setSelectedEnd(day);
    }
  };

  const resetRange = () => {
    setSelectedStart(null);
    setSelectedEnd(null);
  };

  const selectedDays = useMemo(() => {
    if (!selectedStart || !selectedEnd) return [];
    return eachDayOfInterval({ start: selectedStart, end: selectedEnd });
  }, [selectedStart, selectedEnd]);

  const rangeKey = useMemo(() => {
    if (!selectedStart || !selectedEnd) return 'no-range';
    return `${format(selectedStart, 'yyyy-MM-dd')}_${format(selectedEnd, 'yyyy-MM-dd')}`;
  }, [selectedStart, selectedEnd]);

  return {
    selectedStart,
    selectedEnd,
    selectedDays,
    rangeKey,
    handleDayClick,
    resetRange,
  };
}