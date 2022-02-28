import React from "react";

import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useGoogleLogin";
import PDButton from "../button/PDButton";

function PDLogin() {
  const clientId =
    "756026268840-53ihg6ufqru4g6m7ng5lf5589m5415p6.apps.googleusercontent.com";

  const auth = useAuth();
  const navigate = useNavigate();

  const handleLoginSuccess = (res) => {
    console.log("[Login Succcess] currentUser : ", res.profileObj);
    navigate("/pokedex");
    auth.login(res.profileObj.name);
  };

  const handleLoginFailure = (err) => {
    console.log("[Login Failure]");
  };
  const handleLogoutSuccess = (res) => {
    navigate("/");
    auth.logout();
  };
  const handleLogoutFailure = (err) => {
    console.log("[Logout Failure]");
  };

  return (
    <>
      {!auth.user ? (
        <GoogleLogin
          clientId={clientId}
          render={(renderProps) => (
            <PDButton
              handleClick={renderProps.onClick}
              buttonText="Google"
              className="google-login-button"
            />
          )}
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          cookiePolicy="single_host_origin"
        />
      ) : (
        <GoogleLogout
          clientId={clientId}
          render={(renderProps) => (
            <PDButton
              handleClick={renderProps.onClick}
              buttonText="Logout"
              className="google-logout-button"
            />
          )}
          onLogoutSuccess={handleLogoutSuccess}
          onLogoutFailure={handleLogoutFailure}
          cookiePolicy="single_host_origin"
        />
      )}
    </>
  );
}

export default PDLogin;
