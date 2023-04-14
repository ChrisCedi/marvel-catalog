import React from "react";
import { Container, AppBar, Toolbar, TextField } from "@material-ui/core";
import { useStyles } from "./LayoutStyles";

export const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Container className={classes.toolBar}>
            <TextField placeholder="Buscar" size="small" />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png"
              alt="marvel"
              className={classes.logo}
            />
          </Container>
        </Toolbar>
      </AppBar>
      <Container className={classes.body}>{children}</Container>
    </>
  );
};
