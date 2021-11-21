import React from "react";

import { graphql } from "gatsby";

export const query = graphql`
  query CategoryQuery {
    strapiCategories(slug: { eq: "food" }) {
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
