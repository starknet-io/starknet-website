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
import { getTutorialsPage } from "src/data/settings/tutorials-page";

export default async function TutorialsPage({
  params: { locale },
}: LocaleProps): Promise<JSX.Element> {
  // const { title, description } = await getTutorialsPage(locale);
  // const events = await getTutorials(locale);

  return (
    <Box>
      <PageLayout
        sectionHeaderTitle="Tutorials"
        sectionHeaderDescription="Page header with high level description of section and visual treatment from brand team."
        breadcrumbs={
          <Breadcrumb separator="->">
            <BreadcrumbItem>
              <BreadcrumbLink fontSize="sm" href="#">
                Parent
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink fontSize="sm" href="#">
                Tutorials
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        }
        pageLastUpdated="Page last updated 21 Nov 2023"
        main={<Box>Test</Box>}
      />
    </Box>
  );
}
