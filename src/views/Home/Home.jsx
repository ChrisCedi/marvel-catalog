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
      <Grid container spacing={6}>
        {hola.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <CharacterCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
