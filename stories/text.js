import React, { Fragment } from "react";

import { PLACEHOLDER } from "../src/stores/TextStore";
import { storiesOf } from "@storybook/react";

storiesOf("Text", module).add("Render text", () => {
  return (
    <Fragment>
      <h3>You can use a Text Component to insert text from the TextStore</h3>
      {PLACEHOLDER}
      <br />
    </Fragment>
  );
});
