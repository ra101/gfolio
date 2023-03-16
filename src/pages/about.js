import React, { useState } from "react";
import { Content } from "../data/content";
import { StrictMode } from "react";
import Layout from "../components/header";
import AllResultsCard from "../components/allResultsCard";
import Header from "../components/header";
import Footer from "../components/footer";
import FilterMenu from "../components/filtermenu";

function About() {
  const about = Content.filter((item) => item.category === "about");
  return (
    <div className="main">
      <FilterMenu />
      <div className="all-results-container">
        <p className="result-count">
          About {about.length} results (0.43 seconds)
        </p>
        <AllResultsCard results={about} />
      </div>
    </div>
  );
}
export default About;
