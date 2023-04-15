import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingBottom: theme.spacing(10),
    letterSpacing: 8,
    fontWeight: 600,
  },
  gridSearch: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    color: theme.palette.secondary.main,
    paddingTop: theme.spacing(10),
  },
  boxProgress: {
    width: "100%",
    height: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export { useStyles };
