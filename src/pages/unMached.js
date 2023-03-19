import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./unMached.css";
import FilterMenu from "../components/filtermenu";

function UnMached() {
  // Get url pathname to use as search value
  const urlPathname = new URLSearchParams(useLocation().search);
  var rx = /[^/](.*)/g;
  var arr = rx.exec(urlPathname.get('q'));
  let val = " ";
  if (arr) {
    val = arr[0];
  }

  return (
    <div className="main">
            <FilterMenu />
      <div className="all-results-container unmached-page">
        <div className="suggest">
          <p> Did you mean: </p>
          <div className="suggestions">
            <Link to="/search/?q=all"> all </Link>
            <Link to="/search/?q=about"> about </Link>
            <Link to="/search/?q=projects"> projects </Link>
            <Link to="/search/?q=social"> social </Link>
            <Link to="/search/?q=blogs"> blogs </Link>
          </div>
        </div>
        <div className="unmached-details">
          <p> No results containing all your search terms were found.</p>
          <p>
            {" "}
            Your search - <b> {decodeURI(val)} </b> - did not match any documents.
          </p>
          <p> Suggestions: </p>
          <ul>
            <li>Try a different keyword from the search dropdown</li>
            <li>Make sure that all words are spelled correctly.</li>
            <li>Click one of the links from the suggestions or menu above</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default UnMached;
