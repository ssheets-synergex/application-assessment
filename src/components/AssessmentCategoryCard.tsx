import { Card, CardContent, Grid, Typography } from "@mui/material";
import { ReactElement } from "react";
import { useTheme } from "@mui/material/styles";

export const AssessmentCategoryCard = ({
  icon,
  category,
  categoryHref,
  categoryDescription,
}: {
  icon: ReactElement<any, any>;
  category: string;
  categoryHref: string;
  categoryDescription: string;
}) => {
  const theme = useTheme();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        style={{
          margin: "3%",
          height: 160,
          backgroundColor: theme.palette.background.default,
          padding: "2%",
        }}
        raised
      >
        <CardContent>
          <>
            <Typography variant="h2">
              {icon}{" "}
              <a
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  color: theme.palette.primary.main,
                }}
                href={categoryHref}
              >
                {category}
              </a>
            </Typography>
          </>
          <Typography variant="body1">{categoryDescription}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
