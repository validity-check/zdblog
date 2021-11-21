import React from "react";

import { graphql } from "gatsby";

export const query = graphql`
  query CategoryQuery($slug: String!) {
    strapiCategories(slug: { eq: $slug }) {
      articles {
        author
        description
        title
        slug
      }
    }
  }
`;

const categoryPage = ({ data }) => {
  return (
    <div>
      <h1>Work in Progress</h1>
      <p>Category page</p>
    </div>
  );
};

export default categoryPage;
