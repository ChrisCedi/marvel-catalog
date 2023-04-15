import React, { useEffect } from "react";
import { useStyles } from "./CharacterStyles";
import { useParams } from "react-router-dom";
import { useMarvel } from "../../components/MarvelProvider/hooks/useMarvel";
import { Typography, Grid } from "@material-ui/core";

export const Character = () => {
  const classes = useStyles();
  const { characterInfo, comicList, getCharacterById, getComics } = useMarvel();
  const { id } = useParams();

  useEffect(() => {
    getCharacterById(id);
    getComics(id);
  }, []);

  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h3">
        {characterInfo.name}
      </Typography>
      <img
        src={characterInfo.avatar}
        alt="character"
        className={classes.imageAvatar}
      />
      <Grid container spacing={5}>
        {comicList.map((comic, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <img
              src={comic.comicImage}
              alt={comic.name}
              className={classes.comicImage}
            />
            <Typography>{comic.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
