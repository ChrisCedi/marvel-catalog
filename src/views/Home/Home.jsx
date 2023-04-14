import React from "react";
import { useStyles } from "./HomeStyles";
import { Typography, Grid } from "@material-ui/core";
import { Search } from "../../components/Search";

export const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item sm={12} md={6}>
          <Typography variant="h3" className={classes.title}>
            Personajes
          </Typography>
        </Grid>
        <Grid item sm={12} md={6} className={classes.gridSearch}>
          <Search />
        </Grid>
      </Grid>
    </div>
  );
};
