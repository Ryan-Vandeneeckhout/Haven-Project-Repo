import { TermsandConditionsNewUserTermsMap } from "./TermsandConditionsNewUserTermsMap";
import "../sass/_terms.scss";
import { useRef, useState } from "react";
import NextInput from "../components/inputs/NextInput";
import OnBoardingProgressBar from "../onBoarding/onBoardingProgressBar";
import { Link } from "react-router-dom";

const TermsandConditionsNewUser = (props) => {
  const [success, setSuccess] = useState(false);
  const checkboxRef = useRef(null);
  let interests, countrylist, statusText, flu, avatars, pronouns, terms;

  interests =
    countrylist =
    statusText =
    pronouns =
    flu =
    avatars =
    terms =
      true;

  // Form Input setState
  const handleInputCheckSelect = () => {
    setSuccess(true);
  };
  return (
    <div className="onBoardingContentContainer">
      <div className="upperOnBoarding">
        <NextInput
          ButtonText={"Back"}
          ButtonClass={`nextButton`}
          Linked={"/avatars"}
        />
        <OnBoardingProgressBar
          avatars={avatars}
          terms={terms}
          pronouns={pronouns}
          flu={flu}
          interests={interests}
          countrylist={countrylist}
          statusText={statusText}
        />
        <h2>Terms of Use</h2>
      </div>
      <div className="termsAndConditionsContainer">
        <ul>
          {TermsandConditionsNewUserTermsMap.map((item, index) => {
            return (
              <li key={index}>
                <h3>{item.termsTitle}</h3>
                <p>{item.terms}</p>
              </li>
            );
          })}
        </ul>
        <div className="termsForm">
          <form>
            <div className="acceptCondtions">
              <input
                type="checkbox"
                className="checkbox"
                id="conditions"
                name="conditions"
                ref={checkboxRef}
                onChange={handleInputCheckSelect}
              />
              <label htmlFor="conditions">
                Accept the Terms and Conditions
              </label>
            </div>

            {success ? (
              <Link className="termsSubmit" to="/createuser">
                Submit
              </Link>
            ) : (
              <p>You Must Accept the Terms and Conditions to Continue</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default TermsandConditionsNewUser;
