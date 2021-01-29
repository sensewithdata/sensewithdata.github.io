import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default class ResourcesPage extends React.Component {
  state = {
    search: "",
  }

  handleChange = event => {
    this.setState({search: event.target.value})
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
                    title, url, description, resource_category
                  }
                }
              }
            }
          }
          `}
        render={data => (
        <div>
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
          <h3>What Is Data?</h3>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div>
              {
              (
                (node.frontmatter.title.toLowerCase().includes(search.toLowerCase()) ||
                node.html.toLowerCase().includes(search.toLowerCase()) ||
                node.frontmatter.description.toLowerCase().includes(search.toLowerCase())) &&
                node.frontmatter.resource_category == "whatisdata") ? (
                <div>
                  <p><a href={ node.frontmatter.url }>{ node.frontmatter.title }</a> - { node.frontmatter.description }</p>
                  <div dangerouslySetInnerHTML={{ __html: node.html }} />
                  <br />
                </div>
                ) : (
                  null
                )
              }
            </div>
          ))}

          <hr />
          <h3>Sensemaking and Systems Change</h3>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div>
              {
              (
                (node.frontmatter.title.toLowerCase().includes(search.toLowerCase()) ||
                node.html.toLowerCase().includes(search.toLowerCase()) ||
                node.frontmatter.description.toLowerCase().includes(search.toLowerCase())) &&
                node.frontmatter.resource_category == "sensemakingandsystemschange") ? (
                <div>
                  <p><a href={ node.frontmatter.url }>{ node.frontmatter.title }</a> - { node.frontmatter.description }</p>
                  <div dangerouslySetInnerHTML={{ __html: node.html }} />
                  <br />
                </div>
                ) : (
                  null
                )
              }
            </div>
          ))}
        </div>
        )}
        />
    )
  }
}
