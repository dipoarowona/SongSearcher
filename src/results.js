import React, { useState } from "react";
import { Link } from "react-router-dom";

import ResultSongs from "./results_songs";
import Song from "./Song";

import "./CSS/results.css";

const Results = (props) => {
  console.log(props.location.state);
  const [results, setResults] = useState(props.location.state);

  const pressed = () => console.log("YO");
  return (
    <div>
      <div className="Result-search-bar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 id="Logo_resultPage">MUSIQ</h1>
        </Link>
        <form action="onSubmit">
          <input
            id="result_input"
            type="text"
            placeholder="Artist,Album,Song..."
          />
          <button id="result_submit">Search</button>
        </form>
      </div>
      <div className="spacer"></div>
      <div className="results-heading">
        <a onClick={pressed} href="#" style={{ textDecoration: "none" }}>
          <h1 id="subheading">Top</h1>
        </a>
        <a onClick={pressed} href="#" style={{ textDecoration: "none" }}>
          <h1 id="subheading">Songs</h1>
        </a>
        <a onClick={pressed} href="#" style={{ textDecoration: "none" }}>
          <h1 id="subheading">Artists</h1>
        </a>
        <a onClick={pressed} href="#" style={{ textDecoration: "none" }}>
          <h1 id="subheading">Albums</h1>
        </a>
      </div>
      <div id="info">
        {results.map((item) => (
          <Song
            key={item.id}
            title={item.title}
            artist={item.artist.name}
            album={item.album.title}
            explicit={item.explicit_lyrics}
            length={item.duration}
            cover={item.album.cover_small}
          />
        ))}
      </div>
    </div>
  );
};

export default Results;
