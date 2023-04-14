import React from "react";
import { Container } from "@material-ui/core";
import { useStyles } from "./LayoutStyles";
import { Header } from "../components/Header/Header";

export const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <div className={classes.mainDiv} />
      <Container className={classes.body}>{children}</Container>
    </>
  );
};
