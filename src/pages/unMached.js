import React from "react";
import { Link } from "react-router-dom";
import "./unMached.css";
import FilterMenu from "../components/filtermenu";

function UnMached() {
  // Get url pathname to use as search value
  const urlPathname = window.location.pathname;
  var rx = /[^/](.*)/g;
  var arr = rx.exec(urlPathname);
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
            <Link to="/about"> about </Link>
            <Link to="/works"> works </Link>
            <Link to="/social"> social </Link>
            <Link to="/writing"> writing </Link>
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
