import "./filtermenu.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faImage,
  faNewspaper,
  faMapMarkerAlt,
  faBriefcase
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const FilterMenu = () => {


  return (
    <div className="filter-menu">
      <div className="filter-menu-items">
        <NavLink
          className="filter-menu-item"
          to="/search/?q=all"
          activeClassName="item-active"
        >
          <FontAwesomeIcon className="icon" icon={faSearch} />
          <span> All </span>
        </NavLink>
        <NavLink
          to="/search/?q=projects"
          activeClassName="item-active"
          className="filter-menu-item fmi"
        >
          <FontAwesomeIcon className="icon" icon={faBriefcase} />
          <span> Projects </span>
        </NavLink>
        <NavLink
          className="filter-menu-item fmi"
          to="/search/?q=images"
          activeClassName="item-active"
        >
          <FontAwesomeIcon className="icon" icon={faImage} />
          <span> Images </span>
        </NavLink>
        <NavLink
          className="filter-menu-item fmi"
          to="/search/?q=blog"
          activeClassName="item-active"
        >
          <FontAwesomeIcon className="icon" icon={faNewspaper} />
          <span> News </span>
        </NavLink>
        {/* <NavLink
          className="filter-menu-item"
          exact
          to="/maps"
          activeClassName="item-active"
        >
          <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
          <span> Maps </span>
        </NavLink> */}
      </div>
    </div>
  );
};

export default FilterMenu;
