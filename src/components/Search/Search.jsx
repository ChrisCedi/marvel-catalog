import React from "react";
import { useStyles } from "./SearchStyles";
import { TextField, Button } from "@material-ui/core";

export const Search = () => {
  const classes = useStyles();

  return (
    <div>
      <TextField variant="outlined" placeholder="buscar" size="small" />
      <Button color="primary" variant="contained">
        Buscar
      </Button>
    </div>
  );
};
