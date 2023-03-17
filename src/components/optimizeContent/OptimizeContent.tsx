import { Box, Button, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { EmailPdfModal } from '../emailPdfModal/EmailPdfModal';
import { IOptimizeContentProps } from './types';

export const OptimizeContent: FC<IOptimizeContentProps> = ({
  isModalOpen,
  handleClickOpen,
  handleClickClose,
}) => (
  <Box marginBottom='6%'>
    <Typography variant='h2'>Optimize Your Application Investment</Typography>
    <Typography
      variant='body1'
      style={{ marginTop: '2%' }}
    >
      With the Synergex Application Assessment, you can own your application’s
      future instead of the future owning you.
    </Typography>
    <Typography
      variant='body1'
      style={{ marginTop: '2%' }}
    >
      Synergex’s Professional Services Group delivers a thorough, informed and
      immediately actionable roadmap in the shortest amount of time possible,
      the Application Assessment can put your business on the fast track to a
      brighter, more-sustainable future.
    </Typography>
    <Typography
      variant='body1'
      style={{ marginTop: '2%' }}
    >
      <Link
        to='#'
        style={{ color: '#007f96', textDecoration: 'none' }}
        onClick={(e) => {
          window.location.href = 'mailto:synergy@synergex.com';
          e.preventDefault();
        }}
      >
        Contact Us
      </Link>{' '}
      to get started!
    </Typography>
    <Button
      variant='contained'
      style={{ marginTop: '2%' }}
      size='large'
      onClick={handleClickOpen}
    >
      Email Results
    </Button>
    <EmailPdfModal
      isModalOpen={isModalOpen}
      handleClickClose={handleClickClose}
    />
  </Box>
);
