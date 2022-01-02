import * as React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";

import { Layout } from "../../components/layout/layout";

const writersPage = () => {
  const data = useStaticQuery(graphql`
    query WritersQuery {
      allStrapiWriters {
        edges {
          node {
            strapiId
            name
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Grid container spacing={2} sx={{ padding: 5 }}>
        {data.allStrapiWriters.edges.map(({ node }) => (
          <Grid item xs={12} sm={6} md={4} key={node.strapiId}>
            <Card>
              <CardActionArea
                to={`writers-${node.strapiId}`}
                component={Link}
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "none",
                  },
                }}
              >
                <CardMedia>
                  <GatsbyImage
                    image={getImage(node.picture.localFile.childImageSharp)}
                    alt={node.name}
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6">{node.name}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default writersPage;
