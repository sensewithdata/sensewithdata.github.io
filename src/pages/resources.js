import React from "react"
import { graphql } from "gatsby"

import { Link } from "gatsby"

import Container from "../components/container"

// data injected by below query
export default function Home({ data }) {
  return (
  <Container>
      <p>
        As part of our data fellowship we read around and collated a library of interesting links...
      </p>
      <p>Todo: add search, categorise, formatting...</p>
      <p>probably define for each - url + author + comment</p> 
    <hr />
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div>
        <p><a href={ node.frontmatter.url }>{ node.frontmatter.title }</a> - { node.frontmatter.description }</p>
        <div dangerouslySetInnerHTML={{ __html: node.html }} />
        <hr />
      </div>
    ))}
  </Container>
  )
}

export const query = graphql`
query {
  allMarkdownRemark(filter: {frontmatter: {site_category: {eq: "resource"}}}) {
    edges {
      node {
        html,
        frontmatter {
          title, url, description
        }
      }
    }
  }
}
`