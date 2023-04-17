import React from "react";
import { AppBar, Toolbar, Hidden } from "@material-ui/core";
import { useStyles } from "./HeaderStyles";
import { Search } from "../Search";
import { useNavigate } from "react-router-dom";

export const Header = ({ showField }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <div className={classes.toolBar}>
          <Hidden smDown>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png"
              alt="marvel"
              className={classes.logo}
              onClick={() => navigate("/")}
            />
          </Hidden>
          <Hidden mdUp>
            <img
              src="https://seeklogo.com/images/S/spider-man-comic-new-logo-322E9DE914-seeklogo.com.png"
              alt="spiderman-icon"
              className={classes.logo}
              onClick={() => navigate("/")}
            />
          </Hidden>
          {showField ? <Search /> : <></>}
        </div>
      </Toolbar>
    </AppBar>
  );
};
