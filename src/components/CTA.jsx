import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './button'
import { ArrowRight, Sparkles } from 'lucide-react'

export const CTA = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-6">Ready to Place a Bulk Order?</h2>
      <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
        Join hundreds of businesses who trust us for their natural product needs. From authentic Himalayan salt to
        premium grains, contact our team for custom pricing and bulk discounts.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Link to="/contact">
          <Button size="lg" className="theme-bg-primary theme-hover-primary cursor-pointer text-lg px-8 py-4">
            <Sparkles className="mr-2 h-5 w-5" />
            Request Custom Quote
          </Button>
        </Link>
        <Link to="/products">
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4"
          >
            Browse Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  </section>
  )
}
