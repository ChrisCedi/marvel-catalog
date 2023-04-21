import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { useStyles } from "./FooterStyles";

export const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <a href="https://github.com/ChrisCedi/" className={classes.linkGit}>
          <Typography>@ 2023 Christian Cedillo</Typography>
        </a>
        <Typography className={classes.linkGit}>Resources by </Typography>
        <a href="https://developer.marvel.com/" className={classes.linkApi}>
          <Typography color="primary"> Marvel</Typography>
        </a>
      </Toolbar>
    </AppBar>
  );
};
