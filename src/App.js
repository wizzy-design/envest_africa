// Global Style
import GlobalStyle from "../src/component/GlobalStyle";
// Component & Pages
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import JoinPage from "./Pages/JoinPage";
import ExplorePage from "./Pages/ExplorePage";

//Router
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div>
      <GlobalStyle />

      {/* Router that navigates pages */}
      <Routes location={location} key={location.pathname}>
        <Route path="/envest_africa" exact element={<LandingPage />} />
        {/* <Route path="/aboutus" exact element={<AboutUs />} /> */}
          <Route path="/explore" exact element={<ExplorePage />} /> 
        <Route path="/signup" exact element={<JoinPage />} />
        <Route path="/login" exact element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
