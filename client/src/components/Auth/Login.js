import React, { useContext } from "react";
import { GraphQLClient } from "graphql-request";
import { GoogleLogin } from "react-google-login";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Context from "../../context";
import { ME_QUERY } from "../../graphql/queries";
import color from "@material-ui/core/colors/brown";

const onFailure = err => {
  console.log(err);
};
const Login = ({ classes }) => {
  const { dispatch } = useContext(Context);
  const onSuccess = async user => {
    const idToken = user.getAuthResponse().id_token;
    console.log({ idToken });
    const client = new GraphQLClient("http://localhost:4000/graphql", {
      headers: { authorization: idToken }
    });
    const { me } = await client.request(ME_QUERY);
    console.log({ me });
    dispatch({ type: "LOGIN_USER", payload: me });
  };
  return (
    <div className={classes.root}>
      <Typography gutterBottom style={{ fontSize: "40px" }}>
        Welcome
      </Typography>
      <GoogleLogin
        clientId="699892671462-ck209aolskfjsm0ci2bb50f16cjljkot.apps.googleusercontent.com"
        onSuccess={onSuccess}
        onFailure={onFailure}
        isSignedIn={true}
        theme="dark"
      />
    </div>
  );
};

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
};

export default withStyles(styles)(Login);
