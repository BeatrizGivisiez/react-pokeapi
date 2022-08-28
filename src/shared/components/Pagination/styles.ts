import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pagination__button: {
      display: "flex",
      alignItems: "center",
      height: "50px",
    },
  })
);
