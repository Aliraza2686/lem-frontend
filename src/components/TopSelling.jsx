import React from 'react'
import { topSellingProducts } from '../lib/utills'
import { Card, CardContent, CardHeader, CardTitle } from './card'
import { Badge } from './badge'
import { Star } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './button'

export const TopSelling = () => {
 
    const navigate = useNavigate();
  return (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Selling Bulk Products</h2>
            <p className="text-xl text-gray-600">Our most popular wholesale items trusted by businesses worldwide</p>
            <Button onClick={() => navigate("/products")} className="w-[200px] mt-5 bg-green-600 hover:bg-black text-white">View All Products</Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topSellingProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product?.image || "/placeholder.svg"}
                      alt={product?.name}
                      className="w-full  h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* <Badge className="absolute top-3 left-3 bg-orange-500">Best Seller</Badge> */}
                    <Badge className="absolute top-3 right-3 bg-green-600">Bulk Only</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3 hidden">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                  </div>
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  <p className="text-sm text-gray-600 mb-3">{product.category}</p>
                  <div className="flex justify-between items-center mb-4">
                    {/* <span className="font-bold theme-text-primary text-lg">{product.price}</span> */}
                    {/* <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">Min: {product.bulkMin}</span> */}
                  </div>
                  <Link to={`/contact?id=${product?.id}`}>
                    <Button className="w-full bg-green-600 hover:bg-black text-white">Get a Quote</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}
