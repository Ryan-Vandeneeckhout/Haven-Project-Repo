import AppContents from "../AppContents";
import LandingPage from "../components/pages/LandingPage";

const AuthContext = (props) => {
  return (
    <>
      {props.user ? (
        <LandingPage />
      ) : (
          <AppContents LoadingScreenLoadedReload={props.LoadingScreenLoadedReload} setAuth={props.setAuth} user={props.user} />
      )}
    </>
  );
};
export default AuthContext;
