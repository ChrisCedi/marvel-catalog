import React, { useState } from "react";
import { useStyles } from "./CharacterStyles";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  IconButton,
  Collapse,
  Box,
} from "@material-ui/core";
import { motion } from "framer-motion";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";

export const CharacterCard = ({ character }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "tween", stiffness: 200, damping: 0.5 }}
    >
      <Card>
        <CardMedia
          image="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/12/spider-man-playstation-across-the-spider-verse.jpg?fit=1280%2C720&quality=80&ssl=1"
          title="Contemplative Reptile"
          className={classes.imageCard}
        />
        <CardContent>
          <Typography>{character.name}</Typography>
        </CardContent>
        <CardActions>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box className={classes.boxCollapse}>
            <Typography>
              {character.description.length === 0
                ? "No tenemos descripción de este personaje"
                : character.description}
            </Typography>
          </Box>
        </Collapse>
      </Card>
    </motion.div>
  );
};
