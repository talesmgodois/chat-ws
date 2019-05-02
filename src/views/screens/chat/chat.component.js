import React, { Component } from "react";

import HeaderComponent from "../../components/header.component";

class ChatComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderComponent user={{ name: "tales" }} />
      </React.Fragment>
    );
  }
}

export default ChatComponent;
