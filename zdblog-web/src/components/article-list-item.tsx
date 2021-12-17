import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

type Props = {
  title: string;
  description: string;
  author: string;
  slug: string;
  image: string;
};

export const ArticleListItem = ({
  title,
  description,
  author,
  slug,
  image,
}: Props) => {
  return (
    <Card sx={{ maxWidth: 345, m: 5 }}>
      <CardMedia component="img" height="194" image={image} />
      <CardContent></CardContent>
    </Card>
  );
};
