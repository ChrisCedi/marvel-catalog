import React, { useState, useEffect } from "react";
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
  withWidth,
} from "@material-ui/core";
import { motion } from "framer-motion";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import { useNavigate } from "react-router";

const CharacterCard = ({ character, width }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setIsMobile(width);
  }, [width]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.div
      whileHover={isMobile === "xs" ? { scale: 1 } : { scale: 1.1 }}
      transition={{ type: "tween", stiffness: 200, damping: 0.5 }}
      className={classes.card}
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
                ? "We don´t have information for this character"
                : character.description}
            </Typography>
            <CardActions className={classes.actionsCard}>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => navigate(`/character/${character.id}`)}
              >
                See more
              </Button>
            </CardActions>
          </Box>
        </Collapse>
      </Card>
    </motion.div>
  );
};

export default withWidth()(CharacterCard);
