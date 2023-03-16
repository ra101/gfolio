import React from "react";
import { Content } from "../data/content";
import AllResultsCard from "../components/allResultsCard";
;
import FilterMenu from "../components/filtermenu";

function Writing() {
  // https://dev.to/api/articles?username=ra101&per_page=1000
  const writing = Content.filter((item) => item.category === "writing");
  return (
    <div className="main">
            <FilterMenu />
      <div className="all-results-container">
        <p className="result-count">
          About {writing.length} results (0.43 seconds)
        </p>
        <AllResultsCard results={writing} />
      </div>
    </div>
  );
}
export default Writing;
