import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from 'date-fns';

export const WEEK_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const HOLIDAY_MARKERS = {
  '01-01': 'New Year',
  '08-15': 'Independence Day',
  '10-02': 'Gandhi Jayanti',
  '12-25': 'Christmas',
};

export function getMonthLabel(date) {
  return format(date, 'MMMM');
}

export function getYearLabel(date) {
  return format(date, 'yyyy');
}

export function getMonthDays(viewDate) {
  const monthStart = startOfMonth(viewDate);
  const monthEnd = endOfMonth(viewDate);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });

  return eachDayOfInterval({ start: calendarStart, end: calendarEnd }).map((day) => ({
    date: day,
    isCurrentMonth: isSameMonth(day, viewDate),
    holidayLabel: HOLIDAY_MARKERS[format(day, 'MM-dd')] ?? '',
  }));
}