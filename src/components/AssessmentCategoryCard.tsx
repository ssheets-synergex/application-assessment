import { Card, CardContent, Typography } from "@mui/material";
import { ReactElement } from "react";

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
    <Card style={{ width: "30%", margin: "1%" }}>
      <CardContent>
        <>
          {icon}
          <Typography variant="h6">
            <a
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
              href={categoryHref}
            >
              {category}
            </a>
          </Typography>
        </>
        <Typography variant="body1">{categoryDescription}</Typography>
      </CardContent>
    </Card>
  );
};
