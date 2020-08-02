import React from "react";
import "./CSS/everythingelse.css";
import DefaultArt from "./CSS/default.svg";
const Album = (props) => {
  let cover;
  if (props.cover == null) {
    cover = <DefaultArt />;
  } else {
    cover = props.cover;
  }

  return (
    <div id="album">
      <div className="song-content">
        <img alt="" src={cover} />
        <h1 className="song-album">{props.album}</h1>
        <h1 className="song-artist">{props.artist}</h1>
      </div>
    </div>
  );
};

export default Album;
