import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  let history = useHistory();
  const searchRequest = (e) => {
    e.preventDefault();
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchTerm}`, {
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "491f353b91msh4d6e560099cab14p16dc45jsn2ebbe77bc738",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        history.push("/results", data.data);
      });
  };

  const updateSeach = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div id="search">
      <h1 id="landing-text">MUSIQ</h1>
      <form onSubmit={searchRequest}>
        <input
          type="text"
          placeholder="Artist,Album,Song..."
          onChange={updateSeach}
          required
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
