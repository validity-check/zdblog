import * as React from "react";
import { Link } from "gatsby";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardActionArea from "@mui/material/CardActionArea";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

type Props = {
  title: string;
  description: string;
  writer: string;
  writerId: string;
  writerImage: string;
  publishedAt: string;
  slug: string;
  image: string;
};

export const ArticleListItem = ({
  title,
  description,
  writer,
  writerId,
  writerImage,
  publishedAt,
  slug,
  image,
}: Props) => {
  return (
    <Card sx={{ maxWidth: 345, m: 5 }}>
      <CardActionArea
        to={`/articles/${slug}`}
        component={Link}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardMedia component="img" height="194" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea
        to={`/articles/writers/${writerId}`}
        component={Link}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardHeader
          avatar={
            <Avatar>
              <img src={writerImage} alt={writer} />
            </Avatar>
          }
          aria-label="writer"
          title={writer}
          subheader={publishedAt}
        ></CardHeader>
      </CardActionArea>
    </Card>
  );
};
