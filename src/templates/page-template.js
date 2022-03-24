import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';

const PageTemplate = ({ data }) => {
  const { frontmatter, excerpt, html } = data.markdownRemark;

  return (
    <Layout
      title={frontmatter.title}
      description={frontmatter.description || excerpt}
    >
    <PostWrapper>
      <article>
        <h1>{frontmatter.title}</h1>

        <section dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      </PostWrapper>
    </Layout>
  );
};

export default PageTemplate;

const PostWrapper = styled.div`
  @media screen and (max-width: 1000px) {
    & td, h1 {
      display: block;
      width: 100%;
    }
`;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
      }
    }
  }
`;


