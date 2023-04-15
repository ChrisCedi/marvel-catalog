import React from "react";
import { Container } from "@material-ui/core";
import { useStyles } from "./LayoutStyles";
import { Header } from "../components/Header/Header";
import { motion } from "framer-motion";
import { Footer } from "../components/Footer/Footer";

export const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Header showField={true} />
      <div className={classes.mainDiv}>
        <motion.div whileHover={{ scale: 1.2 }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png"
            alt="marvel"
            className={classes.logo}
          />
        </motion.div>
      </div>
      <Container className={classes.body}>{children}</Container>
      <Footer />
    </>
  );
};
