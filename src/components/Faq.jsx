import { useState } from 'react';
import { ChevronDown, Package, Shield, Globe, Truck, Award, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FAQ({ isHome = false }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      category: "Products & Services",
      icon: Package,
      questions: [
        {
          q: "What Himalayan salt products does Lumina Earth Minerals LLP offer?",
          a: "We specialize in bulk exports of premium Himalayan salt products including edible pink salt (various grain sizes), decorative salt lamps, livestock lick salt blocks, and pink salt grains for industrial and culinary applications. All products are sourced from authentic Himalayan salt mines."
        },
        {
          q: "Do you sell retail quantities or only bulk orders?",
          a: "Lumina Earth Minerals LLP exclusively handles bulk wholesale orders for B2B clients, distributors, and large-scale businesses. We do not offer retail or small quantity sales, ensuring competitive pricing for volume purchases."
        },
        {
          q: "What makes your Himalayan salt authentic?",
          a: "Our salt is sourced directly from the Khewra Salt Mine in Pakistan, one of the world's oldest and largest salt mines. Each batch comes with certificates of authenticity, mineral analysis reports, and documentation proving its genuine Himalayan origin."
        },
        {
          q: "What grain sizes are available for edible salt?",
          a: "We offer multiple grain sizes including fine powder, medium grains (1-3mm), coarse grains (3-5mm), and extra coarse (5-8mm). Custom grain specifications can be arranged for large orders to meet your specific requirements."
        }
      ]
    },
    {
      category: "Ordering & Pricing",
      icon: DollarSign,
      questions: [
        {
          q: "What is the minimum order quantity (MOQ)?",
          a: "Our MOQ varies by product type: Edible salt starts at 5 metric tons, salt lamps at 1000 pieces, and lick salt blocks at 2 metric tons. Contact our sales team for specific product MOQs and volume-based pricing tiers."
        },
        {
          q: "How do I request a quote?",
          a: "Simply contact us via email or phone with your product requirements, desired quantity, and shipping destination. Our team will provide a detailed quote within 24-48 hours including product pricing, packaging options, and shipping estimates."
        },
        {
          q: "What payment terms do you offer?",
          a: "We accept various payment methods including wire transfer, Letter of Credit (L/C), and other internationally recognized payment instruments. Payment terms are negotiable based on order volume and client relationship."
        },
        {
          q: "Are there discounts for large orders?",
          a: "Yes, we offer tiered pricing with significant discounts for larger volume orders. Long-term contracts and repeat customers receive preferential pricing. Contact us to discuss custom pricing for your specific needs."
        }
      ]
    },
    {
      category: "Shipping & Logistics",
      icon: Truck,
      questions: [
        {
          q: "Which countries do you ship to?",
          a: "Lumina Earth Minerals LLP ships worldwide to all major markets including North America, Europe, Asia, Middle East, and Australia. We have extensive experience with international customs and documentation requirements."
        },
        {
          q: "What are the typical shipping times?",
          a: "Shipping times depend on destination and shipping method. Sea freight typically takes 20-45 days, while air freight takes 5-10 days. We provide detailed shipping timelines with every quote and offer tracking for all shipments."
        },
        {
          q: "Who handles customs clearance?",
          a: "We can arrange delivery on various Incoterms (FOB, CIF, DDP, etc.). We provide all necessary export documentation and can assist with customs clearance procedures. Our logistics team ensures smooth international shipping."
        },
        {
          q: "How is the salt packaged for shipping?",
          a: "Products are packed in food-grade PP bags, jute bags, or custom packaging as per client requirements. Salt lamps are individually wrapped and boxed. All packaging meets international shipping standards and ensures product integrity."
        }
      ]
    },
    {
      category: "Quality & Certification",
      icon: Shield,
      questions: [
        {
          q: "What certifications does your company hold?",
          a: "Lumina Earth Minerals LLP is a registered and certified company with all necessary export licenses. Our products meet international food safety standards including HACCP, ISO, and we provide COA (Certificate of Analysis) with each shipment."
        },
        {
          q: "How do you ensure product quality?",
          a: "We implement strict quality control at every stage from mining to packaging. Each batch undergoes laboratory testing for purity, mineral content, and contaminants. Third-party testing is available upon request."
        },
        {
          q: "Can you provide sample shipments?",
          a: "Yes, we offer product samples for quality evaluation. Sample costs and shipping are typically borne by the buyer but may be adjusted against future bulk orders. Contact us to arrange sample shipment."
        },
        {
          q: "What is your return and refund policy?",
          a: "We stand behind our product quality. If products do not meet agreed specifications, we will work with you to resolve the issue through replacement or refund. All claims must be made within 7 days of delivery with supporting documentation."
        }
      ]
    },
    {
      category: "Company Information",
      icon: Award,
      questions: [
        {
          q: "How long has Lumina Earth Minerals LLP been in business?",
          a: "Lumina Earth Minerals LLP is an established, registered company specializing in Himalayan salt exports. We have built strong relationships with miners, manufacturers, and international clients, ensuring reliable supply chains and consistent quality."
        },
        {
          q: "Why should I choose Lumina Earth Minerals LLP?",
          a: "We offer authentic Himalayan salt products, competitive bulk pricing, reliable delivery, comprehensive documentation, and exceptional customer service. As a registered and reliable company, we prioritize long-term partnerships and customer satisfaction."
        },
        {
          q: "Do you offer private labeling or custom packaging?",
          a: "Yes, we provide private labeling and custom packaging solutions for bulk orders. This includes custom bag designs, logos, and product information printed in your preferred language. Minimum quantities apply for custom packaging."
        },
        {
          q: "How can I contact your sales team?",
          a: "You can reach our dedicated sales team via email, phone, or through our website contact form. We respond to all inquiries within 24 hours and are happy to discuss your specific requirements and arrange video calls if needed."
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap((cat, catIdx) => 
    cat.questions.map((q, qIdx) => ({
      ...q,
      category: cat.category,
      icon: cat.icon,
      index: `${catIdx}-${qIdx}`
    }))
  );

  const filteredQuestions = searchQuery
    ? allQuestions.filter(item => 
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allQuestions;

  const displayedQuestions = isHome ? filteredQuestions.slice(0, 5) : filteredQuestions;

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-red-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Globe className="w-6 h-6" />
              <h1 className="text-2xl font-bold">Lumina Earth Minerals LLP</h1>
            </div>
          </div>
          <p className="text-lg text-gray-700 mb-2">Premium Himalayan Salt Exporters</p>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Registered & Reliable Bulk Supplier of Edible Salt, Salt Lamps, Lick Salt & Pink Salt Grains
          </p>
        </div>

        {/* Search Bar - Only show on full FAQ page */}
        {!isHome && (
          <div className="mb-8 animate-slide-up">
            <div className="relative">
              <input
                type="text"
                placeholder="Search FAQs... (e.g., 'shipping', 'bulk orders', 'certification')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-12 text-gray-700 bg-white border-2 border-orange-200 rounded-2xl shadow-lg focus:outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            {searchQuery && (
              <p className="mt-3 text-sm text-gray-600 animate-fade-in">
                Found {filteredQuestions.length} result{filteredQuestions.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>
        )}

        {/* FAQ Items */}
        <div className="space-y-4">
          {displayedQuestions.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl shadow-lg animate-fade-in">
              <p className="text-gray-500 text-lg">No FAQs found matching your search.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 text-orange-600 hover:text-orange-700 font-medium underline"
              >
                Clear search
              </button>
            </div>
          ) : (
            displayedQuestions.map((item) => {
              const IconComponent = item.icon;
              const isOpen = openIndex === item.index;
              
              return (
                <div
                  key={item.index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-orange-200 animate-slide-up"
                  style={{ animationDelay: `${parseInt(item.index.split('-')[1]) * 50}ms` }}
                >
                  <button
                    onClick={() => toggleQuestion(item.index)}
                    className="w-full px-6 py-5 text-left flex items-start gap-4 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center shadow-md">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-grow min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="inline-block px-3 py-1 text-xs font-semibold text-orange-700 bg-orange-100 rounded-full mb-2">
                            {item.category}
                          </span>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1 pr-4">
                            {item.q}
                          </h3>
                        </div>
                        <div className="flex-shrink-0">
                          <ChevronDown 
                            className={`w-6 h-6 text-orange-600 transition-transform duration-300 ${
                              isOpen ? 'transform rotate-180' : ''
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 pl-20">
                      <p className="text-gray-700 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* View All Button - Only on Home Page */}
        {isHome && (
          <div className="mt-8 text-center animate-fade-in">
            <a
              href="/faq"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-pink-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>View All FAQs</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="mt-3 text-sm text-gray-600">
              Showing {displayedQuestions.length} of {allQuestions.length} questions
            </p>
          </div>
        )}

        {/* Footer CTA - Only show on full FAQ page */}
        {!isHome && (
          <div className="mt-12 text-center bg-gradient-to-r from-orange-600 to-pink-600 rounded-2xl shadow-xl p-8 text-white animate-fade-in">
            <h3 className="text-2xl font-bold mb-3">Still Have Questions?</h3>
            <p className="mb-6 text-orange-100">
              Our team is ready to assist you with your bulk Himalayan salt requirements
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* <button className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Contact Sales Team
              </button> */}
              <Link to="/contact" className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Request Quote
              </Link>
                {/* <Link to="/contact" className="px-8 py-3 bg-orange-700 text-white font-semibold rounded-xl hover:bg-orange-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Request Quote
              </Link> */}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}