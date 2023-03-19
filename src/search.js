import "./styles.css";
import "./search.css";
import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import Layout from "./components/layout";
import AllResults from "./pages/allResults";
import About from "./pages/about";
import Socials from "./pages/socials";
import ProjectsPage from "./pages/projectsPage";
import ImagesPage from "./pages/imagesPage";
import BlogPage from "./pages/blogPage";
import UnMached from "./pages/unMached";


export default function Search() {
  const searchParams = new URLSearchParams(useLocation().search);
  const searchQuery = searchParams.get('q')
  const searchIntend = searchParams.get('tbm')

  if (!searchQuery){
    return <Redirect to="/" />
  }

  const intendDict = {
    "all":AllResults,
    "about":About,
    "socials":Socials,
    "projects":ProjectsPage,
    "images":ImagesPage,
    "blog":BlogPage,
    "unmatched":UnMached,
  }
  const getIntend = (ip)=>{return intendDict[ip] || UnMached }

  return <Layout children={getIntend(searchQuery)()}/>
}
