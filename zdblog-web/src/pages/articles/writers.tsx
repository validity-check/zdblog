import * as React from "react";
import { graphql } from "gatsby";

export const query = graphql`
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

const writersPage = () => {
  return (
    <div>
      <h1>Writer list</h1>
      <p>Work in Progress</p>
    </div>
  );
};

export default writersPage;
