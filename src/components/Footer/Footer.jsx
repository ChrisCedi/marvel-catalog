import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { useStyles } from "./FooterStyles";

export const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Typography color="secondary">Api marvel</Typography>
      </Toolbar>
    </AppBar>
  );
};
