import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pokemonCard: {
      paddingTop: "4rem",
      paddingBottom: "12rem",
    },
    pokemonCard__card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      textTransform: "capitalize",
      cursor: "pointer",
      "&:hover": {
        background: "#f9f9f9",
        color: "#3660A7",
      },
    },
    pokemonCard__cardTitle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "1rem",
      paddingBottom: "2rem",
    },
    pokemonCard__cardMedia: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      heigth: "100px",
      transition: "0.3s",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
  })
);
