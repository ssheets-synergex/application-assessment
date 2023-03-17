import BuildIcon from '@mui/icons-material/Build';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HttpsIcon from '@mui/icons-material/Https';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FC, useState } from 'react';
import {
  AssessmentCategoryCardsContent,
  OptimizeContent,
  RadarChart,
  AnswersDataContent,
} from '../../components';
import { IResult } from '../assessmentPage/types';
import { IAnswer, IData, IResultsProp } from './types';

export const ResultsPage: FC<IResultsProp> = ({ results }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const theme = useTheme();

  let answers: IAnswer[] = [];

  //A = desired state
  //B = user results
  const data: IData[] = [
    {
      subject: 'Maintainability',
      A: 5,
      fullMark: 5,
      icon: <BuildIcon />,
    },
    {
      subject: 'Integration',
      A: 5,
      fullMark: 5,
      icon: <IntegrationInstructionsIcon />,
    },
    {
      subject: 'Security',
      A: 5,
      fullMark: 5,
      icon: <HttpsIcon />,
    },
    {
      subject: 'Usability',
      A: 5,
      fullMark: 5,
      icon: <ViewQuiltIcon />,
    },
    {
      subject: 'Reliability',
      A: 5,
      fullMark: 5,
      icon: <HandshakeIcon />,
    },
    {
      subject: 'Future',
      A: 5,
      fullMark: 5,
      icon: <RocketLaunchIcon />,
    },
  ];

  results.forEach((resultElement: IResult) => {
    const matchingData = data.find(
      (dataElement: any) => dataElement.subject === resultElement.key,
    );
    if (matchingData) {
      const i = data.indexOf(matchingData);
      data[i].B = resultElement.value;
      answers.push({
        key: resultElement.key,
        value: resultElement.value,
        userAnswer: resultElement.userAnswer,
        question: resultElement.question,
        icon: matchingData?.icon,
      });
    }
  });

  const possibleScore = (): number => {
    let totalPossibleScore = 0;
    data.forEach((item: any) => (totalPossibleScore += item.fullMark));
    return totalPossibleScore;
  };
  const actualScore = (): number => {
    let totalActualScore = 0;
    results.forEach((result: any) => (totalActualScore += result.value));
    return totalActualScore;
  };

  const handleClickOpen = (): void => {
    setIsModalOpen(true);
  };

  const handleClickClose = (): void => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Typography
        variant='h1'
        marginBottom='6%'
        marginTop='5%'
      >
        Results
      </Typography>
      <Box
        marginBottom='9%'
        sx={{
          [theme.breakpoints.down('md')]: {
            marginBottom: '20%',
          },
        }}
      >
        <Typography variant='h2'> Your Answers</Typography>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
          >
            <AnswersDataContent
              answers={answers}
              actualScore={actualScore}
              possibleScore={possibleScore}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
          >
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              width='100%'
              height='100%'
            >
              <RadarChart
                data={data}
                style={{ margin: 0 }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <OptimizeContent
        isModalOpen={isModalOpen}
        handleClickOpen={handleClickOpen}
        handleClickClose={handleClickClose}
      />
      <Grid
        container
        marginBottom='9%'
        spacing={4}
        sx={{
          [theme.breakpoints.down('md')]: {
            marginBottom: '20%',
          },
        }}
      >
        <AssessmentCategoryCardsContent />
      </Grid>
    </>
  );
};
