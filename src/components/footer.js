import React, {useState} from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { byIso } from "country-code-lookup";

const Footer = () => {
  const defCountry = "Earth"
  const [country, setCountry] = useState(defCountry);

  (async () => {
    if (country == defCountry){
      const response = await fetch("https://api.country.is/");
      if (response.status == 200){
        const data = await response.json();
        setCountry(byIso(data.country).country);
      }
    }
  })();

  return (
    <footer className="footer">
    <div className="country">{country}</div>
    <div className="footer-links">
      <div className="footer-links-section">
        <Link to="/about"> About </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/blog"> Blog</Link>
        <a href="mailto:ping@ra101.dev"> Email </a>
      </div>
      <div className="footer-links-section">
        <a href="https://github.com/ra101"> GitHub </a>
        <a href="https://www.linkedin.com/in/agarwal-parth/"> LinkedIn </a>
        <a href="mailto:ping@ra101.dev"> Email </a>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
