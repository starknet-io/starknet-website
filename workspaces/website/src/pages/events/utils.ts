import moment from "moment";

export const isUpcomingEvent = (start_date: string, end_date: string) => {
  const start = moment(start_date);
  const end = moment(end_date);
  const today = moment(new Date());

  const isUpcoming =
    start.isSameOrAfter(today, "day") ||
    !!(end_date && end.isSameOrAfter(today, "day"));

  return isUpcoming;
};
