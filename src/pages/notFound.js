import React from "react";
import Logo from "../components/logo";
import { Link, useLocation } from "react-router-dom";
import nfBot from "../images/notfound.png"
import "./notFound.css"

function NotFound() {
  return (
    <div className="nf-grid">
    <div className="nf-grid-col1">
      <Link to="/" style={{ textDecoration: "none", fontSize: "1rem"}}>
          <Logo />
      </Link>

      <div><b>404.</b><span className="gray"> That’s an error.</span><br /><br />
        <span>The requested URL {useLocation().pathname} was not found on this server.</span>
        <span className="gray"> That’s all we know.</span>
      </div>
    </div>
    <div className="nf-grid-col2">
      <img src={nfBot} />
    </div>
    </div>
    );
}
export default NotFound;
