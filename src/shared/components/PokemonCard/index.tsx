import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import { useStyles } from "./styles";

const cards = [1, 2, 3, 4, 5, 6];

export const PokemonCard: FC = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.pokemonCard} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.pokemonCard__card}>
                <CardContent
                  sx={{
                    flexGrow: 1,
                  }}
                >
                  <Typography gutterBottom variant="h5" component="h2">
                    Pikachu
                  </Typography>
                </CardContent>
                <CardMedia
                  className={classes.pokemonCard__cardMedia}
                  component="img"
                  image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
