import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPageUserSignedOut from "../signupandlogin/LandingPageUserSignedOut.jsx";
import SignupAndLogInPage from "../signupandlogin/SignUpAndLoginInPage.jsx";
import OnBoardingInterest from "./OnBoardingInterest.jsx";
import OnBoardingProfileFLUNames from "./OnBoardingProfileFLUNames.jsx";
import "../sass/_onboarding.scss"; 
import OnBoardingAvatars from "./OnBoardingAvatars.jsx";
import OnBoardingCreateUser from "./OnBoardingCreateUser.jsx";
import OnBoardingCountrySelector from "./OnBoardingCountrySelector.jsx";
import OnBoardingPronouns from "./OnBoardingPronouns.jsx";
import TermsandConditionsNewUser from "../Terms/TermsandConditionsNewUser.jsx";
import Login from "../signupandlogin/Login.jsx";

const OnBoarding = (props) => {

  const [tagsarray, setTagsArray] = useState([]);
  const [avatarUrl, setAvatarUrl] = useState("./assets/profilePictures"); 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(""); 
  const [userName, setUserName] = useState(""); 
  const [country, setCountry] = useState(""); 
  const [pronouns, setPronouns] = useState(""); 

  const passData = () => {

    const body = { avatar: avatarUrl, tags: tagsarray, firstname: firstName, lastname: lastName, username: userName, location: country, pronoun: pronouns  }
    console.log(body); 
  }

  return (
    <>
      <BrowserRouter>
        <section className="onBoardingWrapper">
          <div className="wrapper10">
          <Routes>
            <Route extact path="/" element={<LandingPageUserSignedOut />} />
            <Route extact path="/avatars" element={<OnBoardingAvatars setAvatarUrl={setAvatarUrl} passData={passData} />}/>
            <Route extact path="/signup" element={<SignupAndLogInPage />} />
            <Route extact path="/login" element={<Login setAuth={props.setAuth} />}/>
            <Route extact path="/interests" element={<OnBoardingInterest tagsarray={tagsarray} setTagsArray={setTagsArray} passData={passData} />} />
            <Route extact path="/flu" element={<OnBoardingProfileFLUNames setUserName={setUserName} setFirstName={setFirstName} userName={userName} firstName={firstName} lastName={lastName} setLastName={setLastName} passData={passData} />} />
            <Route extact path="/location" element={<OnBoardingCountrySelector passData={passData} setCountry={setCountry} />} />
            <Route extact path="/pronouns" element={<OnBoardingPronouns setPronouns={setPronouns} pronouns={pronouns} passData={passData} />} />
              <Route extact path="/terms" element={<TermsandConditionsNewUser passData={passData} />} />
              <Route extact path="/logging" element={<OnBoardingCreateUser LoadingScreenClicked={props.LoadingScreenClicked} setAuth={props.setAuth} />} />
            <Route extact path="/createuser" element={<OnBoardingCreateUser LoadingScreenClicked={props.LoadingScreenClicked} setAuth={props.setAuth} />} />
          </Routes>
          </div>
        </section>
        </BrowserRouter>
      </>
  );
};
export default OnBoarding;
