import { useState } from 'react';
import { ChevronDown, Package, Shield, Globe, Truck, Award, DollarSign, Tag } from 'lucide-react';
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
          q: "What salt products does Lumina Earth Minerals offer?",
          a: "We supply export-quality Himalayan salt products including edible food-grade salts (pink, white, and black), salt grains in various sizes, animal salt lick blocks, salt lamps, and salt bricks. Products are available for bulk supply and private label packaging."
        },
        {
          q: "Do you sell retail quantities?",
          a: "No, we work exclusively with B2B clients. However, we support smaller bulk orders for new brands and private label customers, starting from lower minimum quantities depending on the product."
        },
        {
          q: "Where is your Himalayan salt sourced from?",
          a: "Our salt is sourced from the Himalayan salt region in Punjab, Pakistan, including the Khewra salt belt, and supplied through established local partners."
        },
        {
          q: "What grain sizes are available for edible salt?",
          a: "We offer fine, medium, and coarse grain sizes suitable for cooking, seasoning, and food processing. Grain size availability may vary depending on order volume."
        }
      ]
    },

    {
      category: "Private Labeling",
      icon: Tag,
      questions: [
        {
          q: "Do you offer private labeling services?",
          a: "Yes. We offer private label packaging services using plain pouches or bags with buyer-provided sticker or label designs. This service is ideal for brands starting or testing the market."
        },
        {
          q: "What products are available for private labeling?",
          a: "Private labeling is available for edible salts, salt grains, animal salt lick blocks, salt lamps (packaging only), and salt bricks or tiles (outer packaging only)."
        },
        {
          q: "Do you provide printed packaging?",
          a: "Currently, private labeling is offered through plain packaging with sticker labeling. Printed packaging may be discussed for larger or repeat orders."
        },
        {
          q: "Do you provide samples before order?",
          a: "No, samples are not provided for initial private label orders. Detailed product images, specifications, and packaging details are shared for confirmation before production."
        }
      ]
    },

    {
      category: "Ordering & Pricing",
      icon: DollarSign,
      questions: [
        {
          q: "What is the minimum order quantity (MOQ)?",
          a: "MOQ typically starts from 100 kg for edible salt products and varies by product type and packaging. Exact MOQ is confirmed during quotation."
        },
        {
          q: "How do I request a quote?",
          a: "You can contact us with product type, required quantity, packaging preference, and destination country. We will respond with pricing and lead time details."
        },
        {
          q: "How is pricing calculated?",
          a: "Pricing depends on product type, quantity, packaging, labeling requirements, and destination. Private labeling costs are calculated separately from product pricing."
        },
        {
          q: "What payment methods do you accept?",
          a: "Payments are accepted via international bank transfer. Payment terms are confirmed during order confirmation."
        }
      ]
    },

    {
      category: "Shipping & Logistics",
      icon: Truck,
      questions: [
        {
          q: "Which countries do you ship to?",
          a: "We support international shipments worldwide, subject to local import regulations and logistics feasibility."
        },
        {
          q: "What shipping methods are available?",
          a: "Shipping options include air freight and sea freight (LCL or FCL), depending on order size and destination."
        },
        {
          q: "How long does order processing take?",
          a: "Orders are typically packed and ready for dispatch within 7–15 working days after label and order confirmation."
        },
        {
          q: "Do you provide export documentation?",
          a: "Yes. We provide standard export documents such as commercial invoice, packing list, and certificate of origin when required."
        }
      ]
    },

    {
      category: "Quality & Compliance",
      icon: Shield,
      questions: [
        {
          q: "How do you ensure product quality?",
          a: "We ensure quality through careful sourcing, clean handling, accurate weight control, and proper packaging suitable for export."
        },
        {
          q: "Do you provide laboratory testing or certifications?",
          a: "Third-party testing and certifications can be arranged upon buyer request, subject to additional cost and feasibility."
        },
        {
          q: "Is your salt food-grade?",
          a: "Yes, edible salt supplied for food use is food-grade and suitable for culinary applications."
        }
      ]
    },

    {
      category: "Company Information",
      icon: Award,
      questions: [
        {
          q: "What type of clients do you work with?",
          a: "We work with importers, distributors, wholesalers, and brand owners looking for reliable salt supply and private label packaging."
        },
        {
          q: "Why choose Lumina Earth Minerals?",
          a: "Lumina Earth Minerals is based in Khewra, Pakistan, home to the world-famous Himalayan salt mines. Operating directly from the source allows us close access to authentic Himalayan salt, better supply control, and reliable quality for export and private label orders."
        }

        ,
        {
          q: "How can I contact you?",
          a: "You can contact us via email, phone, or through the website contact form. We aim to respond to all inquiries promptly."
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
                            className={`w-6 h-6 text-orange-600 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''
                              }`}
                          />
                        </div>
                      </div>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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