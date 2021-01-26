import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Link } from "gatsby"

import Container from "../components/container"

export default class ResourcesPage extends React.Component {
  state = {
    search: "",
  }

  checkboxState = {
    checked: false,
  }

  handleChange = event => {
    this.setState({search: event.target.value})
    console.log(this.state.showing)
  }

  render() {
    const { search } = this.state;
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
          {
            search.includes("there")
              ? <p>howdy</p>
              : null
          }
          <p>
            As part of our data fellowship we read around and collated a library of interesting links...
          </p>

          
          <form>
            <label>Search: 
            <input
              type="text"
              name="searchBox"
              value={this.state.searchText}
              onChange={this.handleChange}  
              />
            </label>
            </form>

          <hr />
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div>
              {
              (
                // look it works, ok :)
                node.frontmatter.title.toLowerCase().includes(search) ||
                node.html.toLowerCase().includes(search) ||
                node.frontmatter.description.toLowerCase().includes(search)) ? (
                <div>
                  <p><a href={ node.frontmatter.url }>{ node.frontmatter.title }</a> - { node.frontmatter.description }</p>
                  <div dangerouslySetInnerHTML={{ __html: node.html }} />
                  <hr />
                </div>
                ) : (
                  null
                )
              }
            </div>
          ))}
        </Container>
        )}
        />
    )
  }
}
