import * as React from "react";
import { graphql } from "gatsby";

import Grid from "@mui/material/Grid";

import { ArticleListItem } from "../components/article-list-item";

const query = graphql`
  {
    allStrapiArticles {
      edges {
        node {
          description
          title
          createdAt
          slug
          author {
            name
            picture {
              url
            }
          }
        }
      }
    }
  }
`;

// markup
const ArticlesPage = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item>
          <ArticleListItem
            title="hello card"
            description="This card says hello"
            writer="r"
            writerImage="https://picsum.photos/200"
            writerId="writers-61504e7a8dd36c518cb2c952"
            slug="hello-card"
            image="https://source.unsplash.com/random"
            createdAt="2020-01-01"
          ></ArticleListItem>
        </Grid>
        <Grid item>
          <ArticleListItem
            title="helloo card"
            description="This card also says hello!"
            writer="h"
            writerId=""
            writerImage="https://picsum.photos/200"
            slug="helloo-card"
            image="https://source.unsplash.com/random"
            createdAt="2020-07-23"
          ></ArticleListItem>
        </Grid>
      </Grid>
    </div>
  );
};

export default ArticlesPage;
