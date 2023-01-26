import "./styles";
import cms from "netlify-cms-app";
import { config } from "./config";
import NetlifyCmsWidgetUUID from "./widgets/uuid";
import NetlifyCmsWidgetYouTube from "./widgets/youtube";

// @ts-expect-error
window.CMS = cms;

// @ts-expect-error
cms.registerWidget([
  NetlifyCmsWidgetUUID.Widget(),
  NetlifyCmsWidgetYouTube.Widget(),
]);

cms.init({
  config,
});
