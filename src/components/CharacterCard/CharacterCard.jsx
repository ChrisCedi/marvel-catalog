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
  Button,
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
          image={character.avatar}
          title="Contemplative Reptile"
          className={classes.imageCard}
        />
        <CardContent>
          <Typography variant="h6">{character.name}</Typography>
        </CardContent>
        <CardActions className={classes.actions}>
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
            <Typography variant="body1">
              {character.description.length === 0
                ? "No tenemos descripción de este personaje"
                : character.description}
            </Typography>
            <CardActions className={classes.actionsCard}>
              <Button color="secondary" variant="contained">
                Ver más
              </Button>
            </CardActions>
          </Box>
        </Collapse>
      </Card>
    </motion.div>
  );
};
