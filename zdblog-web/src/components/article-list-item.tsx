import * as React from "react";

import Card from "@mui/material/card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

export const ArticleListItem = (props) => {
  return (
    <Card>
      <CardHeader>{props.title}</CardHeader>
      <CardMedia component="img" height="194" image={props.image} />
    </Card>
  );
};
