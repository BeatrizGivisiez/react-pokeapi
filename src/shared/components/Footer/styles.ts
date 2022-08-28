import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer__list: {
      display: "flex",
      alignItem: "center",
      justifyContent: "center",
    },
    footer__item: {
      flexDirection: "column",
      padding: "0px",
      gap: "3rem",
    },
  })
);
