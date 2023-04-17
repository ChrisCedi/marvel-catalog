import React, { useState } from "react";
import { MarvelContext } from "./MarvelContext";
import { marvelApi } from "../../api/marvelApi";
import { mapCharacters, mapCharacterInfo, mapComics } from "./helpers";

export const MarvelProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [characterInfo, setCharacterInfo] = useState({});
  const [comicList, setComicList] = useState([]);

  const getCharacters = async (props) => {
    if (props) {
      const response = await marvelApi.get(
        `characters?limit=${9}&nameStartsWith=${props}&ts=3&apikey=717fc2d7beae7cd0e3c30ad545d2597a&hash=0c65084a88fbfc7fb9b477ffea85b1a8`
      );
      setCharacters(mapCharacters(response.data.data.results));
    } else {
      const response = await marvelApi.get(
        `characters?limit=${9}&ts=3&apikey=717fc2d7beae7cd0e3c30ad545d2597a&hash=0c65084a88fbfc7fb9b477ffea85b1a8`
      );
      setCharacters(mapCharacters(response.data.data.results));
    }
  };

  const getCharacterById = async (id) => {
    const response = await marvelApi.get(
      `characters/${id}?ts=3&apikey=717fc2d7beae7cd0e3c30ad545d2597a&hash=0c65084a88fbfc7fb9b477ffea85b1a8`
    );

    setCharacterInfo(mapCharacterInfo(response.data.data.results));
  };

  const getComics = async (id) => {
    const response = await marvelApi.get(
      `characters/${id}/comics?ts=3&apikey=717fc2d7beae7cd0e3c30ad545d2597a&hash=0c65084a88fbfc7fb9b477ffea85b1a8`
    );

    setComicList(mapComics(response.data.data.results));
  };

  const contextValues = {
    characters,
    searchValue,
    characterInfo,
    comicList,
    setSearchValue,
    getCharacters,
    getCharacterById,
    getComics,
  };

  return (
    <MarvelContext.Provider value={contextValues}>
      {children}
    </MarvelContext.Provider>
  );
};
