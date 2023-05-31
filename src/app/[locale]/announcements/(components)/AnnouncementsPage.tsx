"use client";

import { Grid, Heading, Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
 } from "@chakra-ui/react";
import { AnnouncementsPost } from "workspaces/cms-data/src/announcements";
import { PageLayout } from "@ui/Layout/PageLayout";
import AnnouncementPostCard from "./AnnouncementPostCard";

type AnnouncementsPageProps = {
  announcements: readonly AnnouncementsPost[];
  locale: string;
};
export default function AnnouncementsPage({
  announcements,
  locale,
}: AnnouncementsPageProps) {
  return (
    <PageLayout
      maxW="734px"
      breadcrumbs={
        <>

            <Breadcrumb separator="/">
              <BreadcrumbItem>
                <BreadcrumbLink
                  fontSize="sm"
                  href={`${locale}`}
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink
                  fontSize="sm"
                  href={`/${locale}/developers`}
                >
                  Developers
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink fontSize="sm">Announcements</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
        </>
      }
      main={
        <>
          <Heading variant="h3" mb="2rem">
            Announcements
          </Heading>
          <Grid
            templateColumns='repeat(1, 1fr)'
            templateRows="1fr"
            columnGap="24px"
            rowGap="48px"
          >
            {announcements.map((post) => {
              return (
                <AnnouncementPostCard post={post} key={`announcement-${post.id}`} locale={locale}/>
              );
            })}
          </Grid>
          </>}
        />
      );
}
