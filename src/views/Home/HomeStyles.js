import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {},
  mainDiv: {
    backgroundImage: "url(https://wallpaperaccess.com/full/441312.jpg)",
    backgroundSize: "cover",
    height: "40vh",
  },
  button: {
    color: theme.palette.secondary.main,
    paddingTop: theme.spacing(10),
  },
}));

export { useStyles };
