import { AppBar, Box, ButtonBase, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ReactComponent as SynergexLogo } from "../assets/synergexFullLogo.svg";

export const NavBar = () => (
  <Box>
    <AppBar color="inherit" position="absolute">
      <Toolbar>
        <ButtonBase
          component={NavLink}
          to="/"
          disableRipple={true}
          style={{ height: 40 }}
          aria-label="go to home page"
        >
          <SynergexLogo />
        </ButtonBase>
        <Box sx={{ flexGrow: 1 }} />
        <Typography
          component={NavLink}
          to="/"
          variant="body1"
          color="initial"
          sx={{ textDecoration: "none" }}
          pr="17px"
        >
          Restart Assessment
        </Typography>
      </Toolbar>
    </AppBar>
    <Toolbar />
  </Box>
);
