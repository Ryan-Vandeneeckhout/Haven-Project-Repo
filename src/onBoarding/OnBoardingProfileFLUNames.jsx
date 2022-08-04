import EmailAndPasswordInput from "../components/inputs/EmailAndPassInput";
import NextInput from "../components/inputs/NextInput";
import OnBoardingProgressBar from "./onBoardingProgressBar";

const OnBoardingProfileFLUNames = (props) => {
  const FirstNameText = "First Name";
  const LastNameText = "Last Name";
  const UserNameText = "Username";

  let interests, flu, avatars, pronouns, terms, countrylist, statusText;

  interests = flu = true;
  avatars = countrylist = pronouns = terms = statusText = false;

  return (
    <div className="onBoardingContentContainer">
      <div className="upperOnBoarding">
        <NextInput
          ButtonText={"Back"}
          ButtonClass={`nextButton`}
          Linked={"/interests"}
        />
        <OnBoardingProgressBar
          avatars={avatars}
          terms={terms}
          pronouns={pronouns}
          flu={flu}
          countrylist={countrylist}
          statusText={statusText}
          interests={interests}
        />
        <h2>Profile Settings - FLU</h2>
      </div>
      <form>
        <EmailAndPasswordInput
          valueInput={FirstNameText}
          valueText={FirstNameText}
          setValue={props.setFirstName}
          value={props.firstName}
        />

        <EmailAndPasswordInput
          valueInput={LastNameText}
          valueText={LastNameText}
          setValue={props.setLastName}
          value={props.lastname}
        />
        <EmailAndPasswordInput
          valueInput={UserNameText}
          valueText={UserNameText}
          setValue={props.setUserName}
          value={props.username}
        />
      </form>

      <p className="optionialParagraph">You can always change them later.</p>
      <NextInput
        ButtonText={"CONTINUE"}
        ButtonClassContainer={`continueButtonContainer`}
        ButtonClass={`skipButton`}
        Linked={"/location"}
      />
    </div>
  );
};
export default OnBoardingProfileFLUNames;
