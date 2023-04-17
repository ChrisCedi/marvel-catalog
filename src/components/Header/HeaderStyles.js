import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: theme.palette.common.white,
  },
  toolBar: {
    backgroundColor: theme.palette.common.white,
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  logo: {
    height: "30px",
    marginRight: theme.spacing(3),
    cursor: "pointer",
  },
}));

export { useStyles };
