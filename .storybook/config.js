import { configure } from "@storybook/react";
function loadStories() {
  require("../stories/index.js");
  require("../stories/sample.js");
  require("../stories/header");
  require("../stories/message");
  require("../stories/send-message");
  require("../stories/text.js");
  require("../stories/contacts-list.js");
}

configure(loadStories, module);
