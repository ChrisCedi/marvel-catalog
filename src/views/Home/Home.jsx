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
    charactersList,
    getCharacters,
    searchValue,
    setSearchValue,
    setInputValue,
    nextPage,
    page,
  } = useMarvel();

  useEffect(() => {
    getCharacters();
  }, [page]);

  console.log("total", charactersList.total);

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
        {charactersList.characters?.length === 0 ? (
          <Box className={classes.boxProgress}>
            {charactersList.count > 0 ? (
              <CircularProgress />
            ) : (
              <Typography>No results</Typography>
            )}
          </Box>
        ) : (
          charactersList.characters?.map((character, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <CharacterCard character={character} />
            </Grid>
          ))
        )}
      </Grid>
      <Grid className={classes.gridPagination}>
        <Pagination
          count={charactersList.total > 10 ? charactersList.total / 10 : 0}
          color="primary"
          page={page}
          onChange={nextPage}
        />
      </Grid>
    </div>
  );
};
