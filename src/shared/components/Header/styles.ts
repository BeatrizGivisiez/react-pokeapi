import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header__image: {
      display: "flex",
      alignItems: "center",
      height: "50px",
    },
  })
);
