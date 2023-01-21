import { getEventsPage } from "src/data/settings/events-page";
import { getEvents } from "src/data/events";
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
import { PageLayout } from "@ui/Layout/PageLayout";

export default async function EventsPage({
  params: { locale },
}: LocaleProps): Promise<JSX.Element> {
  const { title, description } = await getEventsPage(locale);
  const events = await getEvents(locale);

  return (
    <Box>
      <PageLayout
        sectionHeaderTitle="Events"
        sectionHeaderDescription="Find StarkNet events taking place all over the world and online."
        breadcrumbs={
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
        }
        pageLastUpdated="Page last updated 21 Nov 2023"
        leftAside={<Box minH="xs">Filters</Box>}
        main={
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
        }
      />
    </Box>
  );
}
