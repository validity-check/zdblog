import React from "react";

import { graphql } from "gatsby";

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
    }
  }
`;

const articlePage = ({ data }) => {
  return (
    <Layout>
      {/* <img src={data.}></img> */}
      <Typography variant="h1">{data.strapiArticles.title}</Typography>
    </Layout>
  );
};

export default articlePage;
