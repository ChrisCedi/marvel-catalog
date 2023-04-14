import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  imageCard: {
    height: "230px",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
    color: theme.palette.secondary.main,
  },
  boxCollapse: {
    padding: theme.spacing(4),
  },
}));

export { useStyles };
