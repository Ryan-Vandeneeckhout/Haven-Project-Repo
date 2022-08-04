import { useRef } from "react";
import React, { useState, useMemo } from "react";
import Select from "react-select";
import NextInput from "../components/inputs/NextInput";
import countryList from "react-select-country-list";
import OnBoardingProgressBar from "./onBoardingProgressBar";

const OnBoardingCountrySelector = (props) => {
  const checkboxRef = useRef(null);

  let interests, countrylist, statusText, flu, avatars, pronouns, terms;

  interests = countrylist = flu = true;
  avatars = pronouns = terms = statusText = false;

  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value); 
    props.setCountry(value);
  };

  return (
    <div className="onBoardingContentContainer">
      <div className="upperOnBoarding">
        <NextInput
          ButtonText={"Back"}
          ButtonClass={`nextButton`}
          Linked={"/flu"}
          ButtonClassContainer={`backButtonContainer`}
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
        <h2>Where are you located?</h2>
      <div className="selectForm">
        <Select options={options} value={value} onChange={changeHandler} />
        {value ? null : <p>Please Select a Location</p>}
        <form>
          <div className="acceptCondtions">
            <input
              type="checkbox"
              className="checkbox"
              id="conditions"
              name="conditions"
              ref={checkboxRef}
            />
            <label htmlFor="conditions">Share my location</label>
          </div>
        </form>
      </div>
      </div>
      {value ? (
        <NextInput
          ButtonText={"CONTINUE"}
          ButtonClass={`skipButton`}
          Linked={"/pronouns"}
          ButtonClassContainer={`continueButtonContainer`}
        />
      ) : null}
    </div>
  );
};
export default OnBoardingCountrySelector;
