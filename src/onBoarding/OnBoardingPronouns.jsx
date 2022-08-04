import EmailAndPasswordInput from "../components/inputs/EmailAndPassInput";
import NextInput from "../components/inputs/NextInput";
import OnBoardingProgressBar from "./onBoardingProgressBar";

const OnBoardingPronouns = (props) => {
  const PronounsText = "Pronouns eg: He/Him";

  let interests, countrylist, statusText, flu, avatars, pronouns, terms;

  interests = countrylist = statusText = pronouns = flu = true;
  avatars = terms = false;

  return (
    <div className="onBoardingContentContainer">
      <div className="upperOnBoarding">
        <NextInput
          ButtonText={"Back"}
          ButtonClass={`nextButton`}
          Linked={"/location"}
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
        <h2>What are your preferred Pronouns?</h2>
      </div>
      <form>
        <EmailAndPasswordInput
          valueInput={PronounsText}
          valueText={PronounsText}
          setValue={props.setPronouns}
          value={props.pronouns}
        />
      </form>
      <p>Optionial and you can always change your pronouns later.</p>
      <NextInput
        ButtonText={"Continue"}
        ButtonClass={`skipButton`}
        Linked={"/avatars"}
        ButtonClassContainer={`continueButtonContainer`}
      />

    </div>
  );
};
export default OnBoardingPronouns;
