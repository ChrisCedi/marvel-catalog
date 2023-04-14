import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {},
  button: {
    color: theme.palette.secondary.main,
    paddingTop: theme.spacing(10),
  },
}));

export { useStyles };
