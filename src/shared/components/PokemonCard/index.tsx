import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";
import { PokemonDetail } from "../../interfaces/pokemon";
import { PokemonContext } from "../../context/PokemonContext";
import { useNavigate } from "react-router-dom";

interface PokemonCardProps {
  name: string;
  url: string;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ name, url }) => {
  const [pokemonInfo, setpokemonInfo] = useState<PokemonDetail | null>(null);
  const { handlePokemonData } = useContext(PokemonContext);
  const navigate = useNavigate();
  const classes = useStyles();

  useEffect(() => {
    axios.get(url).then((response) => setpokemonInfo(response.data));
  }, []);

  return (
    <Grid
      onClick={() => {
        if (pokemonInfo) {
          handlePokemonData(pokemonInfo);
          navigate("/pokemon");
        }
      }}
      item
      xs={12}
      sm={6}
      md={4}
    >
      <Card className={classes.pokemonCard__card}>
        <CardMedia
          className={classes.pokemonCard__cardMedia}
          component="img"
          image={
            pokemonInfo?.sprites?.other?.["official-artwork"].front_default
          }
        />
        <Typography
          className={classes.pokemonCard__cardTitle}
          variant="h5"
          component="h2"
        >
          {name}
        </Typography>
      </Card>
    </Grid>
  );
};
