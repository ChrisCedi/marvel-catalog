import React from "react";
import { useStyles } from "./SearchStyles";
import { TextField, Button, Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export const Search = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={9} className={classes.gridField}>
          <TextField
            variant="outlined"
            placeholder="buscar"
            size="small"
            className={classes.field}
          />
        </Grid>
        <Grid item xs={3}>
          <Button color="primary" variant="contained">
            <SearchIcon />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
