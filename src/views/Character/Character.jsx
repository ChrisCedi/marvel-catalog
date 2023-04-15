import React, { useEffect } from "react";
import { useStyles } from "./CharacterStyles";
import { useParams } from "react-router-dom";
import { useMarvel } from "../../components/MarvelProvider/hooks/useMarvel";
import { Typography, Grid, CardActionArea } from "@material-ui/core";
import { motion } from "framer-motion";

export const Character = () => {
  const classes = useStyles();
  const { characterInfo, comicList, getCharacterById, getComics } = useMarvel();
  const { id } = useParams();

  useEffect(() => {
    getCharacterById(id);
    getComics(id);
    window.scroll(0, 0);
  }, []);

  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h3">
        {characterInfo.name}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <img
            src={characterInfo.avatar}
            alt="character"
            className={classes.imageAvatar}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={8} className={classes.gridInfo}>
          <Typography variant="h5" className={classes.description}>
            {characterInfo.description}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.subtitle} variant="h4">
            Comics
          </Typography>
          <Typography variant="h6">
            Si deseas ver más información sobre un comic dale click y te llevará
            a la página oficial
          </Typography>
        </Grid>

        {comicList.map((comic, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            className={classes.gridComics}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={classes.motionImage}
            >
              <CardActionArea>
                <a href={comic.url} className={classes.comicName}>
                  <img
                    src={comic.comicImage}
                    alt={comic.name}
                    className={classes.comicImage}
                  />
                </a>
              </CardActionArea>
              <Typography>{comic.name}</Typography>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
