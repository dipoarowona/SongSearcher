import React from "react";
import "./CSS/everythingelse.css";
import DefaultArt from "./CSS/default.svg";
const Song = (props) => {
  let cover;
  if (props.picture == null) {
    cover = <DefaultArt />;
  } else {
    cover = props.picture;
  }

  return (
    <div id="song">
      <div className="song-content">
        <img alt="" src={cover} />
        <h1 className="artist-title">{props.name}</h1>
      </div>
    </div>
  );
};

export default Song;
