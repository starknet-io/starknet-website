import "./styles";
import cms from "netlify-cms-app";
import { config } from "./config";
import { registerWidget } from "./widgets/uuid";

// @ts-expect-error
window.CMS = cms;

registerWidget(cms)

cms.init({
  config,
});
