import { Factory, Package, Shield, Truck } from 'lucide-react'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './card'

export const Features = () => {
    const features = [
        {
          icon: Factory,
          title: "Direct from Khewra Salt Mine",
          description:
            "We are the first company in the world to source directly from the authentic Khewra Salt Mine in Pakistan, plus premium rice, wheat, and oats from our trusted partners across Asia",
        },
        {
          icon: Package,
          title: "Bulk Orders Only",
          description:
            "Minimum order quantities ensure the best wholesale pricing for your business across all product categories",
        },
        {
          icon: Shield,
          title: "Quality Guaranteed",
          description: "Every product undergoes rigorous testing to meet our premium standards, from salt to grains",
        },
        {
          icon: Truck,
          title: "Worldwide Shipping",
          description: "We ship globally to over 50 countries with reliable tracking and insurance for all bulk orders",
        },
      ]
      
  return (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Lumina Earth Minerals?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another supplier - we're your direct connection to the world's finest natural products,
              from authentic Himalayan salt to premium grains
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center border-2 border-green-200 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}
