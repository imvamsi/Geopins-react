import React from "react";
import { GraphQLClient } from "graphql-request";
import { GoogleLogin } from "react-google-login";
import { withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";

const ME_QUERY = `
{
  me {
    _id,
    name,
    email,
    picture
  }
}
`;

const Login = ({ classes }) => {
  const onSuccess = async user => {
    const idToken = user.getAuthResponse().id_token;
    console.log({ idToken });
    const client = new GraphQLClient("http://localhost:4000/graphql", {
      headers: { authorization: idToken }
    });
    const res = await client.request(ME_QUERY);
    console.log({ res });
  };
  return (
    <GoogleLogin
      clientId="699892671462-ck209aolskfjsm0ci2bb50f16cjljkot.apps.googleusercontent.com"
      onSuccess={onSuccess}
      isSignedIn={true}
    />
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
