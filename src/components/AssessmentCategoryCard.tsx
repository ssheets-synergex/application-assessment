import { Card, CardContent, Grid, Typography } from "@mui/material";
import { ReactElement } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

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
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card style={{ margin: "3%", height: 250 }} raised>
        <CardContent>
          <>
            {icon}
            <Typography variant="h2">
              <a
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "#cc9966" }}
                href={categoryHref}
              >
                {category} <OpenInNewIcon fontSize="small" />
              </a>
            </Typography>
          </>
          <Typography variant="body1">{categoryDescription}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
