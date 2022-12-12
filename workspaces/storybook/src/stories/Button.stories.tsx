import { ComponentMeta } from "@storybook/react";
import React from "react";
import { Button } from "@ui/Button";
import Wrapper from "./Wrapper";

export default {
  title: "starknet.io/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary = () => (
  <>
    <Wrapper>
      <Button intent="default">Default button</Button>
      <Button intent="primary">Primary</Button>
      <Button intent="destructive">Destructive</Button>
      <Button intent="default" disabled>
        Default disabled
      </Button>
    </Wrapper>

    <Wrapper>
      <Button intent="default" size="slim">
        Default slim
      </Button>
      <Button intent="default" size="medium">
        Default medium
      </Button>
      <Button intent="default" size="large">
        Default large
      </Button>
    </Wrapper>
    <Wrapper>
      <Button intent="primary" size="slim">
        Primary slim
      </Button>
      <Button intent="primary" size="medium">
        Primary medium
      </Button>
      <Button intent="primary" size="large">
        Primary large
      </Button>
    </Wrapper>
    <Wrapper>
      <Button intent="destructive" size="slim">
        Destructive slim
      </Button>
      <Button intent="destructive" size="medium">
        Destructive medium
      </Button>
      <Button intent="destructive" size="large">
        Destructive large
      </Button>
    </Wrapper>
    <Wrapper>
      <Button intent="primary" size="slim" loading>
        Destructive slim
      </Button>
      <Button intent="primary" size="medium" loading>
        Destructive medium
      </Button>
      <Button intent="primary" size="large" loading>
        Destructive large
      </Button>
    </Wrapper>
    <Wrapper>
      <Button intent="default" size="slim" fullWidth>
        Default slim fullwidth
      </Button>
      <Button intent="default" size="medium" fullWidth>
        Default medium fullwidth
      </Button>
      <Button intent="default" size="large" fullWidth>
        Default large fullwidth
      </Button>
      <Button intent="primary" size="slim" fullWidth>
        primary slim fullwidth
      </Button>
      <Button intent="primary" size="medium" fullWidth>
        primary medium fullwidth
      </Button>
      <Button intent="primary" size="large" fullWidth>
        primary large fullwidth
      </Button>
    </Wrapper>
  </>
);
Primary.storyName = "Default";
