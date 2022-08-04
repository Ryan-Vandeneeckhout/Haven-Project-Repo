import { OnBoardingInterestsMap } from "./OnBoardingInterestsMap";
import TaglistIndivdualButton from "./TaglistIndividualButton";
import NextInput from "../components/inputs/NextInput";
import { useState } from "react";
import OnBoardingProgressBar from "./onBoardingProgressBar";

const OnBoardingInterest = (props) => {
  const interests = true;
  const avatars = false;
  const pronouns = false;
  const flu = false;
  const terms = false;

  const [tagValue, setTagValue] = useState("Haven");

  const tagArray = () => {
    console.log(props.tagsarray);
    //If the Taglist Array Does not Contain the Selection
    if (!props.tagsarray.includes(tagValue)) {
      props.setTagsArray(() => [...props.tagsarray, tagValue]);
      props.passData();
    } else {
      props.setTagsArray(props.tagsarray.filter((item) => item !== tagValue));
      props.passData();
    }
  };

  return (
    <div className="onBoardingContentContainer">
      <div className="upperOnBoarding">
        <NextInput
          ButtonText={"Back"}
          ButtonClass={`nextButton`}
          Linked={"/signup"}
          ButtonClassContainer={`backButtonContainer`}
        />

        <OnBoardingProgressBar
          avatars={avatars}
          terms={terms}
          pronouns={pronouns}
          flu={flu}
          interests={interests}
        />
        <h2>What are you interested in?</h2>

        <div className="onBoardingContent">
          <ul>
            {OnBoardingInterestsMap.map((item, index) => {
              return (
                <TaglistIndivdualButton
                  key={index}
                  ButtonClass={"interestButtons"}
                  InterestName={item.InterestName}
                  tagArray={tagArray}
                  setTagValue={setTagValue}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <NextInput
        ButtonText={"CONTINUE"}
        ButtonClass={`skipButton`}
        Linked={"/flu"}
        ButtonClassContainer={`continueButtonContainer`}
      />
    </div>
  );
};

export default OnBoardingInterest;
