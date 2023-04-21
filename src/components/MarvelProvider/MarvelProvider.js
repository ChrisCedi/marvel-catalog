import React, { useState } from "react";
import { MarvelContext } from "./MarvelContext";
import { marvelApi } from "../../api/marvelApi";
import { mapCharacters, mapCharacterInfo, mapComics } from "./helpers";
import { PUBLIC_KEY, PRIVATE_KEY } from "../../api/config";
import { MD5 } from "crypto-js";

export const MarvelProvider = ({ children }) => {
  const [charactersList, setCharactersList] = useState([]);
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem("searchValue")
      ? localStorage.getItem("searchValue")
      : ""
  );
  const [characterInfo, setCharacterInfo] = useState({});
  const [inputValue, setInputValue] = useState(
    localStorage.getItem("searchValue")
      ? localStorage.getItem("searchValue")
      : ""
  );
  const [comicList, setComicList] = useState([]);
  const [page, setPage] = useState(
    localStorage.getItem("page") ? parseInt(localStorage.getItem("page")) : 1
  );

  const nextPage = (event, value) => {
    setPage(value);
    localStorage.setItem("page", value);
    window.scroll(0, 0);
  };

  let ts = Date.now().toString();
  let hash = MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();

  const getCharacters = async (props) => {
    if (props) {
      const response = await marvelApi.get(
        `characters?limit=${30}&offset=${0}&nameStartsWith=${props}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
      );
      setCharactersList(mapCharacters(response.data.data));
    } else {
      const response = await marvelApi.get(
        `characters?limit=${10}&offset=${
          (page - 1) * 10
        }&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
      );
      setCharactersList(mapCharacters(response.data.data));
    }
  };

  const getCharacterById = async (id) => {
    const response = await marvelApi.get(
      `characters/${id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
    );

    setCharacterInfo(mapCharacterInfo(response.data.data.results));
  };

  const getComics = async (id) => {
    const response = await marvelApi.get(
      `characters/${id}/comics?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
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
