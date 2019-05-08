import React, { Fragment } from "react";
import User from "../src/domain/user.domain";

import ContactsList from "../src/views/components/contacts-list.component";
import { storiesOf } from "@storybook/react";

storiesOf("Contacts List", module).add("with close Action", () => {
  const users = [
    new User({ name: "Bruce", email: "bruce@gmail.com" }),
    new User({ name: "Flash", email: "flash@gmail.com" }),
    new User({ name: "Tony", email: "tony@gmail.com" }),
  ];

  return (
    <Fragment>
      <ContactsList users={users} />
    </Fragment>
  );
});
