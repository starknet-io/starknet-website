// This is a test using class variance authority to create a button component.  Button is missing various states.

import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

const button = cva("rounded-md relative", {
  variants: {
    intent: {
      default: [
        "bg-buttonDefault",
        "text-buttonDefaultText",
        "hover:bg-buttonDefaultHover",
      ],
      primary: [
        "bg-buttonPrimary",
        "text-buttonPrimaryText",
        "hover:bg-buttonPrimaryHover",
      ],
      destructive: [
        "bg-buttonDestructive",
        "text-buttonDestructiveText",
        "hover:bg-buttonDestructiveHover",
      ],
    },

    size: {
      slim: "text-sm",
      medium: "text-sm",
      large: "text-base",
    },
    fullWidth: {
      true: "w-full",
    },
    disabled: {
      true: "bg-surfaceDisabled text-textDisabled",
    },
  },
  compoundVariants: [
    {
      size: "slim",
      className: "px-3 py-[3px]",
    },

    {
      size: "medium",
      className: "px-4 py-2",
    },

    {
      size: "large",
      className: "px-6 py-3",
    },
    {
      disabled: true,
      intent: "default",
      className: "border-borderDisabled",
    },
  ],
  defaultVariants: {
    intent: "default",
    size: "medium",
  },
});

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof button> {
  children: React.ReactNode;
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, intent, size, fullWidth, disabled, loading, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={button({ intent, size, fullWidth, disabled })}
      >
        <span
          className={classNames(
            "leading-[1.25rem]",
            loading && "text-transparent"
          )}
        >
          {children}
        </span>
        {loading && (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block w-4 h-4">
            <svg
              className="animate-spin"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-current"
                d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
              />
            </svg>
            <span className="sr-only">Loading</span>
          </span>
        )}
      </button>
    );
  }
);
