import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: theme.palette.common.white,
  },
  toolBar: {
    backgroundColor: theme.palette.common.white,
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    height: "40px",
  },
}));

export { useStyles };
