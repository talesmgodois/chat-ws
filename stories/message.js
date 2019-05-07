import React from "react";
import Message from "../src/domain/message.domain";
import MessageComponent from "../src/views/components/message.component";
import CloseIcon from "@material-ui/icons/Close";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { storiesOf } from "@storybook/react";

storiesOf("Message Default", module)
  .add("Message rendering", () => {
    const msg = new Message({ content: "Hi how are you?" });
    return <MessageComponent msg={msg} />;
  })
  .add("Message other size", () => {
    const msg = new Message({ content: "Hi how are you?" });
    return (
      <div style={{ width: 200 }}>
        <MessageComponent msg={msg} />
      </div>
    );
  })
  .add("Long message", () => {
    const msg = new Message({
      content:
        "Hi how are you?Hi how are you?Hi how are you?Hi how are you?Hi how are you?Hi how are you?Hi how are you?Hi how are you?Hi how are you?Hi how are you?Hi how are you?",
    });
    const icon1 = <MoreVertIcon />;
    const closeIcon = <CloseIcon />;
    return (
      <div>
        <MessageComponent msg={msg} />

        <MessageComponent msg={msg} type={"left"} icon={icon1} />

        <MessageComponent msg={msg} type={"right"} icon={closeIcon} />
      </div>
    );
  });
