import React, { useEffect } from "react";
import { useStyles } from "./HomeStyles";
import {
  Typography,
  Grid,
  CircularProgress,
  Box,
  Button,
} from "@material-ui/core";
import { CharacterCard } from "../../components/CharacterCard";
import { useMarvel } from "../../components/MarvelProvider/hooks/useMarvel";
import Pagination from "@material-ui/lab/Pagination";

export const Home = () => {
  const classes = useStyles();
  const {
    characters,
    getCharacters,
    searchValue,
    setSearchValue,
    setInputValue,
  } = useMarvel();

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      <Typography variant="h3" className={classes.title}>
        Characters
      </Typography>
      {searchValue.length > 0 && (
        <Box className={classes.boxAllFilter}>
          <Button
            onClick={() => {
              setSearchValue("");
              setInputValue("");
              getCharacters();
            }}
            color="secondary"
            variant="contained"
          >
            see all
          </Button>
        </Box>
      )}

      <Grid container spacing={6}>
        {characters.length === 0 ? (
          <Box className={classes.boxProgress}>
            <CircularProgress />
          </Box>
        ) : (
          characters.map((character, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <CharacterCard character={character} />
            </Grid>
          ))
        )}
      </Grid>
      <Grid className={classes.gridPagination}>
        <Pagination count={1560 / 10} color="primary" />
      </Grid>
    </div>
  );
};
