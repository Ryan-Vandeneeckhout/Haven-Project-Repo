import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.js";
import "../../sass/_navUpperSite.scss";

const LandingPage = () => {
  return (
    <>
      <BrowserRouter>
        <nav className="upperSite">
          <button className="fitlerMenu">Fitler</button>
          <h1>Haven</h1>
          <Link to="/profile">Profile</Link>
        </nav>
        <Routes>
          <Route extact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default LandingPage;
