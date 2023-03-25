import "./profilemenudrop.css";
import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const ProfileMenuDrop = () => {
  const [isProfileActive, setProfileActive] = useState("false");
  // Toggle the dropdown
  const handleToggle = () => {
    setProfileActive(!isProfileActive);
  };

   // Hide the dropdown when user clicks outside the element
  function useOutsideHandler(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target.parentElement)) {
          setProfileActive(!!isProfileActive);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperProfileRef = useRef(null);
  useOutsideHandler(wrapperProfileRef);

  return (
    <div
      className="profile dropdown"
      onClick={handleToggle}
      ref={wrapperProfileRef}
    >
      <img
        className="profile-pic dropbtn"
        src="https://avatars.githubusercontent.com/u/34714949?v=4"
        alt="profile"
      />
      <div className="profile-highlight-dropdown">
        <p> Portfolio Website </p>
        <p> Parth Agarwal </p>
        <p> ping@ra101.dev </p>
      </div>
      <div
        className={
          isProfileActive
            ? "profile-details-dropdown dropdown-hide"
            : "profile-details-dropdown dropdown-show"
        }
      >
        <div className="first-detail">
          <img
            className=""
            src="https://avatars.githubusercontent.com/u/34714949?v=4"
            alt="profile"
          />
          <p className="detail-text"> Parth Agarwal </p>
          <p className="detail-text"> ping@ra101.dev </p>
          <a href="https://ra101.dev"> View Another Website Design </a>
        </div>
        <Link className="second-detail" to="/search/?q=about">
          <FontAwesomeIcon className="fa-user-plus" icon={faUserPlus} />
          <p> More about me </p>
        </Link>
        <div className="third-detail">
          <a href="https://github.com/ra101"> GitHub</a>
        </div>
        <div className="fourth-detail">
          <a href="https://github.com/ra101/gfolio"> Source Code </a> <span> • </span>
          <Link to="/search/?q=blog"> Blog & News </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenuDrop;
