import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingBottom: theme.spacing(10),
  },
  gridSearch: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    color: theme.palette.secondary.main,
    paddingTop: theme.spacing(10),
  },
}));

export { useStyles };
