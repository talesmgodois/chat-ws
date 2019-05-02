import PropTypes from "prop-types";
import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

const styles = {
  white: {
    color: "white",
  },
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const getCloseIcon = action => {
  return (
    <IconButton aria-label="Close" style={styles.white} onClick={action}>
      <CloseIcon fontSize="small" />
    </IconButton>
  );
};

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, closeButton } = this.props;

    const elemCloseButton = closeButton ? getCloseIcon(closeButton) : null;

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
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {user.name}
          </Typography>
          {elemCloseButton}
        </Toolbar>
      </AppBar>
    );
  }
}

HeaderComponent.propTypes = {
  user: PropTypes.object.isRequired,
  backgroundColor: PropTypes.string,
  closeButton: PropTypes.func,
};

export default HeaderComponent;
