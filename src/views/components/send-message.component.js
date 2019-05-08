import { PropTypes } from "prop-types";
import React from "react";
import { withStyles } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import SendIcon from "@material-ui/icons/Send";

const styles = {
  box: {
    boxSizing: "border-box",
  },
};

const SendMessageComponent = props => {
  const logIt = (params = "default click") => {
    console.log(params);
  };
  const {
    classes,
    handleSendButtonClick = logIt,
    placeholder = "Type your text here",
  } = props;

  return (
    <Grid container className={classes.box} spacing={24}>
      <Grid item xs={10}>
        <Grid container alignItems="stretch" justify="flex-start">
          <Grid item xs={12}>
            <InputBase fullWidth={true} placeholder={placeholder} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs>
        <Fab
          color="primary"
          aria-label="Add"
          onClick={() => handleSendButtonClick()}
        >
          <SendIcon />
        </Fab>
      </Grid>
    </Grid>
  );
};

SendMessageComponent.propTypes = {
  classes: PropTypes.object,
  handleSendButtonClick: PropTypes.func,
  placeholder: PropTypes.string,
};

export default withStyles(styles)(SendMessageComponent);
