import { Box } from "@chakra-ui/react";
import { HeroImage } from "@ui/HeroImage/HeroImage";
import { PageLayout } from "@ui/Layout/PageLayout";
import { ReactNode } from "react";
import { useBoolean } from "react-use";
import RoadmapSubscribeForm from "./RoadmapSubscribeForm";
import { Roadmap } from "@starknet-io/cms-data/src/settings/roadmap";
import { LandingConent } from "@ui/HeroImage/LandingConent";

type RoadmapLayoutProps = {
  children: ReactNode;
  mode: "ROADMAP" | "ANNOUNCEMENTS";
  locale: string;
  roadmapSettings?: Roadmap;
};
export default function RoadmapLayout({
  children,
  roadmapSettings,
}: RoadmapLayoutProps) {
  const [isOpen, setIsOpen] = useBoolean(false);
  return (
    <>
      <PageLayout
        maxW="none"
        // contentMaxW="none"
        sx={{
          px: "0",
        }}
        main={
          <Box pos="relative">
            {roadmapSettings?.show_hero_banner && (
              <HeroImage
                title={roadmapSettings?.hero_title}
                description={roadmapSettings?.hero_description}
                {...(roadmapSettings?.show_hero_cta && {
                  buttonText: roadmapSettings?.hero_cta_copy,
                })}
                onButtonClick={() => setIsOpen(true)}
                image="/assets/ecosystem/roadmap.svg"
              />
            )}
            <RoadmapSubscribeForm isOpen={isOpen} setIsOpen={setIsOpen} />
            <LandingConent>{children}</LandingConent>
          </Box>
        }
      />
    </>
  );
}
