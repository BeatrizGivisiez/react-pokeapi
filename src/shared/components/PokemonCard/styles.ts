import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pokemonCard: {
      paddingTop: "4rem",
      paddingBottom: "4rem",
    },
    pokemonCard__card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      "&:hover": {
        background: "#f9f9f9",
        cursor: "pointer",
      },
    },
    pokemonCard__cardMedia: {
      heigth: "100px",
      "&:hover": {
        transform: "scale(1.1)",
        cursor: "pointer",
      },
    },
  })
);
