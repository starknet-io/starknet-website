import { Meta } from "@storybook/react";
import { useState } from "react";
import { ThemeProvider } from "src/renderer/ThemeProvider";
import { HStack, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { Item, ListSize, Root } from "./LinkList";

export const Basic = () => (
  <ThemeProvider>
    <HStack>
      <>
        <Root heading="Basic example">
          <Item
            link={{
              custom_title: "Documentation 2",
              custom_external_link: "https://docs.starknet.io/documentation/",
            }}
          />
          <Item
            link={{
              custom_title: "Documentation",
              custom_external_link: "https://docs.starknet.io/documentation/",
            }}
          />
          <Item
            link={{
              hasIcon: false,
              custom_title: "Documentation 3",
              custom_external_link: "https://docs.starknet.io/documentation/",
            }}
          />
          <Item
            link={{
              hasIcon: false,
              custom_title: "Documentation 4",
              custom_external_link: "https://docs.starknet.io/documentation/",
            }}
          />
        </Root>
      </>
    </HStack>
  </ThemeProvider>
);

export const Separated = () => {
  const [size, setSize] = useState<ListSize>("md");

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
      <HStack>
        <Root heading="List with separated items" listGap={size}>
          <Item
            link={{
              custom_title: "Documentation 2",
              custom_external_link: "https://docs.starknet.io/documentation/",
            }}
          />
          <Item
            link={{
              custom_title: "Documentation",
              custom_external_link: "https://docs.starknet.io/documentation/",
            }}
          />
          <Item
            link={{
              hasIcon: false,
              custom_title: "Documentation 3",
              custom_external_link: "https://docs.starknet.io/documentation/",
            }}
          />
          <Item
            link={{
              hasIcon: false,
              custom_title: "Documentation 4",
              custom_external_link: "https://docs.starknet.io/documentation/",
            }}
          />
        </Root>
      </HStack>
    </ThemeProvider>
  );
};

export const WithAvatar = () => (
  <ThemeProvider>
    <HStack>
      <>
        <Root heading="Link list with an avatar">
          <Item
            avatar={{
              title: "Dan Abrahmov",
              url: "https://bit.ly/dan-abramov",
              displayTitle: true,
            }}
          />
          <Item
            link={{
              custom_title: "Documentation 3",
              custom_external_link: "https://docs.starknet.io/documentation/",
            }}
            avatar={{
              title: "Dan Abrahmov",
              url: "https://bit.ly/dan-abramov",
            }}
          />
          <Item
            link={{
              custom_title: "React tutorial",
              custom_external_link: "https://docs.starknet.io/documentation/",
            }}
            avatar={{
              title: "Dan Abrahmov",
              url: "https://bit.ly/dan-abramov",
              displayTitle: true,
            }}
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
          <Item
            link={{
              custom_title: "Documentation 1",
              custom_external_link: "https://docs.starknet.io/documentation/",
            }}
            subLabel={{
              label: "This is a sub label",
              boldLabel: "This is a bold sub label",
            }}
          />
          <Item
            link={{
              custom_title: "Documentation 2",
              custom_external_link: "https://docs.starknet.io/documentation/",
            }}
            subLabel={{
              label: "This is a sub label",
            }}
          />
          <Item
            link={{
              custom_title: "React tutorial",
              custom_external_link: "https://docs.starknet.io/documentation/",
            }}
            avatar={{
              title: "Dan Abrahmov",
              url: "https://bit.ly/dan-abramov",
              displayTitle: true,
            }}
            subLabel={{
              label: "This is a sub label",
              boldLabel: "This is a bold sub label",
            }}
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
      <HStack>
        <Root heading="List with different sizes" listSize={size}>
          <Item
            link={{
              custom_title: "React tutorial",
              custom_external_link: "https://docs.starknet.io/documentation/",
            }}
          />
          <Item
            link={{
              custom_title: "React tutorial",
              custom_external_link: "https://docs.starknet.io/documentation/",
            }}
            avatar={{
              title: "Dan Abrahmov",
              url: "https://bit.ly/dan-abramov",
            }}
            subLabel={{
              label: "This is a sub label",
            }}
          />
        </Root>
      </HStack>
    </ThemeProvider>
  );
};

export default {
  title: "starknet.io/LinkList",
  component: Root,
} as Meta<typeof Root>;
