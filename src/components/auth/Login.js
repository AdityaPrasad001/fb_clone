import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../../firebase";
import { actionTypes } from "../../store/reducer";
import { useStateValue } from "../../store/StateProvider";
import "./Login.css";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    // signIn...
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="fb_logo"
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="facebook__logo"
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
