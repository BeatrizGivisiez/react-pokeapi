import React, { FC } from "react";
import { Box, Button, Container, Stack } from "@mui/material";

import { useStyles } from "./styles";

export const Pagination: FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button className={classes.pagination__button} variant="outlined">
              Previous
            </Button>
            <Button className={classes.pagination__button} variant="contained">
              Next
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
