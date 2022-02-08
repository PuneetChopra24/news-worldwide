import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container">
        <h2>News Worldwide - Top Headlines</h2>
        <div className="row">
          <div className="col md-4">
            <NewsItem title="Sports" description="cricket" />
          </div>
          <div className="col md-4">
            <NewsItem title="Sports" description="cricket" />
          </div>
          <div className="col md-4">
            <NewsItem title="Sports" description="cricket" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
