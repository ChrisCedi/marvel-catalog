import React, { useEffect } from "react";
import { useStyles } from "./HomeStyles";
import { Typography, Grid, CircularProgress, Box } from "@material-ui/core";
import { CharacterCard } from "../../components/CharacterCard";
import { useMarvel } from "../../components/MarvelProvider/hooks/useMarvel";

export const Home = () => {
  const classes = useStyles();
  const { characters, getCharacters } = useMarvel();

  useEffect(() => {
    getCharacters();
  });

  console.log(characters);

  return (
    <div>
      <Typography variant="h3" className={classes.title}>
        Personajes
      </Typography>

      <Grid container spacing={6}>
        {characters.length === 0 ? (
          <Box className={classes.boxProgress}>
            <CircularProgress />
          </Box>
        ) : (
          characters.map((character, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CharacterCard character={character} />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};
