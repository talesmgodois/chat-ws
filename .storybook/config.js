import { configure } from "@storybook/react";
function loadStories() {
  require("../stories/index.js");
  require("../stories/sample.js");
  require("../stories/header");
  require("../stories/message");
  require("../stories/send-message");
}

configure(loadStories, module);
