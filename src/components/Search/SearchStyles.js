import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
  gridField: {
    display: "flex",
    justifyContent: "flex-end",
  },
  field: {
    width: "100%",
  },
}));

export { useStyles };
