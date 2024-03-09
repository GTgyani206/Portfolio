import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Education from "./Components/Education";
import Certification from "./Components/Certification";
import Projects from "./Components/Projects";

import "./styles.css";
const siteProps = {
  name: "Gyanendra Thakur",
  title: "Web Designer & Competitive Programmer",
  email: "gyanendrathakur4135stella@gmail.com",
  gitHub: "@GTgyani206",
  instagram: "@GTgyani_206",
  linkedIn: "@gyanendrathakur",
  medium: "",
  twitter: "@gyanendra24005",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Education />
      <Certification />
      <Projects />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
