import "./App.css";
// import AboutUs from "./Components/AboutUs";
// import { AdvanceAI } from "./Components/AdvanceAI";
// import Animation from "./Components/Animation";
// import HeroSection from "./Components/HeroSection";
// import ImageDesign from "./Components/ImageDesign";
// import ImageSlider from "./Components/ImageSlider";
// import { ImagesNFTs } from "./Components/ImagesNFTs";
// import VoiceExperience from "./Components/VoiceExperience";
// import Buttons from "./Components/Buttons";
// import { Features } from "./Components/Features";
// import Pricing from "./Components/Pricing";
// import SocialSpehere from "./Components/SocialSpehere";
// import FAQ from "./Components/FAQ";
// import Footer from "./Components/Footer";
// import Header from "./Components/Header";
import { AllComponents } from "./Components/ALLComponents";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllComponents />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
