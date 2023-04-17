import React from "react";
import { useStyles } from "./NotFoundStyles";
import { Images } from "../../assets/Images";
import { Button, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <img
        src={Images.spidermanConfused}
        alt="spidermanGif"
        className={classes.spImage}
      />
      <Typography className={classes.elements} variant="h5">
        Page not found
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        className={classes.elements}
        onClick={() => navigate("/")}
      >
        go home
      </Button>
    </div>
  );
};
