import React from 'react'
import { Header } from '../components/Header'
import { TopSelling } from '../components/TopSelling'
import { Features } from '../components/Features'
import { Story } from '../components/Story'
import { CTA } from '../components/CTA'
import Footer from '../components/Footer'
import { NavLayout } from '../components/layouts/NavLayout'

export const Home = () => {
  return (
    <div>
      <NavLayout>
      <Header />
      <TopSelling />
      <Features />
      <Story />
      </NavLayout>

    </div>
  )
}
