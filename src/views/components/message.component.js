import React from "react";
import { Typography, Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  card: {
    backGroundColor: "red",
    padding: 10,
  },
  body: {
    marginTop: 10,
    marginBottom: 10,
  },
};

const MessageButton = props => {
  const { icon } = props;
  return (
    <Grid item xs={1}>
      <IconButton>{icon}</IconButton>
    </Grid>
  );
};

const MessageComponent = props => {
  const { msg: { content }, classes, type, icon } = props;

  const leftButton = type === "left" ? <MessageButton icon={icon} /> : null;
  const rightButton = type === "right" ? <MessageButton icon={icon} /> : null;
  const space = type === "left" ? <Grid item xs /> : null;
  const direction = "row";

  return (
    <Grid container className={classes.body}>
      {space}
      <Grid item xs={10}>
        <Card>
          <Grid container direction={direction}>
            {leftButton}
            <Grid item xs={10}>
              <Typography className={classes.card}>{content}</Typography>
            </Grid>
            {rightButton}
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(MessageComponent);
