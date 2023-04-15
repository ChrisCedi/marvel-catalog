import React, { useState } from "react";
import { MarvelContext } from "./MarvelContext";
import { marvelApi } from "../../api/marvelApi";
import { mapCharacters } from "./helpers";

export const MarvelProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [url, setUrl] = useState(
    `characters?limit=${9}&ts=3&apikey=717fc2d7beae7cd0e3c30ad545d2597a&hash=0c65084a88fbfc7fb9b477ffea85b1a8`
  );

  const getCharacters = async (props) => {
    if (props) {
      setUrl(
        `characters?limit=${9}&page=3&nameStartsWith=${props}&ts=3&apikey=717fc2d7beae7cd0e3c30ad545d2597a&hash=0c65084a88fbfc7fb9b477ffea85b1a8`
      );
    } else {
      setUrl(
        `characters?limit=${9}&page=3&ts=3&apikey=717fc2d7beae7cd0e3c30ad545d2597a&hash=0c65084a88fbfc7fb9b477ffea85b1a8`
      );
    }

    const response = await marvelApi.get(url);

    setCharacters(mapCharacters(response.data.data.results));
  };

  const getCharacterById = () => {};

  const contextValues = {
    characters,
    searchValue,
    setSearchValue,
    getCharacters,
  };

  return (
    <MarvelContext.Provider value={contextValues}>
      {children}
    </MarvelContext.Provider>
  );
};
