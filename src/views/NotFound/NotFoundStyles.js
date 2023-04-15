import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  elements: {
    marginTop: theme.spacing(3),
  },
  spImage: {
    [theme.breakpoints.down("xs")]: {
      width: "200px",
      height: "200px",
    },
  },
}));

export { useStyles };
