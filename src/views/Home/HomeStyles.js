import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "left",
    paddingBottom: theme.spacing(4),
    fontWeight: 600,
    textTransform: "upperCase",
    letterSpacing: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.h5.fontSize,
    },
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
  gridCards: {
    display: "flex",
    justifyContent: "center",
  },
  gridPagination: {
    display: "flex",
    justifyContent: "center",
    paddingTop: theme.spacing(6),
  },
  boxAllFilter: {
    marginBottom: theme.spacing(4),
  },
}));

export { useStyles };
