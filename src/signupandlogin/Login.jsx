import { useState } from "react";
import NextInput from "../components/inputs/NextInput";
import EmailAndPasswordComponent from "../components/inputs/EmailAndPasswordComponent";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      console.log(body);
      const response = await fetch(
        "https://haven-nodejs.herokuapp.com/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      const parseRes = await response.json();
      localStorage.setItem("token", parseRes.token);
      props.setAuth(true);
      setSuccess("Welcome Back to Haven!");
    } catch (error) {
      setError("Something went wrong!");
    }
  };

  return (
    <>
      {/*Login Page JSX*/}
      <NextInput
        ButtonText={"Back"}
        ButtonClass={`nextButton`}
        Linked={"/"}
        ButtonClassContainer={`backButtonContainer`}
      />
      <h2>Login to Haven</h2>
      {success ? <h3>{success}</h3> : <h3>{error}</h3>}
      <form className="loginSignUpForm" onSubmit={HandleSubmit}>
        <EmailAndPasswordComponent
          password={password}
          email={email}
          setEmail={setEmail}
          setPassword={setPassword}
        />
        {success ? (
          <NextInput
            ButtonText={"Log In"}
            ButtonClass={`continueButton signUpAndLogInButton`}
            Linked={"/logging"}
          />
        ) : (
          <NextInput
          ButtonText={"Continue"}
          ButtonClass={`continueButton signUpAndLogInButton`}
          Linked={"/logging"}
        />
        )}
      </form>
    </>
  );
}
