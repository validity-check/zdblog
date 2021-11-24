import React from "react";

import { graphql } from "gatsby";

export const query = graphql`
  query WriterQuery($id: String!) {
    strapiWriters(id: { eq: $id }) {
      email
      name
    }
  }
`;

const writerPage = ({ data }) => {
  return (
    <div>
      <h1>Work in Progress</h1>
      <p>Writer page</p>
    </div>
  );
};

export default writerPage;
