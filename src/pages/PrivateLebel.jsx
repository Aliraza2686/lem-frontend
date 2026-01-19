import React from 'react';
import { Package, CheckCircle, Clock } from 'lucide-react';
import { NavLayout } from '../components/layouts/NavLayout';
import { Link } from 'react-router-dom';

export default function PrivateLabelingPage() {
  const products = [
    "Edible Food-Grade Salts (Himalayan Pink, White, Black)",
    "Salt Grains in Various Sizes",
    "Animal Salt Lick Blocks",
    "Salt Lamps (Private Label Packaging)",
    "Salt Bricks & Salt Tiles (Private Label Packaging)"
  ];

  const customization = [
    { title: "Packaging", items: ["Pouches", "Bulk export bags", "Eco-friendly options"] },
    { title: "Labeling", items: ["Buyer-provided logo & label design", "Sticker labeling on packs", "Product information labels (as provided by buyer)"] },
    { title: "Pack Sizes", items: ["Customizeable"] }
  ];

const process = [
  { step: "1", title: "Inquiry", desc: "Share product, quantity, and destination" },
  { step: "2", title: "Quotation", desc: "We confirm pricing, packaging, and MOQ" },
  { step: "3", title: "Label Approval", desc: "Buyer provides label or sticker design" },
  { step: "4", title: "Packing & Labeling", desc: "Salt is packed and labeled as approved" },
  { step: "5", title: "Order Confirmation", desc: "Final weight check and packing list" },
  { step: "6", title: "Dispatch", desc: "Shipment prepared with export documents" }
];


  return (
    <NavLayout>
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-3">Private Labeling & Private Label Packaging Services</h1>
          <p className="text-xl text-green-50">Build Your Brand with Premium Salt Products</p>
        </div>
      </div>

      {/* What is Private Labeling */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Private Labeling?</h2>
        <p className="text-lg text-gray-700 mb-3">
         Private labeling allows you to sell high-quality salt products under your own brand name.
We supply, pack, and label premium salt products using your branding and packaging design.
        </p>
        <p className="text-lg text-gray-700">
          Perfect for importers, distributors, retailers, and brands who want premium salt products without investing in production facilities.
        </p>
      </div>

      {/* Products */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Products Available</h2>
          <div className="space-y-3">
            {products.map((product, idx) => (
              <div key={idx} className="flex items-start bg-white p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-gray-800">{product}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customization */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Customization Options</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {customization.map((item, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-green-600 mb-4">{item.title}</h3>
              <ul className="space-y-2">
                {item.items.map((option, i) => (
                  <li key={i} className="text-gray-700">• {option}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Key Info */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-12">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8 text-center">
          <div>
            <Package className="w-10 h-10 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">MOQ</h3>
            <p className="text-green-50">MOQ starts from 100 kg, depending on product and packaging.</p>
          </div>
          <div>
            <Clock className="w-10 h-10 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Lead Time</h3>
            <p className="text-green-50">7–15 working days after label confirmation.</p>
          </div>
          {/* <div>
            <Award className="w-10 h-10 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Standards</h3>
            <p className="text-green-50">ISO, HACCP certified</p>
          </div> */}
        </div>
      </div>

      {/* Process */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {process.map((item, idx) => (
            <div key={idx} className="border-l-4 border-green-600 pl-4">
              <div className="text-2xl font-bold text-green-600 mb-2">Step {item.step}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quality */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Quality & Export Standards</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Control</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Testing at every production stage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Third-party laboratory certifications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Food safety compliance</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Export Documentation</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Complete export certificates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Health & phytosanitary certificates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Customs documentation support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-xl text-green-50 mb-8">
            Contact us for a detailed quotation.
             {/* and product samples */}
          </p>
          <Link to="/contact"  className="bg-white text-green-700 px-8 py-3 rounded-lg text-lg font-bold hover:bg-gray-50 transition-colors">
           Contact Us
          </Link>
        </div>
      </div>
    </div>
    </NavLayout>
  );
}