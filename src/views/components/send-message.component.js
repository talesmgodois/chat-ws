import React from "react";
import { withStyles } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import SendIcon from "@material-ui/icons/Send";

const styles = {
  box: {
    boxSizing: "border-box",
  },
};

const SendMessageComponent = props => {
  const { classes } = props;
  return (
    <Grid container className={classes.box} spacing={24}>
      <Grid item xs={10}>
        <FormControl className={classes.margin}>
          <InputBase
            id="bootstrap-input"
            defaultValue="react-bootstrap"
            classes={{
              root: classes.bootstrapRoot,
              input: classes.bootstrapInput,
            }}
          />
        </FormControl>
      </Grid>
      <Grid item xs>
        <Fab color="primary" aria-label="Add">
          <SendIcon />
        </Fab>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(SendMessageComponent);
