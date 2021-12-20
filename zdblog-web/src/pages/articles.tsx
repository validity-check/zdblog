import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Grid from "@mui/material/Grid";

import { Layout } from "../components/layout";
import { ArticleListItem } from "../components/articles/article-list-item";

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
            published_at(formatString: "DD/MM/YY")
            slug
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
      }
    }
  `);

  return (
    <Layout>
      <Grid container spacing={2}>
        {data.allStrapiArticles.edges.map(({ node }) => (
          <Grid item xs={12} sm={6} md={4} key={node.id}>
            <ArticleListItem
              title={node.title}
              description={node.description}
              publishedAt={node.published_at}
              slug={node.slug}
              writer={node.author.name}
              writerImage={node.author.picture.localFile.url}
              image={node.image.localFile.url}
              writerId={"writers-" + node.author.id}
            />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default ArticlesPage;
