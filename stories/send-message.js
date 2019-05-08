import React from "react";

import SendMessageComponent from "../src/views/components/send-message.component";
import { storiesOf } from "@storybook/react";

storiesOf("Send Message", module)
  .add("Send message rendering", () => {
    return <SendMessageComponent />;
  })
  .add("Change click action", () => {
    const click = () => {
      console.log("new click baby");
    };
    return <SendMessageComponent handleSendButtonClick={click} />;
  })
  .add("Changing placeholder", () => {
    return (
      <React.Fragment>
        <SendMessageComponent placeholder={"Cool placehholder"} />
        <SendMessageComponent placeholder={"Another placehholder"} />
      </React.Fragment>
    );
  });
