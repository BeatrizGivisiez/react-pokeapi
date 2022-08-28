import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pokemonDetail: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100%",
      paddingTop: "4rem",
      paddingBottom: "4rem",
      margin: "1rem",
    },

    pokemonDetail__card: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "700px",
    },

    pokemonDetail__containerMenu: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
    },
    containerMenu__name: {
      width: "80%",
      alignItems: "center",
      justifyContent: "center",
    },
    containerMenu__icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "end",
      width: "20%",
    },

    pokemonDetail__containerGrid: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      flexWrap: "wrap",
      width: "100%",
      justifyContent: "space-around",
      gap: "1rem",
    },
    containerGrid: {
      display: "flex",
      width: "300px",
      height: "300px",
    },
    containerGrid__image: {
      justifyContent: "center",
      "&:hover": {
        transform: "scale(1.1)",
        cursor: "pointer",
      },
    },
    containerGrid__list: {
      display: "flex",
      justifyContent: "space-around",
      marginLeft: "2rem",
      marginRight: "2rem",
    },
  })
);
