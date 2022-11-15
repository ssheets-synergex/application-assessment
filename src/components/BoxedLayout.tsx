import { Box, Container, GlobalStyles } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { ReactElement } from "react";

export type BoxedLayoutProps = {
  children: React.ReactNode;
};

export const BoxedLayout = ({ children }: BoxedLayoutProps): ReactElement => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ body: { backgroundColor: theme.palette.background.paper } }}
      />
      <Container component="main" sx={{ mt: 6 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
};
