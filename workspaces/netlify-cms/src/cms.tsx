import "./styles";
import CMS from "netlify-cms-app";
import { config } from "./config";

// @ts-expect-error
window.CMS = CMS;

CMS.init({
  config,
});
