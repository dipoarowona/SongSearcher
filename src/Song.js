import React from "react";
import "./CSS/everythingelse.css";
const Song = (props) => {
  return (
    <div id="song">
      <img src={props.cover} w="65" h="65" />
      <h1>{props.title}</h1>
      <h1>{props.artist}</h1>
      <h1>{props.album}</h1>
      <h1>{props.length}</h1>
    </div>
  );
};

export default Song;
