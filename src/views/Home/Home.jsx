import React from "react";
import { useStyles } from "./HomeStyles";
import { Button, TextField, Typography } from "@material-ui/core";

export const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Button color="primary" variant="outlined">
        Consultar
      </Button>
      <Button color="secondary">sdasd</Button>
      <Typography>Hola a todos con la nueva funete</Typography>
    </div>
  );
};
