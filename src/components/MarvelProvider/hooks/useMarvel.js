import { useContext } from "react";
import { MarvelContext } from "../MarvelContext";

export const useMarvel = () => useContext(MarvelContext);
