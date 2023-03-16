import React from "react";
import FilterMenu from "../components/filtermenu";
import All from "../components/all";

function AllResults() {
  return (
    <div className="main">
            <FilterMenu />
      <div className="all-container">
        <All />
      </div>
    </div>
  );
}
export default AllResults;
