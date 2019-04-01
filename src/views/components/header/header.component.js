import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = {
    white: {
        color: 'white'
    },
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
};

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClose() {
        console.log('close button');
    }

    render() {
        const { user, backgroundColor } = this.props;

        return (
            <AppBar
                position="static"
                style={{ backgroundColor: this.props.backgroundColor }}
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        color="inherit"
                        style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        {user.name}
                    </Typography>
                    <IconButton
                        aria-label="Close"
                        style={styles.white}
                        onClick={this.handleClose()}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Toolbar>
            </AppBar>
        );
    }
}

HeaderComponent.propTypes = {
    user: PropTypes.object.isRequired,
    backgroundColor: PropTypes.string
};

export default HeaderComponent;
