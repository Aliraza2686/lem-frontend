import React from 'react'

// import { TopSelling } from '../components/TopSelling'
// import { Features } from '../components/Features'
// import { Story } from '../components/Story'
import { NavLayout } from '../components/layouts/NavLayout'
import FAQ from '../components/Faq'
import Header from "../components/Header"
import { SEO } from '../components/atoms/SEO'

export const Home = () => {
  return (
    <>
      <SEO
        title="Himalayan Salt & Mineral Exporter, Pakistan"
        description="Global supplier of Himalayan Salt, Bentonite, Limestone, Antimony, Nephrite Jade, White Quartz, Silica Sand and Copper from Khewra, Pakistan. Bulk export, private labeling and worldwide logistics for importers, distributors and manufacturers."
        path="/"
      />
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
