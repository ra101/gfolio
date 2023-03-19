import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import "./projectsPage.css";
import FilterMenu from "../components/filtermenu";


export default function ProjectsPage() {

  const startOffset = new URLSearchParams(
    useLocation().search
  ).get('start');

  const [repoData, setRepoData] = useState([]);
  // https://api.github.com/users/ra101/repos?per_page=1000
  // https://opengraph.githubassets.com/0/ra101/kissSolver

  // console.log(repoData);

  (async () => {
    if (!repoData.length){
      const response = await fetch("https://api.github.com/users/ra101/repos?per_page=1000");
      if (response.status == 200){
        const data = await response.json();
        setRepoData(data);
      }
    }
  })();

  // startOffset

  return (
    <div className="main">
            <FilterMenu />
      <div className="all-results-container">
        <p className="result-count">
          About {repoData.length} results (0.84 seconds)
        </p>
        <div className="projects-content">
          {repoData.map((item) => (
            <div className="projects-card">
              <a href={`${item.html_url}`} className="project-link">
                <p> {`${item.html_url}`} </p>
                <h3>{`${item.name}${item.description?" - " + item.description:""}`}</h3>
              </a>
              <div className="projects-details">
                <div className="projects-img-container">
                  <img src={
                    "https://opengraph.githubassets.com/0/ra101/" + item.name
                    } alt={item.name} />
                </div>
                <div className="projects-text-container">
                  <p className="projects-excerpt">{`${item.description}`}</p>
                  <p className="projects-tools">{`${item.language}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
