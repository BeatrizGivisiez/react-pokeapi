import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pokemonList: {
      paddingTop: "4rem",
      paddingBottom: "12rem",
    },
  })
);
