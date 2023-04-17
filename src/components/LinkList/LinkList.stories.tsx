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
            link={{
              isExternal: true,
              label: "Documentation 2",
              href: "https://docs.starknet.io/documentation/",
            }}
          />
          <Item
            link={{
              label: "Documentation",
              href: "https://docs.starknet.io/documentation/",
            }}
          />
          <Item
            link={{
              hasIcon: false,
              label: "Documentation 3",
              isExternal: true,
              href: "https://docs.starknet.io/documentation/",
            }}
          />
          <Item
            link={{
              hasIcon: false,
              label: "Documentation 4",
              href: "https://docs.starknet.io/documentation/",
            }}
          />
        </Root>
      </>
    </HStack>
  </ThemeProvider>
);

export const Seperated = () => {
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
        <Root heading="List with seperated items" listGap={size}>
          <Item
            link={{
              isExternal: true,
              label: "Documentation 2",
              href: "https://docs.starknet.io/documentation/",
            }}
          />
          <Item
            link={{
              label: "Documentation",
              href: "https://docs.starknet.io/documentation/",
            }}
          />
          <Item
            link={{
              hasIcon: false,
              label: "Documentation 3",
              isExternal: true,
              href: "https://docs.starknet.io/documentation/",
            }}
          />
          <Item
            link={{
              hasIcon: false,
              label: "Documentation 4",
              href: "https://docs.starknet.io/documentation/",
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
              label: "Documentation 3",
              href: "https://docs.starknet.io/documentation/",
              isExternal: true,
            }}
            avatar={{
              title: "Dan Abrahmov",
              url: "https://bit.ly/dan-abramov",
            }}
          />
          <Item
            link={{
              label: "React tutorial",
              href: "https://docs.starknet.io/documentation/",
              isExternal: true,
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
              label: "Documentation 1",
              href: "https://docs.starknet.io/documentation/",
            }}
            subLabel={{
              label: "This is a sub label",
              boldLabel: "This is a bold sub label",
            }}
          />
          <Item
            link={{
              label: "Documentation 2",
              href: "https://docs.starknet.io/documentation/",
              isExternal: true,
            }}
            subLabel={{
              label: "This is a sub label",
            }}
          />
          <Item
            link={{
              label: "React tutorial",
              href: "https://docs.starknet.io/documentation/",
              isExternal: true,
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
              label: "React tutorial",
              href: "https://docs.starknet.io/documentation/",
              isExternal: true,
            }}
          />
          <Item
            link={{
              label: "React tutorial",
              href: "https://docs.starknet.io/documentation/",
              isExternal: true,
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
