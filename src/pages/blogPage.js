import React from "react";
import { BlogContent } from "../data/blogContent";
import "./blogPage.css";
import FilterMenu from "../components/filtermenu";

const BlogPage = ({ results }) => {
  return (
    <div className="main">
            <FilterMenu />
      <div className="all-results-container blogpage-container">
        <p className="result-count">
          About {BlogContent.length} results (0.84 seconds)
        </p>
        <div className="blog-content">
          {BlogContent.map((item) => (
            <a href={item.link} className="blog-card">
              <div className="blog-text-container">
                <div className="category">
                  <img src={`${item.icon}`} className="blog-icon"/>
                  <p> {`${item.category}`} </p>
                </div>
                <h3>{`${item.name}`}</h3>
                <p className="blog-excerpt">{`${item.excerpt}`}</p>
                <p className="blog-date">{`${item.date}`}</p>
              </div>
              <div className="blog-img-container">
                <img src={item.img} alt={item.name} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
