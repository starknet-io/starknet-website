import {
  Box,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Button } from "@ui/Button";

type Props = {};

export const PostCard = (props: Props) => {
  return (
    <Card maxW="sm" direction={{ base: "row", lg: "row" }}>
      <Image
        src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*3YrSkhKzNIrYg_1tAsh-NA.png"
        alt="post"
        borderRadius="lg"
      />
      <Box>
        <CardBody>
          <Stack mt="6" spacing="3">
            <Heading size="md">Living room Sofa</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Box>
    </Card>
  );
};
