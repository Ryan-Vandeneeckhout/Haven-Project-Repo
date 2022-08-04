import NextInput from "../components/inputs/NextInput";
import "../sass/_login.scss";

const LandingPageUserSignedOut = () => {
  return (
    <div className="signUpAndLoginContainer">
      <div className="upperOnBoardingContainer">
        <h2>Welcome to Haven</h2>
        <p>
          Haven is a safe network for members of the LGBTQ+ to find friends.
        </p>
      </div>
      <div className="signInContainer">
        <NextInput
          ButtonText={"Sign Up"}
          ButtonClass={`signupButton signUpAndLogInButton`}
          Linked={"/signup"}
        />
        <NextInput
          ButtonText={"Log In"}
          ButtonClass={`loginButton signUpAndLogInButton`}
          Linked={"/login"}
        />
      </div>
    </div>
  );
};

export default LandingPageUserSignedOut;
