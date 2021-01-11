import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
  <div>
    <Header />
    <h1>Hello ddd world! :)</h1>
    <p>beep</p>
    <Link to="/about/">About</Link>
  </div>
  )
}
