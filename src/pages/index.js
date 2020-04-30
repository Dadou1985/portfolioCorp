import React from "react"

import Layout from "../components/layout"
import LandinPage from '../components/section/landingPage'
import Bio from '../components/section/bio'
import Skillz from '../components/section/skillz'
import Contact from '../components/section/contact'
import Ambitionz from '../components/section/ambitionz'
import Projet from '../components/section/projet'
import Navigation from '../components/section/navigation'


const IndexPage = () => (
  <Layout>
    <Navigation />
    <LandinPage />  
    <Bio />
    <Skillz />
    <Ambitionz />
    <Projet />
    <Contact />
  </Layout>
)

export default IndexPage
