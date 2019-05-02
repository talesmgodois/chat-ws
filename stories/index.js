import React from "react";
import App from "../src/App";

import { storiesOf } from "@storybook/react";

storiesOf("App", module).add("App rendering", () => {
  return <App />;
});
