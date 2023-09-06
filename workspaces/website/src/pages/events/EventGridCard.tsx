import { Card, CardBody, CardImg, CardLink } from "@ui/Card/Card";
import { EventCardProps } from "./EventCard";
import { Box } from "@chakra-ui/react";
import { Text } from "@ui/Typography/Text";
import moment from "moment";
import { Heading } from "@ui/Typography/Heading";

const EventsGridCard = ({ event: hit }: EventCardProps) => {
  return (
    <Card
      variant="grid"
      key={hit?.name}
      borderSx={{
        borderWidth: "none",
      }}
    >
      <Box
        overflow="hidden"
        position="relative"
        width="100%"
        paddingBottom="56.25%"
      >
        <CardImg variant="grid" src={hit.image} />
      </Box>
      <CardBody variant="grid">
        <Text variant="cardBody">
          {hit?.end_date
            ? `${moment(hit?.start_date).format("ddd MMM DD")} - ${moment(
                hit?.end_date
              ).format("ddd MMM DD, YYYY")}`
            : moment(hit?.start_date).format("ddd MMM DD, YYYY")}
        </Text>
        <Heading
          mt="8px"
          mb={{ base: "12px", lg: "20px" }}
          variant="h3"
          color="heading-navy-fg"
        >
          {hit.name}
        </Heading>
        <CardLink variant="iconLink" href={hit.url} isExternal>
          Learn more{" "}
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
              fill="#3F8CFF" // content.link / brand-primary-galaxy-blue-solid-9
            />
          </svg>
        </CardLink>
      </CardBody>
    </Card>
  );
};

export default EventsGridCard;
