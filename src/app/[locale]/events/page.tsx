import { useLocale } from "next-intl";
import { getEventsPage } from "src/data/settings/events-page";
import { getEvents } from "src/data/events";
import { use } from "react";
import { PageContentContainer } from "../(components)/PageContentContainer";
import { SectionHeader } from "@ui/SectionHeader/SectionHeader";
import { EventCard } from "@ui/ListCards/EventCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Wrap,
} from "../../../libs/chakra-ui";
export default function EventsPage(): JSX.Element {
  const locale = useLocale();
  const { title, description } = use(getEventsPage(locale));
  const events = use(getEvents(locale));

  return (
    <PageContentContainer>
      <Breadcrumb separator="->">
        <BreadcrumbItem>
          <BreadcrumbLink fontSize="sm" href="#">
            Parent
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink fontSize="sm" href="#">
            Events
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <SectionHeader title={title} description={description} />
      <Box>
        <Wrap spacing={4} direction="column">
          {events.map((event) => (
            <EventCard
              href="https://www.google.com"
              startDateTime="Fri, Jan 12 • 2:00 PM EST"
              key={event.name}
              description={
                "Basecamp will be a 6-week training program, with 6x 2h online calls + homework."
              }
              title={event.name}
            />
          ))}
        </Wrap>
      </Box>
    </PageContentContainer>
  );
}
