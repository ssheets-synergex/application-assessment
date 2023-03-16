import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { IAnswersDataContentProps } from "./types";

export const AnswersDataContent: FC<IAnswersDataContentProps> = ({
  answers,
  actualScore,
  possibleScore,
}) => (
  <>
    <Typography variant="h5" marginTop="1%" marginBottom="3%" color="GrayText">
      Total Score: {actualScore()} / {possibleScore()}
    </Typography>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <List>
        {answers.map((answer) => (
          <ListItem
            key={answer.key}
            style={{
              textAlign: "left",
            }}
            disableGutters={true}
          >
            <ListItemIcon>{answer.icon}</ListItemIcon>
            <ListItemText
              sx={{
                ".MuiListItemText-secondary": {
                  fontSize: "1rem",
                },
              }}
              primary={
                <Tooltip
                  title={<Typography>{answer.question}</Typography>}
                  placement="top"
                >
                  <Typography
                    color="primary"
                    variant="h5"
                  >{`${answer.key} (${answer.value}/5)`}</Typography>
                </Tooltip>
              }
              secondary={answer.userAnswer}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  </>
);
