import React from "react";
import { Content } from "../data/content";
import AllResultsCard from "../components/allResultsCard";
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
