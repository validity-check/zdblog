import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

import { Layout } from "../../components/layout/layout";

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticles(slug: { eq: $slug }) {
      title
      description
      content
      published_at(formatString: "DD/MM/YY")
      author {
        name
        id
        picture {
          localFile {
            url
          }
        }
      }
      image {
        localFile {
          url
        }
      }
    }
  }
`;

const articlePage = ({ data }) => {
  const article = data.strapiArticles;
  return (
    <Layout>
      <img src={article.image.localFile.url} width="100%" />
      <Box sx={{ position: "relative" }}>
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            bottom: "8px",
            color: "#fff",
            textShadow: "0 1px 0 black",
          }}
        >
          {data.strapiArticles.title}
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ padding: 1 }}>
        <Grid item xs={4}>
          <Card sx={{ padding: 1 }}>
            <Typography variant="h2">{article.title}</Typography>
            <CardMedia
              component="img"
              image={article.image.localFile.url}
            ></CardMedia>
            <CardActionArea
              to={`/articles/writers/writers-${article.author.id}`}
              component={Link}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardHeader
                avatar={
                  <Avatar
                    src={article.author.picture.localFile.url}
                    alt={article.author.name}
                  />
                }
                aria-label="writer"
                title={article.author.name}
                subheader={article.published_at}
              ></CardHeader>
            </CardActionArea>
            <Typography variant="body1" sx={{ color: "gray" }}>
              <i>{article.description}</i>
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1">{article.content}</Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default articlePage;
