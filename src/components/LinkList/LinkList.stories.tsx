import { Meta } from "@storybook/react";
import { useState } from "react";
import { ThemeProvider } from "src/app/providers/ThemeProvider";
import { HStack, Radio, RadioGroup, Stack } from "src/libs/chakra-ui";
import { Item, ListSize, Root } from "./LinkList";

export const Basic = () => (
  <ThemeProvider>
    <HStack>
      <>
        <Root heading="Basic example">
          <Item
            label="Documentation 2"
            isExternal
            href="https://docs.starknet.io/documentation/"
          />
          <Item
            label="Documentation"
            href="https://docs.starknet.io/documentation/"
          />
          <Item
            hasIcon={false}
            label="Documentation 3"
            isExternal
            href="https://docs.starknet.io/documentation/"
          />
          <Item
            hasIcon={false}
            label="Documentation 4"
            href="https://docs.starknet.io/documentation/"
          />
        </Root>
      </>
    </HStack>
  </ThemeProvider>
);

export const WithAvatar = () => (
  <ThemeProvider>
    <HStack>
      <>
        <Root heading="Link list with an avatar">
          <Item
            label="Documentation 3"
            avatarTitle="Dan Abrahmov"
            avatarUrl="https://bit.ly/dan-abramov"
          />
          <Item
            label="Documentation 3"
            avatarTitle="Dan Abrahmov"
            avatarUrl="https://bit.ly/dan-abramov"
            isExternal
          />
        </Root>
      </>
    </HStack>
  </ThemeProvider>
);

export const WithSubLabel = () => (
  <ThemeProvider>
    <HStack>
      <>
        <Root heading="Link list with a sublabel">
          <Item label="Documentation 1" subLabel="This is a sub label" />
          <Item
            label="Documentation 2"
            isExternal
            subLabel="This is a sub label"
          />
          <Item
            label="React tutorial"
            avatarTitle="Dan Abrahmov"
            avatarUrl="https://bit.ly/dan-abramov"
            hasIcon={false}
            subLabel="This is a sub label"
          />
        </Root>
      </>
    </HStack>
  </ThemeProvider>
);

export const Sizes = () => {
  const [size, setSize] = useState<ListSize>("sm");
  return (
    <ThemeProvider>
      <RadioGroup
        onChange={(v) => setSize(v as ListSize)}
        value={size}
        mb="2rem"
      >
        <Stack direction="row">
          <Radio value="sm">Small</Radio>
          <Radio value="md">Medium</Radio>
          <Radio value="lg">Large</Radio>
        </Stack>
      </RadioGroup>
      <Root heading="List with different sizes" listSize={size}>
        <Item label="Documentation" subLabel="This is a sub label" />
        <Item
          label="React tutorial"
          avatarTitle="Dan Abrahmov"
          avatarUrl="https://bit.ly/dan-abramov"
          hasIcon={false}
          subLabel="This is a sub label"
        />
      </Root>
    </ThemeProvider>
  );
};

export default {
  title: "starknet.io/LinkList",
  component: Root,
} as Meta<typeof Root>;
