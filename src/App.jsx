import "./App.css";
import Hero from "./Components/Hero";
import Header from "./Components/Header.jsx";
import Companies from "./Components/Companies";
import Residencies from "./Components/Residencies";
import Value from "./Components/Value";
import Contact from "./Components/Contact";
import GetStarted from "./Components/GetStarted";

import Footer from "./Components/Footer";
function App() {
  return (
    <div className="app">
      <div>
        <div className="white_gradiant" />
        <Header />
        <Hero />
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>

    </div>
  );
}

export default App;
