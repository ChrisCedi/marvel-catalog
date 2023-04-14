import React from "react";
import { AppBar, Toolbar, Container } from "@material-ui/core";
import { useStyles } from "./HeaderStyles";

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Container className={classes.toolBar}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png"
            alt="marvel"
            className={classes.logo}
          />
        </Container>
      </Toolbar>
    </AppBar>
  );
};
