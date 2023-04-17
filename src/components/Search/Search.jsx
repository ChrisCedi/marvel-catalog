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
    window.scroll(0, 0);
    localStorage.setItem("searchValue", inputValue);
  };

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={9} className={classes.gridField}>
          <TextField
            variant="outlined"
            label="Search character"
            placeholder="Example: hulk"
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
