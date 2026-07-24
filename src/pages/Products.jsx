import React from 'react'
import { MiniJumbo } from '../components/MiniJumbo'
import { NavLayoutTwo } from '../components/layouts/NavLayoutTwo'
import { SEO } from '../components/atoms/SEO'

export const Products = () => {
  return (
    <div>
      <SEO
        title="Minerals & Himalayan Salt Products"
        description="Browse our export catalog: Himalayan Salt, Bentonite, Limestone, Antimony, Nephrite Jade, White Quartz, Silica Sand and Copper. Bulk supply with custom packaging, sourced directly from Pakistan."
        path="/products"
      />
      <NavLayoutTwo>
        <MiniJumbo />
      </NavLayoutTwo>
    </div>
  )
}
