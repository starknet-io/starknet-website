import { ListCard } from "@ui/Card/ListCard";
import moment from "moment";
import { Event } from "@starknet-io/cms-data/src/events";

export type EventCardProps = {
  event: Event;
  isPastEvent?: boolean;
};
export default function EventCard({ event, isPastEvent }: EventCardProps) {
  let startDate = new Date(event?.start_date);
  let endDate = new Date(event?.end_date ?? "");
  let hasSameDay = startDate.getDate() === endDate.getDate();
  let hasSameMonth = startDate.getMonth() === endDate.getMonth();
  let hasSameYear = startDate.getFullYear() === endDate.getFullYear();

  return (
    <ListCard
      variant="event"
      href={event.url}
      key={event?.name}
      startDateTime={
        event?.end_date
          ? `${moment(event?.start_date).format(
              hasSameDay
                ? "DD MMM, YYYY"
                : hasSameMonth
                ? "DD"
                : hasSameYear
                ? "DD MMM"
                : "DD MMM, YYYY"
            )}${!hasSameDay ? " - " : ""}${
              !hasSameDay ? moment(event?.end_date).format("DD MMM, YYYY") : ""
            }${event?.display_time ? " · " + moment(event?.start_date).format("h:MM A") : ""}`
          : `${moment(event?.start_date).format("DD MMM, YYYY")}${event?.display_time ? " · " + moment(event?.start_date).format("h:MM A") : ""}`
      }
      image={event.image}
      title={event.name}
      description={event.description}
      type={[event.type]}
      location={event.location}
      city={event.city}
      country={event.country}
      recap={
        isPastEvent && event.show_in_past_events !== false
          ? event.recap
          : undefined
      }
    />
  );
}
