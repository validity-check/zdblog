import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Grid from "@mui/material/Grid";

import { ArticleListItem } from "../components/article-list-item";

// markup
const ArticlesPage = () => {
  const data = useStaticQuery(graphql`
    query ArticlesQuery {
      allStrapiArticles {
        edges {
          node {
            id
            description
            title
            createdAt
            slug
            author {
              name
              picture {
                url
                id
              }
            }
            image {
              url
            }
          }
        }
      }
    }
  `);

  return (
    <div>
      <Grid container spacing={2}>
        {data.allStrapiArticles.edges.map(({ node }) => (
          <Grid item xs={12} sm={6} md={4} key={node.id}>
            <ArticleListItem
              title={node.title}
              description={node.description}
              createdAt={node.createdAt}
              slug={node.slug}
              writer={node.author.name}
              writerImage={process.env.API_URL + node.author.picture.url}
              writerId={node.author.picture.id}
              image={process.env.API_URL + node.image.url}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ArticlesPage;
