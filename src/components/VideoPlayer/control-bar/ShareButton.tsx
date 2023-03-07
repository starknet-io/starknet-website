import React from "react";
import { preventVideoJSHotKeys } from "./utils";

export const ShareButton = () => {
  return (
    <button onKeyDown={preventVideoJSHotKeys}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#000"
        height={20}
        width={20}
      >
        <path
          fill-rule="evenodd"
          d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  );
};
