import React from "react";
import { Typography, Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const styles = {
  card: {
    backGroundColor: "red",
    padding: 10,
  },
  body: {
    width: "90%",
  },
};

const messageButton = () => {
  return (
    <Grid item xs={2}>
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </Grid>
  );
};

const MessageComponent = props => {
  const { msg: { content }, classes, type } = props;
  const leftButton = type === "left" ? messageButton() : null;
  const leftSpace = type === "left" ? <Grid item xs={2} /> : null;
  const rightButton = type === "right" ? messageButton() : null;
  const rightSpace = type === "right" ? <Grid item xs={2} /> : null;

  return (
    <Grid container>
      {leftSpace}
      <Grid item xs={10}>
        <Card>
          <Grid container>
            {rightButton}
            <Grid item xs={10}>
              <Typography className={classes.card}>{content}</Typography>
            </Grid>
            {leftButton}
          </Grid>
        </Card>
      </Grid>
      {rightSpace}
    </Grid>
  );
};

export default withStyles(styles)(MessageComponent);
