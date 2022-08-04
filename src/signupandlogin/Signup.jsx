import { useState, useRef } from "react";
import NextInput from "../components/inputs/NextInput";
import EmailAndPasswordComponent from "../components/inputs/EmailAndPasswordComponent";
import EmailAndPasswordInput from "../components/inputs/EmailAndPassInput";

export default function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState(""); 
  const ConfirmPassWordText = "Confirm Password";

  const passwordRef = useRef(null); 
  const confirmPasswordRef = useRef(null);

  const HandleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      passwordRef.current.style.color = "red";
      passwordRef.current.style.border = "red solid 5px";
      confirmPasswordRef.current.style.color = "red";
      confirmPasswordRef.current.style.border = "red solid 5px";
      props.setError("Password does not match. Please try again.")
    }

    if (password === confirmpassword && password.includes("@") && password.length > 4) {
      
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
    }
    console.log(password)
    console.log(confirmpassword)
  };

  return (
    <>
  
      <form className="loginSignUpForm" onSubmit={HandleSubmit}>
        <EmailAndPasswordComponent
          password={password}
          email={email}
          setEmail={setEmail}
          setPassword={setPassword}
          InputRef={passwordRef}
        />

        <EmailAndPasswordInput
          
          InputRef={confirmPasswordRef}
          valueInput={ConfirmPassWordText}
          valueText={ConfirmPassWordText}
          setValue={setConfirmPassword}
          value={confirmpassword}
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
