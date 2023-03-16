import { Card, CardContent, Grid, Link, Typography } from "@mui/material";
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
          height: 195,
          backgroundColor: theme.palette.background.default,
          padding: "2%",
          overflowY: "auto",
        }}
        raised
      >
        <CardContent>
          <>
            <Typography variant="h2">
              {icon}{" "}
              <Link
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  color: theme.palette.primary.main,
                }}
                href={categoryHref}
              >
                {category}
              </Link>
            </Typography>
          </>
          <Typography variant="body1" pt="1%">
            {categoryDescription}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
