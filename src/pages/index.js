import React from "react"

import Layout from "../components/layout"
import LandinPage from '../components/section/landingPage'
import Bio from '../components/section/bio'
import Skillz from '../components/section/skillz'
import Navigation from "../components/section/navigation"
import Contact from '../components/section/contact'


const IndexPage = () => (
  <Layout>
    <Navigation />
    <LandinPage />  
    <Bio />
    <Skillz />
    <Contact />
  </Layout>
)

export default IndexPage
