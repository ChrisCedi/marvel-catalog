import React from "react";
import { Container } from "@material-ui/core";
import { Header } from "../../components/Header/Header";
import { useStyles } from "../LayoutStyles";

export const FullScreenLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Header showField={false} />
      <Container className={classes.fullScreenBody}>{children}</Container>
    </>
  );
};
