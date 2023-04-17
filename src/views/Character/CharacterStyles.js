import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: theme.spacing(12),
  },
  title: {
    textAlign: "left",
    paddingBottom: theme.spacing(4),
    textTransform: "upperCase",
    letterSpacing: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
  description: {
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  subtitle: {
    textAlign: "left",
  },
  imageAvatar: {
    width: "100%",
    height: "350px",
    borderRadious: theme.spacing(4),
  },
  gridInfo: {
    display: "flex",
    alignItems: "flex-end",
  },
  comicImage: {
    width: "100%",
    height: "400px",
  },
  comicName: {
    textDecoration: "none",
    color: theme.palette.common.black,
  },
  gridComics: {
    display: "flex",
    justifyContent: "center",
  },
  motionImage: {
    width: "250px",
  },
}));

export { useStyles };
