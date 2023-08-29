import { BoxProps, Box, Flex } from "@chakra-ui/react";
import { IconLinkCardBlock as IconLinkCardBlockType } from "@starknet-io/cms-data/src/pages";
import { Card, CardBody, CardLink } from "@ui/Card/Card";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";

interface Props extends IconLinkCardBlockType, Omit<BoxProps, "color"> {}

export const IconLinkCardBlock = (props: Props) => {
  const { img, title, description, linkText, linkUrl, color } = props;
  const renderColorValues = (color: string) => {
    switch (color) {
      case "red":
        return { background: "#FFFAFA", borderColor: "#FFC0B8" };
      case "green":
        return { background: "#F9FEFF", borderColor: "#9DE2EE" };
      case "blue":
        return { background: "#FAFBFF", borderColor: "#A8B6FF" };
      default:
        return {
          background: "",
          borderColor: "",
        };
    }
  };
  const colorValues = renderColorValues(color as string);

  return (
    <Card
      variant="iconLink"
      {...(!!color && {
        sx: {
          background: colorValues.background,
          border: `1px solid ${colorValues.borderColor}`,
        },
      })}
    >
      <CardBody
        variant="iconLink"
        height="100%"
        {...(color && {
          sx: {
            background: colorValues.background,
          },
        })}
      >
        <Flex direction="column" justifyContent="space-between" height="100%">
          <Box>
            {img ? <img src={img} width="60px" /> : null}
            <Heading variant="h3" mt="32px" mb="20px">
              {title}
            </Heading>
            {description ? <Text variant="body">{description}</Text> : null}
          </Box>
          {linkText ? (
            <CardLink
              variant="iconLink"
              href={linkUrl as string}
              paddingTop="xl !important"
            >
              {linkText}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.34467 2.09467C7.63756 1.80178 8.11244 1.80178 8.40533 2.09467L12.7803 6.46967C12.921 6.61032 13 6.80109 13 7C13 7.19891 12.921 7.38968 12.7803 7.53033L8.40533 11.9053C8.11244 12.1982 7.63756 12.1982 7.34467 11.9053C7.05178 11.6124 7.05178 11.1376 7.34467 10.8447L10.4393 7.75H1.75C1.33579 7.75 1 7.41421 1 7C1 6.58579 1.33579 6.25 1.75 6.25H10.4393L7.34467 3.15533C7.05178 2.86244 7.05178 2.38756 7.34467 2.09467Z"
                  fill="#3F8CFF"
                />
              </svg>
            </CardLink>
          ) : null}
        </Flex>
      </CardBody>
    </Card>
  );
};
