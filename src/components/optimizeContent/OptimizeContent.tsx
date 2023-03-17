import { Box, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { EmailPdfModal } from '../emailPdfModal/EmailPdfModal';
import { IOptimizeContentProps } from './types';

export const OptimizeContent: FC<IOptimizeContentProps> = ({
  isModalOpen,
  handleClickOpen,
  handleClickClose,
}) => {
  const theme = useTheme();

  return (
    <Box
      marginBottom='9%'
      sx={{
        [theme.breakpoints.down('md')]: {
          marginBottom: '20%',
        },
      }}
    >
      <Typography variant='h2'>Optimize Your Application Investment</Typography>
      <Typography
        variant='body1'
        sx={{ marginTop: '2%' }}
      >
        With the Synergex Application Assessment, you can own your application’s
        future instead of the future owning you.
      </Typography>
      <Typography
        variant='body1'
        sx={{ marginTop: '2%' }}
      >
        Synergex’s Professional Services Group delivers a thorough, informed and
        immediately actionable roadmap in the shortest amount of time possible,
        the Application Assessment can put your business on the fast track to a
        brighter, more-sustainable future.
      </Typography>
      <Typography
        variant='body1'
        sx={{ marginTop: '2%' }}
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
        sx={{ marginTop: '2%' }}
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
};
