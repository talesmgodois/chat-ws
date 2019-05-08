import React, { Component } from "react";

import User from "../../../domain/user.domain";
import HeaderComponent from "../../components/header.component";
import Grid from "@material-ui/core/Grid";

class ChatComponent extends Component {
  render() {
    const user = new User({ name: "Bruce" });

    return (
      <Grid>
        <HeaderComponent user={user} />
      </Grid>
    );
  }
}

export default ChatComponent;
