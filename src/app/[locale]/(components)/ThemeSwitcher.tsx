"use client";

import { useLocalStorage, useMedia } from "react-use";
import { useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

declare global {
  interface Window {
    gtag: any;
  }
}

export {};
type StorageTheme = "dark" | "light" | "system";

const sendThemeChangeToGA = (mode: StorageTheme) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "theme_change", {
      event_category: "engagement",
      event_label: mode,
    });
  }
};

export default function ThemeSwitcher() {
  const osTheme = useMedia("(prefers-color-scheme: dark)") ? "dark" : "light";
  const [storageTheme, setStorageTheme] = useLocalStorage<StorageTheme>(
    "app-theme",
    "system"
  );
  const theme = (storageTheme === "system" ? osTheme : storageTheme) || osTheme;
  const isDarkTheme = theme === "dark";

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkTheme]);

  // Add this useEffect to send the current theme mode on initial render
  useEffect(() => {
    sendThemeChangeToGA(theme);
  }, [theme]);

  function updateTheme(theme: "dark" | "light") {
    setStorageTheme(theme === osTheme ? "system" : theme);
    sendThemeChangeToGA(theme);
  }

  return (
    <button
      type="button"
      className="text-slate-600 hover:text-slate-900 dark:text-gray-200 hover:dark:text-white"
      onClick={() => {
        updateTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
}
