import React from "react";
import Song from "./Song";

const Results_Songs = (props) => {
  let values;
  try {
    values = props.data.map((item) => (
      <Song
        key={item.id}
        title={item.title}
        artist={item.artist.name}
        album={item.album.title}
        explicit={item.explicit_lyrics}
        length={item.duration}
        cover={item.album.cover_small}
      />
    ));
  } catch (err) {
    values = "";
  }

  return <div>{values}</div>;
};

export default Results_Songs;
