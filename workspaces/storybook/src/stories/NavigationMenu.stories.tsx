import { ComponentMeta } from "@storybook/react";
import React from "react";
import { NavigationMenu } from "@ui/NavigationMenu";

export default {
  title: "starknet.io/NavigationMenu",
  component: NavigationMenu,
} as ComponentMeta<typeof NavigationMenu>;

export const Primary = () => (
  <div>
    <div
      style={{
        backgroundColor: "red",
        padding: 100,
        display: "flex",
        width: "50%",
      }}
    >
      <NavigationMenu
        title='LEARNING HUB'
        description='Start here for an overview of all things Starknet'
        mainMenus={[
          {
            category: 'THE BASICS',
            menus: [
              { label: 'What is Starknet?', url: ''}
            ]
          }
        ]}
        footerMenus={[
          { label: 'Starknet foundation', url: ''},
          { label: 'Glossary', url: ''},
          { label: 'FAQs', url: ''},
          { label: 'Media kit', url: ''},
        ]}
      />
    </div>
  </div>
);
Primary.storyName = "Default";
