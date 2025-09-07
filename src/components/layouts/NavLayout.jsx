import React from 'react'
import { Navbar } from '../Navbar'
import { CTA } from '../CTA'
import Footer from '../Footer'
import { JumboContact } from '../JumboContact'

export const NavLayout = ({children}) => {
  return (
    <div>
        <JumboContact />
        <Navbar />
        {children}
        <CTA />
        <Footer />
    </div>
  )
}
