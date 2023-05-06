import LivePreivewPage from "./(componnets)/LivePreivewPage";
import { ThemeProvider } from "../providers/ThemeProvider";
import "./live-preview.css";

export default function Page() {
  return (
    <ThemeProvider>
      <LivePreivewPage />
    </ThemeProvider>
  );
}
