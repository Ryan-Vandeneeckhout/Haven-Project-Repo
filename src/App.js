import "./App.scss";
import "./sass/_setup.scss";
import React, { useState, useEffect } from "react";
import AuthContext from "./context/AuthContext.jsx";
import LoadingScreen from "./LoadingScreen.jsx";
import Home from "./components/pages/Home";

function App() {
  const [loadingScreenInView, setLoadingScreenInView] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const LoadingScreenLoaded = () => {
    setTimeout(function () {
      setLoadingScreenInView(false);
    }, 4000);
  };

  const setAuth = (boolean) => {

    setIsAuthenticated(boolean);

  };

  const LoadingScreenLoadedReload = () => {
    setLoadingScreenInView(true);
    setTimeout(function () {
      setLoadingScreenInView(false);
    }, 4000);
  };
  const isAuth = async () => {
    try {
      const response = await fetch(
        "https://haven-nodejs.herokuapp.com/auth/is-verified",
        {
          method: "GET",
          headers: { token: localStorage.token },
        }
      );

      const parseRes = await response.json();
        parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    isAuth();
  }, []);

  return (
    <div className="App">
      <>
        {loadingScreenInView ? (
          <LoadingScreen />
        ) : (
            <AuthContext LoadingScreenLoadedReload={LoadingScreenLoadedReload} setAuth={setAuth} user={isAuthenticated} />
        )}
        {LoadingScreenLoaded()}

        {/* {<Home />} */}
      </>
    </div>
  );
}

export default App;
