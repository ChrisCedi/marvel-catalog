import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: theme.palette.common.white,
  },
  toolBar: {
    backgroundColor: theme.palette.common.white,
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    height: "40px",
  },
  body: {
    paddingTop: theme.spacing(7),
  },
  mainDiv: {
    backgroundImage:
      "url(https://wallpapers.com/images/featured/0exuprkk5cwj6ail.jpg)",
    backgroundSize: "contain",
    height: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    // color: theme.palette.common.white,
  },
}));

export { useStyles };
