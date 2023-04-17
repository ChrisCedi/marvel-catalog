import React, { useState } from "react";
import { MarvelContext } from "./MarvelContext";
import { marvelApi } from "../../api/marvelApi";
import { mapCharacters, mapCharacterInfo, mapComics } from "./helpers";

export const MarvelProvider = ({ children }) => {
  const [charactersList, setCharactersList] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const [characterInfo, setCharacterInfo] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [comicList, setComicList] = useState([]);
  const [page, setPage] = useState(1);

  const nextPage = (event, value) => {
    setPage(value);
    window.scroll(0, 0);
  };

  const getCharacters = async (props) => {
    if (props) {
      setPage(0);
      const response = await marvelApi.get(
        `characters?limit=${20}&offset=${
          characterInfo.total > 10 ? charactersList.total / 10 : page
        }&nameStartsWith=${props}&ts=3&apikey=717fc2d7beae7cd0e3c30ad545d2597a&hash=0c65084a88fbfc7fb9b477ffea85b1a8`
      );
      setCharactersList(mapCharacters(response.data.data));
    } else {
      const response = await marvelApi.get(
        `characters?limit=${10}&offset=${
          (page - 1) * 10
        }&ts=3&apikey=717fc2d7beae7cd0e3c30ad545d2597a&hash=0c65084a88fbfc7fb9b477ffea85b1a8`
      );
      setCharactersList(mapCharacters(response.data.data));
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
    charactersList,
    searchValue,
    characterInfo,
    comicList,
    inputValue,
    page,
    setInputValue,
    setSearchValue,
    getCharacters,
    getCharacterById,
    getComics,
    nextPage,
  };

  return (
    <MarvelContext.Provider value={contextValues}>
      {children}
    </MarvelContext.Provider>
  );
};
