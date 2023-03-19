import React from "react";
import { Content } from "../data/content";
import AllResultsCard from "../components/allResultsCard";
import FilterMenu from "../components/filtermenu";

function Works() {
  // https://api.github.com/users/ra101/repos?per_page=1000
  // https://opengraph.githubassets.com/0/ra101/kissSolver
  const works = Content.filter((item) => item.category === "works");
  return (
    <div className="main">
            <FilterMenu />
      <div className="all-results-container">
        <p className="result-count">
          About {works.length} results (0.43 seconds)
        </p>
        <AllResultsCard results={works} />
      </div>
    </div>
  );
}
export default Works;
