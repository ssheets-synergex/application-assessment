import { Box, Typography } from "@mui/material";

export const Footer = () => (
  <Box
    sx={{
      justifyContent: "center",
      display: "flex",
      mb: 2,
    }}
  >
    <Typography variant="caption" color="initial">
      Copyright ©{new Date().getFullYear()}
    </Typography>
  </Box>
);
