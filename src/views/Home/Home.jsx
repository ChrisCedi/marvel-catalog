import React from "react";
import { useStyles } from "./HomeStyles";
import { Typography, Grid } from "@material-ui/core";
import { CharacterCard } from "../../components/CharacterCard";

export const Home = () => {
  const classes = useStyles();

  const hola = [1, 2, 3, 4, 2];

  return (
    <div>
      <Typography variant="h3" className={classes.title}>
        Personajes
      </Typography>
      <Grid container spacing={2}>
        {hola.map((item, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <CharacterCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
