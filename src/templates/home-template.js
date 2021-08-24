import React from "react";
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';
import StyledLink from '../components/styled-link';

const PostTemplate = ({ data }) => {
  const { frontmatter, excerpt, html } = data.markdownRemark;
  const prev = data.prev;
  const next = data.next;
      
  return (
    <Layout
      description={frontmatter.description || excerpt}
      socialImage={
        frontmatter.social_image ? frontmatter.social_image.absolutePath : ''
      }
    >
      <PostWrapper>
        <article>
          <PostContent dangerouslySetInnerHTML={{ __html: html }} />  
        </article>
        <StyledLink
        css={`
          display: block;
          margin-top: var(--size-800);
          margin-bottom: var(--size-800);
          margin-left: auto;
          margin-right: auto;
          width: fit-content;
        `}
        to="/blog"
      >
        View All Posts
      </StyledLink>
       </PostWrapper>
    </Layout>
  );
};

export default PostTemplate;

const PostWrapper = styled.div`
  display: flex;
  padding-bottom: var(--size-900);
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  word-wrap: break-word;

  @media screen and (max-width: 1000px) {
    & td {
      display: block;
      text-align: center;
      width: 100%;
    }
    
    & h1 {
      text-align: center;
    }
`;

const PostContent = styled.section`
  & > * + * {
    margin-top: var(--size-300);
  }

  & > p + p {
    margin-top: var(--size-700);
  }

  & table {
    width: 100%;
    border-collapse: collapse;
  }

  & img {
    display: inline;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: var(--size-900);
  }

  h1 {
    font-size: var(--size-700);
  }

  h2 {
    font-size: var(--size-600);
  }

  h3 {
    font-size: var(--size-500);
  }

  b,
  strong {
    font-weight: 600;
  }

  a {
    color: inherit;
    text-decoration: underline;
    text-decoration-thickness: 0.125rem;
  }

  blockquote {
    padding-left: var(--size-400);
    border-left: 5px solid;
    font-style: italic;
  }

  code {
    font-family: 'Source Sans Pro', monospace;
    overflow-x: auto;
    white-space: pre-wrap;
  }

  pre {
    overflow-x: auto;
    white-space: pre-wrap;
    max-width: 100%;
  }
`;

const PostPagination = styled.nav`
  display: flex;
  flex-wrap: wrap;
  margin-top: var(--size-900);

  & > * {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    margin: 0.5rem;
  }

  & > *:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  & span {
    text-transform: uppercase;
    opacity: 0.6;
    font-size: var(--size-400);
    padding-bottom: var(--size-500);
  }

  & a {
    color: inherit;
    text-decoration: none;
    font-size: var(--size-400);
    text-transform: none;
  }

  & a::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;

export const pageQuery = graphql`
  query($slug: String!, $prevSlug: String, $nextSlug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        description
        social_image {
          absolutePath
        }
      }
    }

    prev: markdownRemark(fields: { slug: { eq: $prevSlug } }) {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }

    next: markdownRemark(fields: { slug: { eq: $nextSlug } }) {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`;