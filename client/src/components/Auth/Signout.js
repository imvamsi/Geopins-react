import React, { useContext } from "react";
import { GoogleLogout } from "react-google-login";
import { withStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Typography from "@material-ui/core/Typography";
import Context from "../../context";

const Signout = ({ classes }) => {
  const { dispatch } = useContext(Context);

  const onSignOut = () => {
    dispatch({ type: "SIGNOUT_USER" });
  };
  return (
    <GoogleLogout
      onLogoutSuccess={onSignOut}
      // important to do so that the button gets registered properly when clicked
      render={({ onClick }) => (
        <span className={classes.root} onClick={onClick}>
          <Typography variant="body1" className={classes.buttonText}>
            <span style={{ color: "#fff" }}>Signout</span>
          </Typography>
          <ExitToAppIcon className={classes.buttonIcon} />
        </span>
      )}
    />
  );
};

const styles = {
  root: {
    cursor: "pointer",
    display: "flex"
  },
  buttonText: {
    color: "orange"
  },
  buttonIcon: {
    marginLeft: "5px",
    color: "orange"
  }
};

export default withStyles(styles)(Signout);
