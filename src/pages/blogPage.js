import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import "./blogPage.css";
import FilterMenu from "../components/filtermenu";


const BlogPage = () => {

  const startOffset = new URLSearchParams(
    useLocation().search
  ).get('start');

  const [blogData, setBlogData] = useState([]);
  const [resTime, setResTime] = useState(0);
  const weight = (i)=> {return (i.positive_reactions_count)}

  // https://dev.to/api/articles?username=ra101&per_page=1000

  (async () => {
    if (!blogData.length){
      const start = window.performance.now();
      const response = await fetch("https://dev.to/api/articles?username=ra101&per_page=1000");
      if (response.status == 200){
        const data = await response.json();
        data.sort((a,b) => { return weight(b) - weight(a)});
        setBlogData(data);
        setResTime(parseInt(window.performance.now() - start))
      }
    }
  })();

  // startOffset


  return (
    <div className="main">
            <FilterMenu />
      <div className="all-results-container blogpage-container">
        <p className="result-count">
          About {blogData.length} results ({resTime/1000} seconds)
        </p>
        <div className="blog-content">
          {blogData.map((item) => (
            <a href={item.url} className="blog-card">
              <div className="blog-text-container">
                <div className="category">
                  <img src={`${item.icon}`} className="blog-icon"/>
                  <p> {`${item.category}`} </p>
                </div>
                <h3>{`${item.title}`}</h3>
                <p className="blog-excerpt">{`${item.description}`}</p>
                <p className="blog-date">{`${item.readable_publish_date}`}</p>
              </div>
              <div className="blog-img-container">
                <img src={item.cover_image} alt={item.name} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
