import React from "react";
import { useStyles } from "./SearchStyles";
import { TextField, Button, Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useMarvel } from "../MarvelProvider/hooks/useMarvel";

export const Search = () => {
  const classes = useStyles();
  const { getCharacters, setSearchValue, inputValue, setInputValue } =
    useMarvel();

  const handleSubmit = () => {
    setSearchValue(inputValue);
    getCharacters(inputValue);
  };

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={9} className={classes.gridField}>
          <TextField
            variant="outlined"
            label="Buscar personaje"
            placeholder="Ej. hulk"
            size="small"
            className={classes.field}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Button color="primary" variant="contained" onClick={handleSubmit}>
            <SearchIcon />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
