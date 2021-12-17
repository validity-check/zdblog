import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

type Props = {
  title: string;
  description: string;
  author: string;
  authorImage: string;
  slug: string;
  image: string;
};

export const ArticleListItem = ({
  title,
  description,
  author,
  authorImage,
  slug,
  image,
}: Props) => {
  return (
    <Card sx={{ maxWidth: 345, m: 5 }}>
      <CardMedia component="img" height="194" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardHeader
        avatar={
          <Avatar>
            <img src={authorImage} alt={author} />
          </Avatar>
        }
        aria-label="author"
        title={author}
      ></CardHeader>
    </Card>
  );
};
