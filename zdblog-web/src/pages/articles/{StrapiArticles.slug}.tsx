import React from "react";

import { graphql } from "gatsby";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { Layout } from "../../components/layout";

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticles(slug: { eq: $slug }) {
      title
      description
      content
      published_at(formatString: "DD/MM/YY")
      author {
        name
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
      <Container sx={{ position: "relative" }}>
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            bottom: "8px",
            color: "#fff",
            display: "inline",
            background: "inherit",
          }}
        >
          {data.strapiArticles.title}
        </Typography>
      </Container>
    </Layout>
  );
};

export default articlePage;
