// todo - make functional.  Currently hardcoded for demo purposes
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import cx from "classnames";
import React, { ReactNode } from "react";

interface Menu {
  label: string;
  url: string;
  icon?: ReactNode;
}

interface MenuCategory {
  category: string;
  menus: Menu[];
}

type Props = {
  title: string;
  description: string;
  icon?: ReactNode;
  mainMenus: MenuCategory[];
  footerMenus: Menu[];
};

export const NavigationMenu = (_props: Props) => {
  return (
    <NavigationMenuPrimitive.Root className="relative">
      <NavigationMenuPrimitive.List className="flex flex-row rounded-lg bg-white p-2 space-x-2">
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Trigger
            className={cx(
              "px-3 py-2 text-sm rounded-md hover:bg-gray-100 ",
              "text-sm font-medium",
              "text-gray-700 ",
              "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
            )}
          >
            Learn
          </NavigationMenuPrimitive.Trigger>

          <NavigationMenuPrimitive.Content
            className={cx(
              "absolute w-auto top-0 left-0 rounded-lg",
              "radix-motion-from-start:animate-enter-from-left",
              "radix-motion-from-end:animate-enter-from-right",
              "radix-motion-to-start:animate-exit-to-left",
              "radix-motion-to-end:animate-exit-to-right",
            )}
          >
            <div className="w-[30rem] lg:w-[42rem] p-3">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 w-full bg-gray-100  p-4 rounded-md" />

                <div className="col-span-4 w-full flex flex-col space-y-3 bg-gray-100  p-4 rounded-md">
                  <div className="w-full bg-white h-12 rounded-md" />
                  <div className="w-full bg-white h-12 rounded-md" />
                  <div className="w-full bg-white h-12 rounded-md" />
                  <div className="w-full bg-white h-12 rounded-md" />
                </div>
              </div>
            </div>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Trigger
            className={cx(
              "px-3 py-2 text-sm rounded-md hover:bg-gray-100 ",
              "text-sm font-medium text-gray-700 ",
              "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
            )}
          >
            Developers
          </NavigationMenuPrimitive.Trigger>

          <NavigationMenuPrimitive.Content
            className={cx(
              "absolute w-auto top-0 left-0 rounded-lg",
              "radix-motion-from-start:animate-enter-from-left",
              "radix-motion-from-end:animate-enter-from-right",
              "radix-motion-to-start:animate-exit-to-left",
              "radix-motion-to-end:animate-exit-to-right",
            )}
          >
            <div className="w-[16rem] lg:w-[18rem] p-3">
              <div className="w-full flex flex-col space-y-2">
                <NavigationMenuPrimitive.Link
                  className={cx(
                    "w-full px-4 py-3 hover:bg-gray-100  rounded-md",
                    "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
                  )}
                  href="https://tailwindcss.com"
                >
                  <span className="text-sm font-medium text-gray-900 ">
                    Tailwind CSS
                  </span>

                  <div className="mt-1 text-sm text-gray-700 ">
                    A utility-first CSS framework for rapidly building custom
                    user interfaces.
                  </div>
                </NavigationMenuPrimitive.Link>

                <NavigationMenuPrimitive.Link
                  className={cx(
                    "w-full px-4 py-3 hover:bg-gray-100  rounded-md",
                    "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
                  )}
                  href="https://www.radix-ui.com"
                >
                  <span className="text-sm font-medium text-gray-900 ">
                    Radix UI
                  </span>

                  <div className="mt-1 text-sm text-gray-700 ">
                    An open-source UI component library for building
                    high-quality, accessible design systems and web apps.
                  </div>
                </NavigationMenuPrimitive.Link>
              </div>
            </div>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item asChild>
          <NavigationMenuPrimitive.Link
            href="https://github.com/ecklf/tailwindcss-radix"
            className={cx(
              "px-3 py-2 text-sm rounded-md hover:bg-gray-100 ",
              "text-sm font-medium text-gray-700 dark:text-gray-100",
            )}
          >
            Ecosystem
          </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item asChild>
          <NavigationMenuPrimitive.Link
            href="https://github.com/ecklf/tailwindcss-radix"
            className={cx(
              "px-3 py-2 text-sm rounded-md hover:bg-gray-100 ",
              "text-sm font-medium text-gray-700 dark:text-gray-100",
            )}
          >
            Community
          </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Indicator
          className={cx(
            "z-10",
            "top-[100%] flex items-end justify-center h-2 overflow-hidden",
            "radix-state-visible:animate-fade-in",
            "radix-state-hidden:animate-fade-out",
            "transition-[width_transform] duration-[250ms] ease-[ease]",
          )}
        >
          <div className="top-1 relative bg-white  w-2 h-2 rotate-45" />
        </NavigationMenuPrimitive.Indicator>
      </NavigationMenuPrimitive.List>

      <div
        className={cx(
          "absolute flex justify-center",
          "w-[140%] left-[-20%] top-[100%]",
        )}
        style={{
          perspective: "2000px",
        }}
      >
        <NavigationMenuPrimitive.Viewport
          className={cx(
            "relative mt-2 shadow-lg rounded-md bg-white  overflow-hidden",
            "w-radix-navigation-menu-viewport",
            "h-radix-navigation-menu-viewport",
            "radix-state-open:animate-scale-in-content",
            "radix-state-closed:animate-scale-out-content",
            "origin-[top_center] transition-[width_height] duration-300 ease-[ease]",
          )}
        />
      </div>
    </NavigationMenuPrimitive.Root>
  );
};
