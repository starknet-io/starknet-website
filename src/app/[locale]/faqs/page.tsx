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

export default async function FaqsPage({
  params: { locale },
}: LocaleProps): Promise<JSX.Element> {
  const { title, description } = await getEventsPage(locale);
  const events = await getEvents(locale);

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
            Faqs
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <SectionHeader title="Faqs" description="lorem ipsum" />
      <Box>
        Content
        {/* <Wrap spacing={4} direction="column">
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
        </Wrap> */}
      </Box>
    </PageContentContainer>
  );
}
