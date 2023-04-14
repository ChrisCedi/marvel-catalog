import React from "react";
import { useStyles } from "./CharacterStyles";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { motion } from "framer-motion";

export const CharacterCard = () => {
  const classes = useStyles();

  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Card>
        <CardMedia
          image="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/12/spider-man-playstation-across-the-spider-verse.jpg?fit=1280%2C720&quality=80&ssl=1"
          title="Contemplative Reptile"
          className={classes.imageCard}
        />
        <CardContent>
          <Typography>Spiderman</Typography>
          <Typography>
            k aslkmdkd ask daklmdlkasmdklamsd skld alkd as
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};
