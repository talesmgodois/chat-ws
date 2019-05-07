import React from "react";
import HeaderComponent from "../src/views/components/header.component";

import { storiesOf } from "@storybook/react";

storiesOf("HeaderComponent", module)
  .add("Just Name", () => <HeaderComponent user={{ name: "Peter Parker" }} />)
  .add("with close Action", () => (
    <HeaderComponent
      user={{ name: "Peter Parker" }}
      closeButton={() => console.log("clicked")}
    />
  ));
