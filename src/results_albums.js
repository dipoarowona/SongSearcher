import React from "react";
import Album from "./album";

const Results_Albums = (props) => {
  let values;
  try {
    values = props.data.map((item) => (
      <Album
        key={item.id}
        artist={item.artist.name}
        album={item.album.title}
        cover={item.album.cover_small}
      />
    ));
  } catch (err) {
    values = "";
  }

  return <div>{values}</div>;
};

export default Results_Albums;
