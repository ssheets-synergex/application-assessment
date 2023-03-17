import { Box, Typography } from '@mui/material';
import { FC } from 'react';

export const Footer: FC = () => (
  <Box
    sx={{
      justifyContent: 'center',
      display: 'flex',
      mb: 2,
    }}
  >
    <Typography
      variant='caption'
      color='initial'
    >
      Copyright ©{new Date().getFullYear()}
    </Typography>
  </Box>
);
