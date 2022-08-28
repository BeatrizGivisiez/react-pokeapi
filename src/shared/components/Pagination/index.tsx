import React, { FC } from "react";
import { Box, Container, Stack, Pagination } from "@mui/material";

export const AppPagination: FC = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 4,
          pb: 4,
        }}
      >
        <Container maxWidth="sm">
          <Stack direction="row" spacing={2} justifyContent="center">
            <Pagination count={5} color="primary" />
          </Stack>
        </Container>
      </Box>
    </>
  );
};
