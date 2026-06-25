import React from 'react'
 
// import { TopSelling } from '../components/TopSelling'
// import { Features } from '../components/Features'
// import { Story } from '../components/Story'
import { NavLayout } from '../components/layouts/NavLayout'
import FAQ from '../components/Faq'
import Header from "../components/Header"
export const Home = () => {
  return (
    <>
      <NavLayout>
      <Header/>
      {/* <TopSelling /> */}
      {/* <Features /> */}
      {/* <Story /> */}
      <FAQ isHome={true} />
      </NavLayout>
    </>
  )
}
