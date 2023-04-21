import React, { useEffect } from "react";
import { useStyles } from "./HomeStyles";
import { Typography, Grid, Box, Button } from "@material-ui/core";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import { useMarvel } from "../../components/MarvelProvider/hooks/useMarvel";
import Pagination from "@material-ui/lab/Pagination";
import { Images } from "../../assets/Images";

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
    getCharacters(searchValue);
  }, [page]);

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
              localStorage.removeItem("searchValue");
            }}
            color="secondary"
            variant="contained"
          >
            see all
          </Button>
        </Box>
      )}

      <Grid container spacing={4}>
        {charactersList.characters?.length === 0 ? (
          <Box className={classes.boxProgress}>
            <img
              src={Images.spidermanEmpty}
              alt="spEmpty"
              className={classes.spEmpty}
            />
            <Typography>No results</Typography>
          </Box>
        ) : (
          charactersList.characters?.map((character, index) => (
            <Grid item xs={12} sm={6} key={index} className={classes.gridCards}>
              <CharacterCard character={character} />
            </Grid>
          ))
        )}
      </Grid>
      {searchValue ? null : (
        <Grid className={classes.gridPagination}>
          <Pagination
            count={Math.round(charactersList.total / 10)}
            color="primary"
            page={page}
            onChange={nextPage}
            size="small"
          />
        </Grid>
      )}
    </div>
  );
};
