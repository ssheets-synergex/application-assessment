import { Box, Typography } from "@mui/material";

export const Footer = () => (
  <Box
    sx={{
      flexGrow: 1,
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
