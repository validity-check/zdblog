import React from "react";

import { graphql } from "gatsby";

import { Layout } from "../../components/layout";

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticles(slug: { eq: $slug }) {
      description
      content
      published_at
    }
  }
`;

const articlePage = ({ data }) => {
  return (
    <Layout>
      <h1>Article</h1>
      <p>Work in Progress</p>
    </Layout>
  );
};

export default articlePage;
