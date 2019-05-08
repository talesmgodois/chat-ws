import React from "react";

import ChatComponent from "../src/views/screens/chat/chat.component";
import { storiesOf } from "@storybook/react";

storiesOf("App", module).add("App rendering", () => {
  return <ChatComponent />;
});
