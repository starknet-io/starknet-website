import { Box, Heading } from "@chakra-ui/react";
import { DocumentProps } from "src/renderer/types";

export function Page() {
  return (
    <Box
      mx="auto"
      w="100%"
      maxWidth={700}
      px={{
        base: "page.left-right.base",
        md: "page.left-right.md",
      }}
    >
      <div>
        <Heading variant="h2" mt="2xl" mb="xl">
          Video player in iframe
        </Heading>
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            // paddingTop: "30px",
            height: 0,
            overflow: "hidden",
          }}
        >
          <iframe
            src={`/video-embed`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </Box>
  );
}

export const documentProps = {
  title: "Video Tutorials",
} satisfies DocumentProps;
