import "./filtermenu.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faNewspaper,
  faMapMarkerAlt,
  faBriefcase,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const FilterMenu = () => {


  return (
    <div className="filter-menu">
      <div className="filter-menu-items">
        <NavLink
          className="filter-menu-item"
          to="/search/?q=all"
        >
          <FontAwesomeIcon className="icon" icon={faSearch} />
          <span> All </span>
        </NavLink>
        <NavLink
          to="/search/?q=projects"
          className="filter-menu-item fmi"
        >
          <FontAwesomeIcon className="icon" icon={faBriefcase} />
          <span> Projects </span>
        </NavLink>
        <NavLink
          className="filter-menu-item fmi"
          to="/search/?q=images"
        >
          <FontAwesomeIcon className="icon" icon={faVideo} />
          <span> Videos </span>
        </NavLink>
        <NavLink
          className="filter-menu-item fmi"
          to="/search/?q=blog"
        >
          <FontAwesomeIcon className="icon" icon={faNewspaper} />
          <span> News </span>
        </NavLink>
        <NavLink
          className="filter-menu-item fmi"
          to="/search/?q=social"
        >
          <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
          <span> Maps </span>
        </NavLink>
      </div>
    </div>
  );
};

export default FilterMenu;
