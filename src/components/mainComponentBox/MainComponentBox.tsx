import { Box } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";

export const MainComponentBox: FC = () => (
  <Box component="main" px="41px" flexGrow={1}>
    <Outlet />
  </Box>
);
