import React from "react"
import { graphql } from "gatsby"

import { Link } from "gatsby"

import Container from "../components/container"

// data injected by below query
export default function Home({ data }) {
  return (
  <Container>
    Sense with DAtabrings together a collective of sensemakers, seeking to start a discussion about ... 

    On this site we've put together a set of questions, which .... and a collection of resources, to ...
  </Container>
  )
}
