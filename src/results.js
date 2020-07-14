import React, { useState } from "react";
import { Link } from "react-router-dom";

import ResultSongs from "./results_songs";
import ResultAlbums from "./results_albums";
import ResultArtists from "./results_artists";

import "./CSS/results.css";

const Results = (props) => {
  const [results, setResults] = useState(props.location.state);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState("Songs");

  const updateSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const updateResults = (e) => {
    e.preventDefault();
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchTerm}`, {
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "491f353b91msh4d6e560099cab14p16dc45jsn2ebbe77bc738",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setResults(data.data);
      });
  };

  const updatePage_songs = () => {
    setPage("Songs");
  };
  const updatePage_artists = () => {
    setPage("Artists");
  };
  const updatePage_albums = () => {
    setPage("Albums");
  };

  let currentPage;
  if (page === "Songs") {
    currentPage = <ResultSongs data={results} />;
  } else if (page === "Albums") {
    currentPage = <ResultAlbums data={results} />;
  } else if (page === "Artists") {
    currentPage = <ResultArtists data={results} />;
  }
  return (
    <div>
      <div className="Result-search-bar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 id="Logo_resultPage">MUSIQ</h1>
        </Link>
        <form onSubmit={updateResults}>
          <input
            required
            id="result_input"
            type="text"
            placeholder="Artist,Album,Song..."
            onChange={updateSearch}
          />
          <button id="result_submit">Search</button>
        </form>
      </div>
      <div className="spacer"></div>
      <div className="results-heading">
        <a
          onClick={updatePage_songs}
          href="#"
          style={{ textDecoration: "none" }}
        >
          <h1 id="subheading">Songs</h1>
        </a>
        <a
          onClick={updatePage_artists}
          href="#"
          style={{ textDecoration: "none" }}
        >
          <h1 id="subheading">Artists</h1>
        </a>
        <a
          onClick={updatePage_albums}
          href="#"
          style={{ textDecoration: "none" }}
        >
          <h1 id="subheading">Albums</h1>
        </a>
      </div>
      <div id="info">{currentPage}</div>
    </div>
  );
};

export default Results;
