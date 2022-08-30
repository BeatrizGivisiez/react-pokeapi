import React, { Dispatch, SetStateAction } from "react";
import {
  Box,
  Container,
  Stack,
  Pagination as MuiPagination,
} from "@mui/material";

interface PaginationProps {
  handlePage: Dispatch<SetStateAction<number>>;
  totalPages: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  handlePage,
  totalPages,
}) => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 4,
        pb: 4,
      }}
    >
      <Container maxWidth="sm">
        <Stack direction="row" spacing={2} justifyContent="center">
          <MuiPagination
            onChange={(_, page) => {
              handlePage(page - 1);
            }}
            count={Number(totalPages.toFixed())}
            color="primary"
          />
        </Stack>
      </Container>
    </Box>
  );
};
