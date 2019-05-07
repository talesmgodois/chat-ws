import React from "react";

import SendMessageComponent from "../src/views/components/send-message.component";
import { storiesOf } from "@storybook/react";

storiesOf("Send Message", module).add("Send message rendering", () => {
  return <SendMessageComponent />;
});
