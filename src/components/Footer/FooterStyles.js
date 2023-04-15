import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    bottom: 0,
    top: "90%",
    position: "relative",
    background: theme.palette.common.white,
    marginTop: theme.spacing(8),
    padding: theme.spacing(4),
  },
  toolBar: {
    display: "flex",
    justifyContent: "center",
  },
}));

export { useStyles };
