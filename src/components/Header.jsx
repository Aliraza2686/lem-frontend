import React from "react";
import {
  Mountain,
  Sparkles,
  ArrowRight,
  Package,
  Factory,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "./button";
import { Badge } from "./badge";


export const Header = () => {
  const stats = [
    { number: "500+", label: "Business Clients" },
    { number: "70+", label: "Product Lines" },
    { number: "15", label: "Countries Served" },
    { number: "99%", label: "Customer Satisfaction" },
  ];
  return (
    <div>

      <div>
        <div className="bg-gradient-to-r from-green-600 to-emerald-700">
          <section className="relative theme-gradient text-white py-24 overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Mountain className="h-10 w-10" />
                    <span className="text-3xl font-bold">
                      Lumina Earth Minerals
                    </span>
                  </div>
                  <Badge className="bg-orange-500 text-white mb-4 text-sm px-3 py-1">
                    🏆 First Company Direct from Khewra Salt Mine
                  </Badge>
                  <h1 className="text-6xl font-bold mb-6 leading-tight">
                    Premium Natural Products
                    <span className="text-green-200"> for Your Business</span>
                  </h1>
                  <p className="text-xl mb-8 text-green-100 leading-relaxed">
                    The world’s first company sourcing directly from the Khewra Salt Mine in Pakistan — delivering high-quality Himalayan salt products for global wholesale buyers
                    <strong className="block mt-2 text-white">
                      Bulk quantities only - Quality guaranteed.
                    </strong>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Link to="/contact">
                      <Button
                        size="lg"
                        className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-4"
                      >
                        <Sparkles className="mr-2 h-5 w-5" />
                        Get Bulk Quote
                      </Button>
                    </Link>
                    <Link to="/products">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-green-700 text-lg px-8 py-4"
                      >
                        View Products
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 hidden">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-white">
                          {stat.number}
                        </div>
                        <div className="text-sm text-green-200">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <img
                    // src="https://res.cloudinary.com/dptmeakuy/image/upload/v1743223419/byhp3qsq59kzlzh9wvpq.jpg"
                    src="https://res.cloudinary.com/dptmeakuy/image/upload/v1755945557/Himalayan_salt_room_in_gran_canaria_aesthetic_spa_kgub7l.jpg"
                    alt="Khewra Salt Mine products and premium grains showcase"
                    width={700}
                    height={600}
                    className="rounded-lg shadow-2xl w-[700px] h-[600px]"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white text-green-700 p-6 rounded-lg shadow-lg max-w-xs">
                    <div className="flex items-center gap-3">
                      <Factory className="h-8 w-8 text-orange-500" />
                      <div>
                        <div className="font-bold text-lg">
                          Khewra Salt Mine
                        </div>
                        <div className="text-sm text-gray-600">
                          Direct Source Partnership
                        </div>
                        <div className="text-xs text-orange-600 font-medium">
                          World&apos;s First Direct Supplier
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-6 -right-6 theme-bg-primary border text-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2">
                      <Package className="h-6 w-6" />
                      <div>
                        <div className="font-bold">Bulk Only</div>
                        <div className="text-sm">Wholesale Pricing</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
