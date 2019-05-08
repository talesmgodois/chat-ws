import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Avatar, ListItemAvatar, Divider } from "@material-ui/core";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = () => ({
  root: {
    width: "100%",
  },
  inline: {
    display: "inline",
  },
});

const Contact = props => {
  const logIt = (params = "params") => {
    console.log(params);
  };
  const {
    user: { name, picture, email },
    classes,
    handleClick = logIt,
  } = props;
  return (
    <ListItem
      alignItems="flex-start"
      onClickCapture={() => handleClick()}
      button
    >
      <ListItemAvatar>
        <Avatar alt={name} src={picture} />
      </ListItemAvatar>

      <ListItemText
        primary={name}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              className={classes.inline}
              color="textPrimary"
            >
              {email}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

const ContactsList = props => {
  const { users, classes, handleClick } = props;

  const contacts = users.map((user, index) => {
    const divider =
      users.length - 1 !== index ? <Divider variant="middle" /> : null;
    return (
      <Fragment>
        <Contact
          user={user}
          classes={classes}
          handleClick={handleClick}
          key={index}
        />
        {divider}
      </Fragment>
    );
  });

  return (
    <Fragment>
      <List className={classes.root}>{contacts}</List>
    </Fragment>
  );
};

ContactsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactsList);
