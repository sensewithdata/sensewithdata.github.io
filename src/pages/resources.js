import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Link } from "gatsby"

import Container from "../components/container"

export default class ResourcesPage extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query ResourceQuery {
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
          `}
        render={data => (
        <Container>
          <p>
            As part of our data fellowship we read around and collated a library of interesting links...
          </p>
          <hr />
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div>
              <p><a href={ node.frontmatter.url }>{ node.frontmatter.title }</a> - { node.frontmatter.description }</p>
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
              <hr />
            </div>
          ))}
        </Container>
        )}
        />
    )
  }
}
