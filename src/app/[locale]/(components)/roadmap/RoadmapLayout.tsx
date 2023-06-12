"use client";

import { Box, Container } from "@chakra-ui/react";
import { HeroImage } from "@ui/HeroImage/HeroImage";
import { PageLayout } from "@ui/Layout/PageLayout";
import { ReactNode } from "react";
import { useBoolean } from "react-use";
import RoadmapSubscribeForm from "./RoadmapSubscribeForm";
import { Roadmap } from "workspaces/cms-data/src/settings/roadmap";

type RoadmapLayoutProps = {
  children: ReactNode;
  mode: "ROADMAP" | "ANNOUNCEMENTS";
  locale: string;
  roadmapSettings: Roadmap;
};
export default function RoadmapLayout({
  children,
  mode,
  locale,
  roadmapSettings
}: RoadmapLayoutProps) {
  const [isOpen, setIsOpen] = useBoolean(false);
  const {
    hero_description,
    hero_title,
    show_hero_banner,
    show_hero_cta,
    hero_cta_copy
  } = roadmapSettings;
  return (
    <>
      <PageLayout
        main={
          <Container>
            {show_hero_banner && <HeroImage
              title={hero_title}
              description={hero_description}
              variant="roadmap"
              {...show_hero_cta && { buttonText: hero_cta_copy} }
              onButtonClick={() => setIsOpen(true)}
            />}
            <RoadmapSubscribeForm isOpen={isOpen} setIsOpen={setIsOpen} />
            <Box my="56px"></Box>
            {/* <Flex
              as="ul"
              sx={{ overflowX: "auto" }}
              gap="24px"
              borderBottomWidth="1px"
              borderColor="tabs-main-br"
              width="100%"
              my="56px"
            >
              <Box>
                <Button
                  variant="category"
                  as={Link}
                  isActive={mode === "ANNOUNCEMENTS"}
                  href={`/${locale}/announcements`}
                >
                  Announcements
                </Button>
              </Box>
              <Box>
                <Button
                  variant="category"
                  as={Link}
                  isActive={mode === "ROADMAP"}
                  href={`/${locale}/roadmap`}
                >
                  Roadmap
                </Button>
              </Box>
            </Flex> */}
            {children}
          </Container>
        }
      />
    </>
  );
}
