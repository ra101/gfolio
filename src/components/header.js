import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Logo from "./logo";
import TopSearchBox from "./topSearchbox";
import BoxMenuDrop from "./boxmenudrop";
import ProfileMenuDrop from "./profilemenudrop";
import { useLocation } from "react-router-dom";


const Header = () => {
  const isHome = useLocation().pathname == ("/")

  return (
    <div className="menu">
      {(()=>{
      if(!isHome){
        return (
        <div className="menu-section">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo />
          </Link>
          <div className="topmenu-menu-search menu-search">
            <TopSearchBox />
          </div>
        </div>
      )}})()}
      <div className={isHome?"menu-home menu-section":"menu-section"}>
      <div className="top-menu">
        <span className="top-menu-item no-show-mobile">
          {" "}
          <a href="mailto:ping@ra101.dev"> Email </a>
        </span>
        <span className="top-menu-item no-show-mobile">
          {" "}
          <a href="https://github.com/ra101"> GitHub </a>
        </span>
        <BoxMenuDrop />
        <ProfileMenuDrop />
      </div>
      </div>
    </div>
  );
};

export default Header;
