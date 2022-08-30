import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      display: "flex",
      alignItem: "center",
      justifyContent: "center",
      width: "100%",
      position: "absolute",
      left: "0",
      bottom: "0",
      textAlign: "center",
    },
    footer__list: {
      display: "flex",
      alignItem: "center",
      justifyContent: "center",
    },
    footer__item: {
      flexDirection: "column",
      padding: "0px",
    },
  })
);
