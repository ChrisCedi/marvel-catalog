import React, { useState } from "react";
import { MarvelContext } from "./MarvelContext";
import { marvelApi } from "../../api/marvelApi";
import { mapCharacters } from "./helpers";

export const MarvelProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const response = await marvelApi.get(
      `characters?ts=3&apikey=717fc2d7beae7cd0e3c30ad545d2597a&hash=0c65084a88fbfc7fb9b477ffea85b1a8`
    );

    setCharacters(mapCharacters(response.data.data.results));
  };

  const contextValues = {
    characters,
    getCharacters,
  };
  return (
    <MarvelContext.Provider value={contextValues}>
      {children}
    </MarvelContext.Provider>
  );
};
