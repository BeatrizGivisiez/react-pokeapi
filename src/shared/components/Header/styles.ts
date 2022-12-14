import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header__toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    header__image: {
      height: "3rem",
    },
    header__icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "24px",
    },
    header__logo: {
      alignItems: "center",
    },
  })
);
