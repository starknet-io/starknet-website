import { Box } from "@chakra-ui/react";
import { HeroImage } from "@ui/HeroImage/HeroImage";
import { PageLayout } from "@ui/Layout/PageLayout";
import { ReactNode } from "react";
import { useBoolean } from "react-use";
import RoadmapSubscribeForm from "./RoadmapSubscribeForm";
import { Roadmap } from "@starknet-io/cms-data/src/settings/roadmap";

type RoadmapLayoutProps = {
  children: ReactNode;
  mode: "ROADMAP" | "ANNOUNCEMENTS";
  locale: string;
  roadmapSettings?: Roadmap;
  env: {
    CLOUDFLARE_RECAPTCHA_KEY: string;
  }
};
export default function RoadmapLayout({
  children,
  env,
  mode,
  locale,
  roadmapSettings
}: RoadmapLayoutProps) {
  const [isOpen, setIsOpen] = useBoolean(false);
  return (
    <>
      <PageLayout
        main={
          <Box>
            {roadmapSettings?.show_hero_banner && <HeroImage
              title={roadmapSettings?.hero_title}
              description={roadmapSettings?.hero_description}
              variant="roadmap"
              {...roadmapSettings?.show_hero_cta && { buttonText: roadmapSettings?.hero_cta_copy} }
              onButtonClick={() => setIsOpen(true)}
            />}
            <RoadmapSubscribeForm env={env} isOpen={isOpen} setIsOpen={setIsOpen} />
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
          </Box>
        }
      />
    </>
  );
}
