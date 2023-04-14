import React from "react";
import { Container } from "@material-ui/core";
import { useStyles } from "./LayoutStyles";
import { Header } from "../components/Header/Header";

export const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <div className={classes.mainDiv}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png"
          alt="marvel"
          className={classes.logo}
        />
      </div>
      <Container className={classes.body}>{children}</Container>
    </>
  );
};
