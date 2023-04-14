import React from "react";
import { useStyles } from "./CharacterStyles";
import { Card, CardMedia } from "@material-ui/core";

export const CharacterCard = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia />
      CharacterCard
    </Card>
  );
};
