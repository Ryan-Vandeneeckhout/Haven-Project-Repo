import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import LoadingScreen from "./LoadingScreen";
import OnBoarding from "./onBoarding/OnBoarding";

const AppContents = (props) => {
  const [loadingMenu, setLoadingMenu] = useState(false);
  const [home, setHome] = useState(false); 

  const LoadingScreenClicked = () => {
    window.history.replaceState(true, "Haven Home", "/")
    setHome(true);
    setLoadingMenu(false);
    return <> {home && <Navigate to="/" />} </>
  };

  return (
    <main>
      {/*Add props.user back when finished*/}
      <>
        {(!loadingMenu && !home) && (<OnBoarding LoadingScreenLoadedReload={props.LoadingScreenLoadedReload} setAuth={props.setAuth} user={props.user} LoadingScreenClicked={LoadingScreenClicked} />
        )}
      </>
      {(loadingMenu && !home) && (
        <LoadingScreen
          loadingScreen={loadingMenu}
          LoadingScreenClicked={LoadingScreenClicked}
        />
      )}
    
      {(!loadingMenu && home) && (
         <LandingPage/>
      )}
      {/*If User is not new direct User to Haven HomePage Automactically*/}
    </main>
  );
};

export default AppContents;
