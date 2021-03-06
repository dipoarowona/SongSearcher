import React from "react";
import "./CSS/everythingelse.css";
import DefaultArt from "./CSS/default.svg";
const Song = (props) => {
  let cover;
  if (props.cover == null) {
    cover = <DefaultArt />;
  } else {
    cover = props.cover;
  }

  return (
    <div id="song">
      <div className="song-content">
        <img alt="" src={cover} />
        <h1 className="song-title">{props.title}</h1>
        <h1 id="song-artist">{props.artist}</h1>
        <h1 id="song-album">{props.album}</h1>
        <h1 id="song-length">{props.length}</h1>
      </div>
    </div>
  );
};

export default Song;
