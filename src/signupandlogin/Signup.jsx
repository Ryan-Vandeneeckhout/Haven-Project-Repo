import { useState } from "react";
import NextInput from "../components/inputs/NextInput";
import EmailAndPasswordComponent from "../components/inputs/EmailAndPasswordComponent";

export default function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      console.log(body);
      const response = await fetch(
        "https://haven-nodejs.herokuapp.com/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      const parseRes = await response.json();
      localStorage.setItem("token", parseRes.token);
      props.setSuccess("Email is Available");
    } catch (error) {
      props.setError("Email is Unavailable!");
    }
  };

  return (
    <>
  
      <form className="loginSignUpForm" onSubmit={HandleSubmit}>
        <EmailAndPasswordComponent
          password={password}
          email={email}
          setEmail={setEmail}
          setPassword={setPassword}
        />

        {props.success ? (
          <NextInput
            ButtonText={"Continue"}
            ButtonClass={`continueButton signUpAndLogInButton`}
            Linked={"/interests"}
          />
        ) : (
          <button className="submitButton signUpAndLogInButton">Submit</button>
        )}
      </form>
    </>
  );
}
