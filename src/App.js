import Nav from "./component/Nav";
import GlobalStyle from "../src/component/GlobalStyle";
import LandingPage from "./Pages/LandingPage";
import Footer from "../src/component/Footer";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
