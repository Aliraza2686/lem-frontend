import React from 'react'
import { Badge } from './badge'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from './button'

export const Story = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-500 text-white mb-4">🏆 World's First</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey: From Khewra Mine to Global Markets</h2>
              <p className="text-lg text-gray-700 mb-6">
                We are proud to be the <strong>first company in the world</strong> to establish a direct partnership
                with the legendary Khewra Salt Mine in Pakistan. This 700-million-year-old mine, discovered by Alexander
                the Great's army in 326 BC, produces the world's purest pink salt.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our founder, inspired by a visit to the mine in 2015, recognized the opportunity to bring authentic
                Himalayan salt directly to businesses worldwide. What started as a passion for genuine salt products has
                evolved into a comprehensive natural products company, now also sourcing premium rice from the fertile
                plains of Punjab, organic wheat from sustainable farms, and nutrient-rich oats from trusted growers.
                <strong className="block mt-2">
                  We've built strong partnerships with premium product makers across Asia, ensuring authentic sourcing
                  and exceptional quality in every shipment.
                </strong>
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 theme-text-primary" />
                  <span className="text-gray-700">Direct mine-to-market supply chain for salt products</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 theme-text-primary" />
                  <span className="text-gray-700">Partnerships with premium grain farmers across Asia</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 theme-text-primary" />
                  <span className="text-gray-700">Guaranteed authenticity and purity across all product lines</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 theme-text-primary" />
                  <span className="text-gray-700">Supporting local communities and sustainable farming</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 theme-text-primary" />
                  <span className="text-gray-700">Exclusive access to premium grade products</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 theme-text-primary" />
                  <span className="text-gray-700">Strong partnerships with premium Asian product makers</span>
                </div>
              </div>
              <Link to="/about">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Learn Our Complete Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dptmeakuy/image/upload/v1749546755/%DA%A9%DA%BE%DB%8C%D9%88%DA%91%DB%81_%D9%86%D9%85%DA%A9_%DA%A9%DB%8C_%DA%A9%D8%A7%D9%86_plrhsy.jpg"
                alt="Khewra Salt Mine and grain farms"
                className="rounded-lg shadow-xl h-[800px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">From Mine To You</h3>
                <p className="text-orange-200">Authentic sourcing since 2015</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
