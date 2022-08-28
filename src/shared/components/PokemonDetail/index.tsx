import React, { FC } from "react";
import {
  Container,
  Box,
  Card,
  Grid,
  Typography,
  CardMedia,
  ListItem,
  ListItemText,
  List,
} from "@mui/material";
import { Star } from "phosphor-react";

import { useStyles } from "./styles";

export const PokemonDetail: FC = () => {
  const classes = useStyles();

  return (
    <main className={classes.pokemonDetail}>
      <Card className={classes.pokemonDetail__card}>
        <Container
          maxWidth="md"
          sx={{
            bgcolor: "background.paper",
          }}
        >
          <div className={classes.pokemonDetail__containerMenu}>
            <div className={classes.containerMenu__name}>
              <Typography variant="h4">Pikachu</Typography>
            </div>
            <div className={classes.containerMenu__icon}>
              <Star size={40} color="#3761A8" />
            </div>
          </div>

          <Grid className={classes.pokemonDetail__containerGrid}>
            <Box className={classes.containerGrid}>
              <CardMedia
                className={classes.containerGrid__image}
                component="img"
                image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
              />
            </Box>
            <List className={classes.containerGrid__list}>
              <Box>
                <ListItem>
                  <ListItemText primary="HP:" secondary="100" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="ATTACK:" secondary="200" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="SPEED:" secondary="500" />
                </ListItem>
              </Box>
              <Box>
                <ListItem>
                  <ListItemText primary="DEFENSE:" secondary="10" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="WEIGHT:" secondary="30" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="WEIGHT:" secondary="30" />
                </ListItem>
              </Box>
            </List>
          </Grid>
        </Container>
      </Card>
    </main>
  );
};
