import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
  },
  imageAvatar: {
    width: "50%",
    height: "50%",
  },
  gridInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  comicImage: {
    width: "100%",
    height: "400px",
  },
}));

export { useStyles };
