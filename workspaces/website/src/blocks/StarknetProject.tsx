import React, { useState } from 'react';
import { Box } from "@chakra-ui/react";
import { ColorExtractor } from 'react-color-extractor';
import { CardGradientBorder } from "@ui/Card/components/CardGradientBorder";

type ProjectProps = {
  image: string;
  url: string;
  name: string;
};

type StarknetProjectProps = {
  project: ProjectProps;
  handleErrorImg: (image: string) => void;
};

const StarknetProject: React.FC<StarknetProjectProps> = ({ project, handleErrorImg }) => {
  const [colors, setColors] = useState<string[]>([]); // State za boje

  return (
    <Box px="12px">
      <CardGradientBorder borderRadius="100%" bg="#EDF7F7" border={`1px solid ${colors[0]}99`}  width="198px" height="198px">
        <Box
            as="a"
            href={project.url}
            target="_blank"
            sx={{
                cursor: "pointer",
                padding: "16px",
                borderRadius: "999px",
                bg: "#EDF7F7",
                width: "196px",
                height: "196px",
                display: "block"
            }}>
            <Box sx={{ p: "42px", width: "164px", height: "164px", bg: `${colors[0]}66`, borderRadius: "50%" }}>
                <ColorExtractor getColors={(extractedColors: string[]) => setColors(extractedColors)}>
                    <img
                        src={project.image}
                        alt={project.name}
                        style={{
                            width: "80px",
                            borderRadius: "16px",
                            boxShadow: "3.944444417953491px 5.916666507720947px 13.80555534362793px 0px rgba(0, 0, 0, 0.25), 15.777777671813965px 15.777777671813965px 29.583335876464844px 0px rgba(0, 0, 0, 0.25)"
                        }}
                        onError={() => {
                          if (project?.image) {
                            handleErrorImg(project.image);
                          }
                        }}
                    />
                </ColorExtractor>
            </Box>
        </Box>
      </CardGradientBorder>
    </Box>
  );
};

export default StarknetProject;