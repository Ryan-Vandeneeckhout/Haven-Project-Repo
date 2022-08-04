import { useState } from "react";
import NextInput from "../components/inputs/NextInput";
import Signup from "./Signup";

const SignupAndLogInPage = (props) => {

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  return (
    <>
      <NextInput
        ButtonText={"Back"}
        ButtonClass={`nextButton`}
        Linked={"/"}
        ButtonClassContainer={`backButtonContainer`}
      />
      <div className="signInPageContainer">
        <div className="upperLoginSignInPage">
          <h2>Join Haven Today</h2>
          <p>
            By continuing, you agree to our <b>Terms of Use</b> and our{" "}
            <b>Privacy Policy.</b>
          </p>
          <p>{error}</p>
        </div>
        <Signup success={success} setError={setError} setSuccess={setSuccess} setAuth={props.setAuth} />
      </div>
    </>
  );
};

export default SignupAndLogInPage;
