import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

const styles = {
    card: {
        backGroundColor: 'red',
        padding: 10
    }
};

const MessageComponent = props => {
    const {
        msg: { content },
        classes
    } = props;
    return (
        <Card>
            <Grid container>
                <Grid item xs={10}>
                    <Typography className={classes.card}>{content}</Typography>
                </Grid>

                <Grid item xs={2}>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Card>
    );
};

export default withStyles(styles)(MessageComponent);
