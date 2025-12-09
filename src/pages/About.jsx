
import { Mountain, Leaf, Award, Users, Globe, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/card"
import { Badge } from "../components/badge"
import { NavLayout } from "../components/layouts/NavLayout"

export const About = () => {
  return (
    <NavLayout>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Mountain className="h-12 w-12" />
              <span className="text-3xl font-bold">Lumina Earth Minerals</span>
            </div>
            <h1 className="text-4xl font-bold mb-6">About Our Company</h1>
            <p className="text-xl text-green-100">
              Your trusted wholesale partner for premium natural products since 2015. We source the finest natural
              products from around the world to bring you quality, authenticity, and value in every order.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2015, Lumina Earth Minerals began as a small family business with a simple mission: to provide
                businesses with access to the highest quality natural products at wholesale prices. What started as a
                passion for authentic Himalayan salt products has grown into a comprehensive natural products supplier
                serving businesses across North America.
              </p>
              <p className="text-gray-700 mb-6">
                Today, we work directly with farmers, artisans, and producers around the world to source premium natural
                products including Himalayan salt items, organic grains, natural wellness products, and organic spices.
                Our strong partnerships with premium product makers across Asia ensure authentic sourcing and
                exceptional quality. We ship worldwide to over 50 countries, making us a trusted partner for retailers,
                restaurants, spas, and wellness centers globally.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">50+</div>
                  <div className="text-sm text-gray-600">Product Lines</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dptmeakuy/image/upload/v1749547014/368171d2-f64c-42c5-9e7d-a4dea0a4b8c0_lk6jrz.jpg"
                alt="Our facility"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>100% Natural</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We source only the purest, most natural products without artificial additives or chemicals.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Quality Assured</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every product undergoes rigorous quality testing to ensure it meets our high standards.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Customer First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your success is our success. We provide personalized service and support for every client.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Global Sourcing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We work with trusted suppliers worldwide to bring you authentic products from their origins.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Ethical Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We ensure fair trade practices and support sustainable farming and production methods.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Mountain className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Authentic Origins</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All our products are sourced from their authentic origins, ensuring genuine quality and heritage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50 hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Quality</h2>
            <p className="text-lg text-gray-600">Our commitment to quality is backed by industry certifications</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Badge className="mb-3 bg-green-600">USDA Organic</Badge>
                <h4 className="font-semibold mb-2">Organic Certified</h4>
                <p className="text-sm text-gray-600">Our organic products are USDA certified organic</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Badge className="mb-3 bg-blue-600">ISO 9001</Badge>
                <h4 className="font-semibold mb-2">Quality Management</h4>
                <p className="text-sm text-gray-600">ISO 9001 certified quality management system</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Badge className="mb-3 bg-purple-600">Fair Trade</Badge>
                <h4 className="font-semibold mb-2">Fair Trade Certified</h4>
                <p className="text-sm text-gray-600">Supporting fair wages and sustainable practices</p>
              </CardContent>
            </Card>
            {/* <Card className="text-center">
              <CardContent className="p-6">
                <Badge className="mb-3 bg-orange-600">FDA Approved</Badge>
                <h4 className="font-semibold mb-2">FDA Compliant</h4>
                <p className="text-sm text-gray-600">All food products meet FDA safety standards</p>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>
    </div>
    </NavLayout>
  )
}
