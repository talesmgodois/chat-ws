import { configure } from "@storybook/react";
function loadStories() {
  require("../stories/index.js");
  require("../stories/sample.js");
  require("../stories/header");
}

configure(loadStories, module);
