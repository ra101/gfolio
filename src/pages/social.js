import React from "react";
import { Content } from "../data/content";
import AllResultsCard from "../components/allResultsCard";
import FilterMenu from "../components/filtermenu";

function Social() {
  const contact = Content.filter((item) => item.category === "social");
  return (
    <div className="main">
            <FilterMenu />
      <div className="all-results-container">
        <p className="result-count">
          About {contact.length} results (0.57 seconds)
        </p>
        <AllResultsCard results={contact} />
      </div>
    </div>
  );
}
export default Social;
