import React from "react";
import { Badge } from "./badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./button";

export const MiniJumbo = () => {
  const categories = {
    "salt-products": {
      name: "Salt Products",
      description:
        "Premium Himalayan salt products including lamps, bricks, and edible salt varieties - Direct from Khewra Salt Mine",
      products: [
        {
          id: "himalayan-salt-lamp-large",
          name: "Globe shape Himalayan Salt Lamp",
          description:
            "Natural air purifying salt lamp with wooden base - Direct from Khewra Mine",
          price: "Starting at $45",
          priceValue: 45,
          image:
            "https://res.cloudinary.com/dptmeakuy/image/upload/v1735125755/obu9jkazpzsxynhdy2fl.jpg",
          rating: 4.8,
          bulkMin: "10 units",
          category: "Salt Lamps",
          popularity: 95,
        },
        {
          id: "pink-salt-bricks",
          name: "Pink Salt Bricks for Cooking",
          description:
            "Pure Himalayan salt bricks perfect for grilling and serving",
          price: "Starting at $25",
          priceValue: 25,
          image:
            "https://res.cloudinary.com/dptmeakuy/image/upload/v1749544296/Gourmet_Himalayan_Pink_Salt_-_5_Pound_Brick_by_u3uxbv.jpg",
          rating: 4.7,
          bulkMin: "20 units",
          category: "Salt Bricks",
          popularity: 88,
        },
        {
          id: "edible-pink-salt",
          name: "Pink Salt Grains",
          description: "Premium grade pink salt for culinary use",
          price: "Starting at $15/kg",
          priceValue: 15,
          image:
            "https://res.cloudinary.com/dptmeakuy/image/upload/v1749540304/__zwszcp.jpg",
          rating: 4.9,
          bulkMin: "25kg",
          category: "Edible Salt",
          popularity: 92,
        },
        {
          id: "salt-candle-holders",
          name: "Lick Salt ",
          description: "Handcrafted lick salt for animals",
          price: "Starting at $18",
          priceValue: 18,
          image:
            "https://res.cloudinary.com/dptmeakuy/image/upload/v1749545593/animal_lick_salt_piece_is_full_of_magniciem_and_uo9qym.jpg",
          rating: 4.6,
          bulkMin: "15 units",
          category: "Salt Candle Holders",
          popularity: 75,
        },
        {
          id: "salt-tiles",
          name: "Customizable shape salt lamps",
          description:
            "Customized shape salt lamps for decoration and wellness",
          price: "Starting at $35",
          priceValue: 35,
          image:
            "https://res.cloudinary.com/dptmeakuy/image/upload/v1749546206/14e47b8d-93e8-447f-9f72-81d888aeeb0b_xqcfvo.jpg",
          rating: 4.5,
          bulkMin: "12 units",
          category: "Salt Tiles",
          popularity: 70,
        },
        {
          id: "small-salt-lamps",
          name: "Natural Himalayan Salt Lamps",
          description: "Compact salt lamps perfect for desks and small spaces",
          price: "Starting at $22",
          priceValue: 22,
          image:
            "https://res.cloudinary.com/dptmeakuy/image/upload/v1749545461/Discover_the_serene_glow_of_Himalayan_salt_lamps_btyqrg.jpg",
          rating: 4.7,
          bulkMin: "25 units",
          category: "Salt Lamps",
          popularity: 85,
        },
      ],
    },
  };

  const category = categories["salt-products"];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Header */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
            <p className="text-xl text-green-100 mb-6">
              {category.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="theme-bg-primary text-white text-lg px-4 py-2">
                {category.products.length} Products Available
              </Badge>
              <Badge className="bg-orange-500 text-white text-lg px-4 py-2">
                Bulk Orders Only
              </Badge>
              <Badge className="bg-red-500 text-white text-lg px-4 py-2">
                🏆 Direct from Khewra Mine
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Search and Filter Bar */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                {/* <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div> */}
              </div>

              {/* Filters */}
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-gray-600" />
                  <span className="font-medium text-sm">Filter:</span>
                </div>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Product Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Products</SelectItem>
                    {subcategories.map((subcat) => (
                      <SelectItem key={subcat} value={subcat}>
                        {subcat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="name">Name A-Z</SelectItem>
                  </SelectContent>
                </Select>
              </div> */}
            </div>

            {/* Results count */}
            {/* <div className="mt-4 text-sm text-gray-600">
              Showing {filteredAndSortedProducts.length} of{" "}
              {category.products.length} products
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== "all" && ` in ${selectedCategory}`}
            </div> */}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.products.map((product) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-3 right-3 bg-green-600">
                        Bulk Available
                      </Badge>
                   
                        <Badge className="absolute top-3 left-3 bg-red-500 text-xs">
                          Khewra Mine
                        </Badge>
                   
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">
                        ({product.rating})
                      </span>
                    </div>
                    <CardTitle className="text-lg mb-2">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="mb-3 text-sm">
                      {product.description}
                    </CardDescription>
                    <div className="flex justify-between items-center mb-4">
                      {/* <span className="font-bold text-green-600">{product.price}</span> */}
                      {/* <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        Min: {product.bulkMin}
                      </span> */}
                    </div>
                    <Link to={`/contact?id=${product.id}`}>
                      <Button className="w-full text-white bg-green-600 hover:bg-green-700">
                        Get a Quote
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
};
