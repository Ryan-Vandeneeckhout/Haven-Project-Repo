import "../sass/_progressBarOnBoarding.scss";

const OnBoardingProgressBar = (props) => {
  return (
    <div className="Bar">
      <div className={`dot${props.interests ? " green" : " grey"}`} />
      <div className={`dot${props.flu ? " green" : " grey"}`} />
      <div className={`dot${props.countrylist ? " green" : " grey"}`} />
      <div className={`dot${props.statusText ? " green" : " grey"}`} />
      <div className={`dot${props.pronouns ? " green" : " grey"}`} />
      <div className={`dot${props.avatars ? " green" : " grey"}`} />
      <div className={`dot${props.terms ? " green" : " grey"}`} />
    </div>
  );
};
export default OnBoardingProgressBar;
