import React from "react";
import Artist from "./artist";

const Results_Artists = (props) => {
  let values;
  try {
    values = props.data.map((item) => (
      <Artist
        key={item.id}
        name={item.artist.name}
        picture={item.artist.picture_small}
      />
    ));
  } catch (err) {
    values = "";
  }

  return <div>{values}</div>;
};

export default Results_Artists;
