import { useState } from "react";

const OnBoardingCreateUser = (props) => {
  const [text, setText] = useState("Creating User");

  const LoadingScreenLoaded = () => {
    setTimeout(function () {
      setText("Success");
   
    }, 4000);
    setTimeout(function () {
        setText("Redirecting to Home");
      props.LoadingScreenClicked();
      props.setAuth();
    }, 4000);
      
  };

  return (
    <>
      <div className="createUserLoadingScreen">
        <div className="square">
          <div className="circleRotating">
            <div className="arrows">
              <div className="arrow"></div>
            </div>
          </div>
          <div className="titleContainerLoadingScreen">
            <h2 className="loading">{text}</h2>
          </div>
        </div>
      </div>
      {LoadingScreenLoaded()}
    </>
  );
};
export default OnBoardingCreateUser;
