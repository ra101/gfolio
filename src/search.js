import "./styles.css";
import "./search.css";
import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import Layout from "./components/layout";
import AllResults from "./pages/allResults";
import About from "./pages/about";
import Works from "./pages/works";
import Writing from "./pages/writing";
import Social from "./pages/social";
import ProjectsPage from "./pages/projectsPage";
import ImagesPage from "./pages/imagesPage";
import BlogPage from "./pages/blogPage";
import UnMached from "./pages/unMached";


export default function Search() {
  const searchQuery = new URLSearchParams(
    useLocation().search
  ).get('q');

  if (!searchQuery){
    return <Redirect to="/" />
  }

  const getIntend = (ip)=>{return ip}
  const intend = getIntend(searchQuery)

  switch(intend) {
    case "all":
      return <Layout><AllResults /></Layout>
    case "about":
      return <Layout><About /></Layout>
    case "works":
      return <Layout><Works /></Layout>
    case "writing":
      return <Layout><Writing /></Layout>
    case "social":
      return <Layout><Social /></Layout>
    case "projects":
      return <Layout><ProjectsPage /></Layout>
    case "images":
      return <Layout><ImagesPage /></Layout>
    case "blog":
      return <Layout><BlogPage /></Layout>
    default:
      return <Layout><UnMached /></Layout>
  }
}
