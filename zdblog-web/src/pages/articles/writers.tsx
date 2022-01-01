import * as React from "react";
import { graphql } from "gatsby";

import { Layout } from "../../components/layout/layout";

const writersPage = ({ data }) => {
  const query = graphql`
    query WritersQuery {
      allStrapiWriters {
        edges {
          node {
            id
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
  `;

  return (
    <Layout>
      <h1>Writer list</h1>
      <p>Work in Progress</p>
    </Layout>
  );
};

export default writersPage;
