import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const PHONE_NUMBER = "+92 3271177788"
export const EMAIL = "contact@luminaearthminerals.com"
export const ADDRESS = "Main pink salt market Khewra Punjab, Pakistan"

export const topSellingProducts = [
  {
    id: "small-salt-lamps",
    name: "Natural Himalayan Salt Lamps",
    description: "Compact salt lamps perfect for desks and small spaces",
    price: "Starting at $22",
    priceValue: 22,
    image: "https://res.cloudinary.com/dptmeakuy/image/upload/v1772107992/ChatGPT_Image_Feb_21_2026_11_52_50_AM_vqebh1.png",
    rating: 5,
    bulkMin: "25 units",
    category: "Salt Lamps",
    popularity: 85,
  },
  {
    id: "edible-pink-salt",
    name: "Pink Salt Grains",
    description: "Premium grade pink salt for culinary use",
    price: "Starting at $15/kg",
    priceValue: 15,
    image: "https://res.cloudinary.com/dptmeakuy/image/upload/v1772107986/ChatGPT_Image_Feb_21_2026_11_36_43_AM_i83jd1.png",
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
    image: "https://res.cloudinary.com/dptmeakuy/image/upload/v1749545593/animal_lick_salt_piece_is_full_of_magniciem_and_uo9qym.jpg",
    rating: 4.6,
    bulkMin: "15 units",
    category: "Animal Lick Salt",
    popularity: 75,
  },
  {
    id: "salt-tiles",
    name: "Customizable shape salt lamps",
    description: "Customized shape salt lamps for decoration and wellness",
    price: "Starting at $35",
    priceValue: 35,
    image: "https://res.cloudinary.com/dptmeakuy/image/upload/v1749546206/14e47b8d-93e8-447f-9f72-81d888aeeb0b_xqcfvo.jpg",
    rating: 4.5,
    bulkMin: "12 units",
    category: "Salt Tiles",
    popularity: 70,
  },

]




export const   products =  [
  // {
  //   id: "himalayan-salt-lamp-large",
  //   name: "Globe shape Himalayan Salt Lamp",
  //   description: "Natural air purifying salt lamp with wooden base - Direct from Khewra Mine",
  //   price: "Starting at $45",
  //   priceValue: 45,
  //   image: "https://res.cloudinary.com/dptmeakuy/image/upload/v1735125755/obu9jkazpzsxynhdy2fl.jpg",
  //   rating: 4.8,
  //   bulkMin: "10 units",
  //   category: "Salt Lamps",
  //   popularity: 95,
  // },
  {
    id: "pink-salt-bricks",
    name: "Pink Salt Bricks for Cooking",
    description: "Pure Himalayan salt bricks perfect for grilling and serving",
    price: "Starting at $25",
    priceValue: 25,
    image: "https://res.cloudinary.com/dptmeakuy/image/upload/v1749544296/Gourmet_Himalayan_Pink_Salt_-_5_Pound_Brick_by_u3uxbv.jpg",
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
    image: "https://res.cloudinary.com/dptmeakuy/image/upload/v1749540304/__zwszcp.jpg",
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
    image: "https://res.cloudinary.com/dptmeakuy/image/upload/v1749545593/animal_lick_salt_piece_is_full_of_magniciem_and_uo9qym.jpg",
    rating: 4.6,
    bulkMin: "15 units",
    category: "Salt Candle Holders",
    popularity: 75,
  },
  {
    id: "salt-tiles",
    name: "Customizable shape salt lamps",
    description: "Customized shape salt lamps for decoration and wellness",
    price: "Starting at $35",
    priceValue: 35,
    image: "https://res.cloudinary.com/dptmeakuy/image/upload/v1749546206/14e47b8d-93e8-447f-9f72-81d888aeeb0b_xqcfvo.jpg",
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
    image: "https://res.cloudinary.com/dptmeakuy/image/upload/v1749545461/Discover_the_serene_glow_of_Himalayan_salt_lamps_btyqrg.jpg",
    rating: 4.7,
    bulkMin: "25 units",
    category: "Salt Lamps",
    popularity: 85,
  },
]


export const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",

  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",

  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",

  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",

  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",

  "Fiji",
  "Finland",
  "France",

  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",

  "Haiti",
  "Honduras",
  "Hungary",

  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",

  "Jamaica",
  "Japan",
  "Jordan",

  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",

  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",

  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",

  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",

  "Oman",

  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",

  "Qatar",

  "Romania",
  "Russia",
  "Rwanda",

  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",

  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",

  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",

  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",

  "Yemen",

  "Zambia",
  "Zimbabwe",

  "Other",
];

export const productsfour = [
  {
    id: 'salt',
    name: 'Himalayan Salt',
    category: 'Natural Mineral',
    origin: 'Khewra Salt Range, Punjab, Pakistan',
    desc: 'Premium Himalayan salt sourced directly from the Khewra Salt Range — the second largest salt mine in the world. Supplied for edible, decorative, therapeutic, and industrial applications, in block, granule, or powder form.',
    heroNote: 'Mined from a 600-million-year-old marine deposit',
    applications: ['Food & Culinary', 'Spa & Wellness', 'Decorative Lighting', 'Animal Nutrition', 'Industrial De-icing'],
    packaging: ['25kg / 50kg PP bags', 'Jumbo bags (1 ton)', 'Custom retail pouches', 'Private label cartons'],
    variants: [
      {
        key: 'pink',
        label: 'Pink Salt',
        swatch: '#e8a598',
        desc: 'The signature Himalayan variety, prized for its mineral-rich rosy hue. The most requested grade for food and lamp applications.',
        purity: '96–98% NaCl',
        images: [
          { src: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1772276542/1665059526_la1h31.png' },
          { src: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1772276543/1665060094_r111bw.png' },
          { src: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1772276543/1665059969_bqjght.png' },
          { src: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1772276543/1665060201_beubio.png' },

          { src: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1772276544/1665060258_vs6nfs.png' },

          { src: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1772276544/1665060301_dbof3g.png' },
          { src: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1772276545/1665060380_becase.png' },


        ],
      },
      // {
      //   key: 'white',
      //   label: 'White Salt',
      //   swatch: '#f5f3ef',
      //   desc: 'A purer, lower-iron-oxide salt layer, used widely for edible and pharmaceutical-grade requirements.',
      //   purity: '98–99% NaCl',
      //   images: [
      //     { src: '/images/salt/white-1.jpg' },
      //     { src: '/images/salt/white-2.jpg' },
      //   ],
      // },
      // {
      //   key: 'black',
      //   label: 'Black Salt (Kala Namak)',
      //   swatch: '#4a4541',
      //   desc: 'Volcanic, sulfurous salt with a distinct aroma, popular in South Asian cuisine and Ayurvedic use.',
      //   purity: '95–97% NaCl',
      //   images: [
      //     { src: '/images/salt/black-1.jpg' },
      //     { src: '/images/salt/black-2.jpg' },
      //   ],
      // },
    ],
    labReports: [
      // { name: 'NaCl Purity & Mineral Composition', file: '/reports/salt-purity.pdf', size: '1.2 MB' },
      // { name: 'Heavy Metal & Microbial Safety Report', file: '/reports/salt-safety.pdf', size: '860 KB' },
    ],
  },
  {
    id: 'bentonite',
    name: 'Bentonite',
    category: 'Industrial Mineral',
    origin: 'Khewra Range, Punjab, Pakistan',
    desc: 'High-quality bentonite clay supplied for drilling fluids, construction, foundry sand binding, and industrial manufacturing. Available crushed, powdered, or in raw uncrushed lump form.',
    heroNote: 'High swelling capacity, low impurity content',
    applications: ['Oil & Gas Drilling Mud', 'Foundry Sand Binder', 'Construction Sealants', 'Pet Litter Manufacturing', 'Wastewater Treatment'],
    packaging: ['25kg / 50kg PP bags', 'Jumbo bags (1 ton)', 'Bulk loose (truck/container)'],
    variants: [
      // {
      //   key: 'white',
      //   label: 'White Bentonite (Calcium)',
      //   swatch: '#ece6d8',
      //   desc: 'Calcium-based bentonite with high brightness, suited for cosmetics, ceramics, and paper filler applications.',
      //   purity: '85–90% Montmorillonite',
      //   images: [
      //     { src: '/images/bentonite/white-1.jpg' },
      //     { src: '/images/bentonite/white-2.jpg' },
      //   ],
      // },
      {
        key: 'brown',
        label: 'Bentonite',
        swatch: '#9c7a4f',
        desc: 'General-purpose grade widely used in foundry binding and civil construction sealing applications.',
        purity: 'Lab-tested Bentonite with 55.69% Silica and 27.70% Alumina composition, featuring ultra-low chloride (0.01%) and sulfur (0.02%) content for industrial applications.',
        images: [
          { src: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1782131837/bentonite_vjpb7f.jpg' },
          { src: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1782132478/Screenshot_2026-06-22_at_5.47.34_PM_ggolnh.png' },
        ],
      },
      // {
      //   key: 'gray',
      //   label: 'Gray Bentonite (Sodium)',
      //   swatch: '#8a8a85',
      //   desc: 'Sodium-activated bentonite with superior swelling, the standard choice for drilling mud and waterproofing.',
      //   purity: '88–92% Montmorillonite',
      //   images: [
      //     { src: '/images/bentonite/gray-1.jpg' },
      //     { src: '/images/bentonite/gray-2.jpg' },
      //   ],
      // },
      // {
      //   key: 'black',
      //   label: 'Black Bentonite',
      //   swatch: '#2e2c29',
      //   desc: 'Carbon-rich variety used in specialty drilling and select industrial filtration applications.',
      //   purity: '78–84% Montmorillonite',
      //   images: [
      //     { src: '/images/bentonite/black-1.jpg' },
      //   ],
      // },
    ],
    labReports: [
      // { name: 'Montmorillonite Content Analysis', file: '/reports/bentonite-mmt.pdf', size: '1.4 MB' },
      // { name: 'Swelling Index & Viscosity Report', file: '/reports/bentonite-swelling.pdf', size: '990 KB' },
      // { name: 'Particle Size Distribution', file: '/reports/bentonite-psd.pdf', size: '720 KB' },
    ],
  },
  {
    id: 'limestone',
    name: 'Limestone',
    category: 'Industrial Mineral',
    origin: 'Punjab & Khyber Pakhtunkhwa, Pakistan',
    desc: 'Reliable limestone supply for construction aggregate, cement manufacturing, and industrial processing, available in calibrated lump, crushed, and powdered forms.',
    heroNote: 'Consistent CaCO₃ content for cement-grade use',
    applications: ['Cement Manufacturing', 'Construction Aggregate', 'Steel Flux', 'Soil Conditioning', 'Glass Manufacturing'],
    packaging: ['50kg PP bags', 'Jumbo bags (1 ton)', 'Bulk loose (truck/container)'],
    variants: [
      {
        key: 'white',
        label: 'White Limestone',
        swatch: '#eceae3',
        desc: 'High-CaCO₃ grade preferred for cement clinker and whiteness-sensitive industrial uses.',
        purity: '',
        // purity: '92–96% CaCO₃',

        images: [
          { src: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1782131637/limestone_t3mm0w.jpg' },
          // { src: '/images/limestone/white-2.jpg' },
        ],
      },
      // {
      //   key: 'gray',
      //   label: 'Gray Limestone',
      //   swatch: '#9d9b94',
      //   desc: 'General-purpose construction-grade limestone for aggregate and flux applications.',
      //   purity: '88–93% CaCO₃',
      //   images: [
      //     { src: '/images/limestone/gray-1.jpg' },
      //   ],
      // },
    ],
    labReports: [
      // { name: 'CaCO₃ Content & Chemical Assay', file: '/reports/limestone-assay.pdf', size: '1.1 MB' },
    ],
  },
  {
    id: 'antimony',
    name: 'Antimony',
    category: 'Metallic Mineral',
    origin: 'Balochistan, Pakistan',
    desc: 'Export-grade antimony ore and concentrate sourced from Pakistan\'s mineral-rich regions, supplied to international buyers for smelting and alloy production.',
    heroNote: 'Stable supply chain with assay documentation',
    applications: ['Flame Retardants', 'Lead-Acid Battery Alloys', 'Semiconductors', 'Ammunition Alloys', 'Glass & Ceramics'],
    packaging: ['Jumbo bags (1 ton)', 'Bulk loose (truck/container)', 'Custom export crating'],
    variants: [
      {
        key: 'ore',
        label: 'Antimony Ore',
        swatch: '#6b6660',
        desc: 'Our Antimony Ore is sourced from mineral-rich deposits and is suitable for industrial processing applications.',
        purity: '38.73% Sb content',
        images: [
          { src: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1782126450/antimony2_xppsy9.png' },
          { src: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1782126445/antimony_3_f7maly.png' },
          { src: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1782126388/antimony_hucwrr.png' },

        ],
      },
      // {
      //   key: 'concentrate',
      //   label: 'Antimony Concentrate',
      //   swatch: '#403d39',
      //   desc: 'Beneficiated concentrate with elevated Sb content, ready for refining.',
      //   purity: '60–65% Sb content',
      //   images: [
      //     { src: '/images/antimony/concentrate-1.jpg' },
      //   ],
      // },
    ],
    labReports: [
      { name: 'Sb Content Assay Report', file: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1782126610/antimony_report_wrs4lz.png', size: '' },
      // { name: 'Trace Element Analysis', file: '/reports/antimony-trace.pdf', size: '680 KB' },
    ],
  },
  {
    id: 'nephrite-jade',
    name: 'Nephrite Jade',
    category: 'Natural Stone',
    origin: 'Gilgit-Baltistan, Pakistan',
    desc: 'Premium natural nephrite jade sourced from the mineral-rich mountains of northern Pakistan, available for decorative, gemstone, and collectible markets in rough and semi-polished form.',
    heroNote: 'Natural rough stone, graded by tone and translucency',
    applications: ['Gemstone Cutting', 'Decorative Carving', 'Collectible Specimens', 'Jewelry Manufacturing'],
    packaging: ['Protective crated boxes', 'Individually wrapped pieces', 'Bulk rough lots'],
    variants: [
      {
        key: 'green',
        label: 'Jade Nephrite',
        swatch: '#4f6b4a',
        desc: 'Premium deep-green nephrite jade, valued for carving, collecting, and fine gemstone work.',
        purity: 'Gem-grade rough',
        images: [
          { src: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1782127324/nepherite_sjvbkz.jpg' },
          { src: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1782126986/Nepherite_jade_2026-06-10_at_14.16.08_uo43cy.jpg' },
        ],
      },
      // {
      //   key: 'white',
      //   label: 'White Nephrite (Mutton Fat)',
      //   swatch: '#e9e4d8',
      //   desc: 'Rare creamy-white variety, highly valued by collectors and carvers alike.',
      //   purity: 'Premium-grade rough',
      //   images: [
      //     { src: '/images/jade/white-1.jpg' },
      //   ],
      // },
    ],
    labReports: [
      // { name: 'Gemological Identification Report', file: '/reports/jade-gem-id.pdf', size: '1.3 MB' },
    ],
  },
  {
    id: 'white-quartz',
    name: 'White Quartz',
    category: 'Natural Mineral',
    origin: 'Khyber Pakhtunkhwa, Pakistan',
    desc: 'High-purity white quartz suitable for glass manufacturing, industrial silica applications, and decorative landscaping or surface use.',
    heroNote: 'High SiO₂ purity with low iron contamination',
    applications: ['Glass Manufacturing', 'Silica Sand Production', 'Decorative Aggregate', 'Ceramics & Refractories'],
    packaging: ['50kg PP bags', 'Jumbo bags (1 ton)', 'Bulk loose (truck/container)'],
    variants: [
      {
        key: 'lump',
        label: 'Quartz Lump',
        swatch: '#f4f3ef',
        desc: 'Raw quartz lumps as extracted, ideal for crushing to custom specification by the buyer.',
        purity: 'White Quartz — 99.9774% SiO₂ purity',
        images: [
          { src: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1782130416/Screenshot_2026-06-22_at_5.13.06_PM_dswahr.png' },
          { src: 'https://res.cloudinary.com/dptmeakuy/video/upload/v1782130544/WhatsApp_Video_2026-06-10_at_14.14.52_bdt671.mp4' , is_video : true},
        ],
      },
      // {
      //   key: 'crushed',
      //   label: 'Crushed Quartz',
      //   swatch: '#fbfaf8',
      //   desc: 'Pre-crushed and graded quartz, sized to standard mesh ranges for direct industrial use.',
      //   purity: '98.5%+ SiO₂',
      //   images: [
      //     { src: '/images/quartz/crushed-1.jpg' },
      //   ],
      // },
    ],
    labReports: [
      { name: 'ZGQ — High-Purity White Quartz', file: 'https://res.cloudinary.com/dptmeakuy/raw/upload/v1782131383/ZGQ_Test_Report_English_hs2moa.docx', size: '' },
      { name: 'ZZEQ — Ultra-Pure Quartz', file: 'https://res.cloudinary.com/dptmeakuy/raw/upload/v1782131382/ZEQ_Test_Report_English_ksu09k.docx', size: '' },

    ],
  },
{
  id: 'silica-sand',
  name: 'Silica Sand',
  category: 'Industrial Mineral',
  origin: 'Punjab & Sindh, Pakistan',
  desc: 'Silica sand sourced from Pakistan and supplied in multiple grades for industrial applications. Available in laboratory-tested white and brown variants with custom mesh sizing, washing, grading, and bulk export packaging options.',
  heroNote: 'Laboratory-tested silica sand available in premium white and industrial-grade brown variants',

  applications: [
    'Glass Manufacturing (Premium White Grade)',
    'Foundry Operations',
    'Water Filtration Media',
    'Ceramics Production',
    'Construction Materials'
  ],

  packaging: [
    '25kg / 50kg PP bags',
    'Jumbo bags (1 ton)',
    'Bulk loose (truck/container)'
  ],

  variants: [
    {
      key: 'graded',
      label: 'White Silica Sand',
      swatch: '#d8c8aa',

      desc: 'High-purity white silica sand supported by chemical analysis showing exceptionally high silica content and very low impurity levels. Suitable for demanding industrial applications including glass manufacturing, foundry operations, ceramics, and filtration systems.',

      purity: '99.615% SiO₂',

      quality: 'Excellent Export Grade',

      highlights: [
        '99.615% Silicon Dioxide (SiO₂)',
        'Very Low Iron Content (Fe₂O₃: 0.018%)',
        'Low Calcium and Magnesium Impurities',
        'Consistent Graded Mesh Supply',
        'Suitable for Glass and Industrial Applications'
      ],

      images: [
        { src: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1782125499/WhatsApp_Image_2026-06-12_at_12.02.39_kstkhx.jpg' },
        { src: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1782125499/WhatsApp_Image_2026-06-12_at_12.02.39_1_swzjtd.jpg' },
      ],
    },

    {
      key: 'brown',
      label: 'Brown Silica Sand',
      swatch: '#b38b5d',

      desc: 'Naturally occurring brown silica sand with laboratory-tested silica content of 95.57% SiO₂. Suitable for foundry applications, construction materials, filtration media, and general industrial use.',

      purity: '95.57% SiO₂',

      quality: 'Industrial Export Grade',

      highlights: [
        'Laboratory Tested',
        '95.57% Silicon Dioxide (SiO₂)',
        'Available in Custom Mesh Sizes',
        'Suitable for Foundry and Construction Applications',
        'Bulk Export Supply Available'
      ],

      images: [
        {
          src: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1782405937/WhatsApp_Image_2026-06-25_at_21.37.44_2_qgvnwr.jpg'
        },
        {
          src: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1782405933/WhatsApp_Image_2026-06-25_at_21.37.43_mfhuoy.jpg'
        },
        {
          src: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1782405939/WhatsApp_Image_2026-06-25_at_21.37.44_pyla5o.jpg'
        }
      ]
    }
  ],

  labReports: [
    {
      name: 'White Silica Sand Chemical Analysis',
      file: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1782125917/silica_sand_report_cubjuk.jpg',
      size: ''
    },
    {
      name: 'Brown Silica Sand SiO₂ Analysis',
      file: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1782405939/brown_fhlnvo.png',
      size: ''
    }
  ]
},
{
  id: 'copper',
  name: 'Copper',
  category: 'Metallic Mineral',
  origin: 'Balochistan, Pakistan',
  desc: 'Copper ore and concentrate sourced from Pakistan mineral regions, supplied for smelting, refining, electrical, and industrial applications.',
  heroNote: 'High-value metallic mineral with export potential',
  applications: [
    'Copper Smelting',
    'Electrical Manufacturing',
    'Metal Alloy Production',
    'Industrial Fabrication',
    'Construction Materials'
  ],
  packaging: [
    'Jumbo bags (1 ton)',
    'Bulk container shipment',
    'Custom export packaging'
  ],
  variants: [
    {
      key: 'ore',
      label: 'Copper Ore & Copper Concentrate',
      swatch: '#8b5a3c',
      desc: "Copper ore and concentrate sourced from Pakistan's mineral-rich regions and supplied for smelting, refining, electrical, and industrial applications. Available in lump and concentrate forms with reliable quality for domestic and international buyers.",
      purity: '',
      images: [
        { src: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1782134297/copper_mo3uxi.png' },
        // { src: '/images/copper/ore-2.jpg' },
      ],
    },
    // {
    //   key: 'concentrate',
    //   label: 'Copper Concentrate',
    //   swatch: '#b87333',
    //   desc: 'Processed copper concentrate with higher copper content, ready for smelting operations.',
    //   purity: '20–30% Cu content',
    //   images: [
    //     { src: '/images/copper/concentrate-1.jpg' },
    //   ],
    // },
  ],
  labReports: [
    // { name: 'Copper Content Assay Report', file: '/reports/copper-assay.pdf', size: '1.2 MB' },
    // { name: 'Trace Element Analysis', file: '/reports/copper-trace.pdf', size: '700 KB' },
  ],
},
// {
//   id: 'fluorite',
//   name: 'Fluorite',
//   category: 'Industrial Mineral',
//   origin: 'Balochistan & Northern Pakistan',
//   desc: 'Premium fluorite supplied for industrial and decorative applications. Available in raw mineral form, graded pieces, and selected gemstone-quality specimens.',
//   heroNote: 'High calcium fluoride content with natural crystal formations',
//   applications: [
//     'Steel & Metallurgy',
//     'Chemical Manufacturing',
//     'Glass & Ceramics',
//     'Decorative Stone',
//     'Mineral Collecting'
//   ],
//   packaging: [
//     '25kg / 50kg PP bags',
//     'Jumbo bags (1 ton)',
//     'Protective export crates'
//   ],
//   variants: [
//     {
//       key: 'raw',
//       label: 'Premium Fluorite (Lumps) – Laboratory Tested | 79.35% CaF₂',
//       swatch: '#8b7bb8',
//       desc: 'High-quality Fluorite (Lumps) independently laboratory tested with 79.35% Calcium Fluoride (CaF₂). Suitable for metallurgical, steel, cement, and industrial flux applications. Supplied in natural lump form with reliable quality for industrial processing.',
//       purity: 'Our Fluorite (Lumps) is independently laboratory tested and contains 79.35% Calcium Fluoride (CaF₂), making it suitable for metallurgical, steel, cement, and industrial flux applications.',
//       images: [
//         { src: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1782133842/Flourite_jhmtve.png' },
//         { src: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1782133841/Crushed_Coarse_Period_und_feines_Staub-Pulver___Natu%CC%88rlicher_Edelstein_fu%CC%88r_Resin_Art_Schmuckherstellung_und_DIY-Handwerk_lcretc.jpg' },
//       ],
//     },
   
//   ],
//   labReports: [
//     { name: 'Fluorite Test Certificate', file: 'https://res.cloudinary.com/dptmeakuy/image/upload/v1782133544/flourite_report_taotms.png', size: '' },
//   ],
// },
];

export const productsThree = [
  {
    id: "edible-pink-salt",
    name: "Pink Salt Grains",
    category: "Edible Salt",
    origin: "Khewra Salt Mine, Punjab, Pakistan",

    desc: "Premium grade Himalayan pink salt for culinary use.",

    heroNote: "Food-grade mineral-rich Himalayan salt",

    applications: [
      "Cooking",
      "Seasoning",
      "Food Processing",
      "Retail Packaging",
      "Private Label Products",
    ],

    packaging: [
      "25kg PP bags",
      "50kg PP bags",
      "1 ton Jumbo bags",
      "Custom retail packaging",
    ],

    variants: [
      {
        key: "pink",
        label: "Pink Salt Grains",
        swatch: "#e8a598",

        desc: "Premium grade Himalayan pink salt suitable for culinary use.",

        purity: "",

        images: [
          {
            src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1772107986/ChatGPT_Image_Feb_21_2026_11_36_43_AM_i83jd1.png",
          },
        ],
      },
    ],

    labReports: [],
  },

  {
    id: "salt-candle-holders",

    name: "Animal Lick Salt",

    category: "Animal Products",

    origin: "Khewra Salt Mine, Punjab, Pakistan",

    desc: "Natural Himalayan salt lick blocks for livestock, rich in essential minerals.",

    heroNote: "Rich source of magnesium and trace minerals",

    applications: [
      "Livestock Nutrition",
      "Cattle Farming",
      "Goat Farming",
      "Horse Nutrition",
    ],

    packaging: [
      "Individual blocks",
      "Bulk export cartons",
      "Custom packaging",
    ],

    variants: [
      {
        key: "lick",

        label: "Animal Lick Salt",

        swatch: "#d7a48c",

        desc: "Natural Himalayan salt blocks for livestock.",

        purity: "",

        images: [
          {
            src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1749545593/animal_lick_salt_piece_is_full_of_magniciem_and_uo9qym.jpg",
          },
        ],
      },
    ],

    labReports: [],
  },

  {
    id: "salt-tiles",

    name: "Customizable Shape Salt Lamps",

    category: "Salt Lamps",

    origin: "Khewra Salt Mine, Punjab, Pakistan",

    desc: "Custom shape Himalayan salt lamps for decorative and wellness purposes.",

    heroNote: "Custom manufactured designs",

    applications: [
      "Home Decor",
      "Hotels",
      "Spa Centers",
      "Interior Design",
    ],

    packaging: [
      "Individual boxes",
      "Export cartons",
      "Custom packaging",
    ],

    variants: [
      {
        key: "custom",

        label: "Custom Shape Salt Lamps",

        swatch: "#d98e7d",

        desc: "Decorative Himalayan salt lamps in customizable designs.",

        purity: "",

        images: [
          {
            src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1749546206/14e47b8d-93e8-447f-9f72-81d888aeeb0b_xqcfvo.jpg",
          },
        ],
      },
    ],

    labReports: [],
  },

  {
    id: "small-salt-lamps",

    name: "Natural Himalayan Salt Lamps",

    category: "Salt Lamps",

    origin: "Khewra Salt Mine, Punjab, Pakistan",

    desc: "Compact natural Himalayan salt lamps for desks and small spaces.",

    heroNote: "Natural air-purifying decor",

    applications: [
      "Home Decor",
      "Office Decor",
      "Meditation Rooms",
      "Gift Products",
    ],

    packaging: [
      "Individual boxes",
      "Bulk export cartons",
    ],

    variants: [
      {
        key: "natural",

        label: "Natural Salt Lamps",

        swatch: "#e2a18e",

        desc: "Compact Himalayan salt lamps.",

        purity: "",

        images: [
          {
            src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1772107992/ChatGPT_Image_Feb_21_2026_11_52_50_AM_vqebh1.png",
          },
        ],
      },
    ],

    labReports: [],
  },

  // {
  //   id: "himalayan-salt-lamp-large",

  //   name: "Globe Shape Himalayan Salt Lamp",

  //   category: "Salt Lamps",

  //   origin: "Khewra Salt Mine, Punjab, Pakistan",

  //   desc: "Natural air purifying globe-shaped Himalayan salt lamp with wooden base.",

  //   heroNote: "Direct from Khewra Mine",

  //   applications: [
  //     "Home Decor",
  //     "Hotels",
  //     "Wellness Centers",
  //     "Interior Decoration",
  //   ],

  //   packaging: [
  //     "Individual boxes",
  //     "Export cartons",
  //   ],

  //   variants: [
  //     {
  //       key: "globe",

  //       label: "Globe Shape Lamp",

  //       swatch: "#d69a86",

  //       desc: "Decorative globe-shaped Himalayan salt lamp.",

  //       purity: "",

  //       images: [
  //         {
  //           src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1772107996/ChatGPT_Image_Feb_21_2026_11_52_01_AM_omyvj9.png",
  //         },
  //       ],
  //     },
  //   ],

  //   labReports: [],
  // },

  {
    id: "pink-salt-bricks",

    name: "Pink Salt Bricks",

    category: "Salt Bricks",

    origin: "Khewra Salt Mine, Punjab, Pakistan",

    desc: "Natural Himalayan salt bricks for spas, walls, and architectural applications.",

    heroNote: "Architectural grade Himalayan salt",

    applications: [
      "Salt Walls",
      "Spa Rooms",
      "Saunas",
      "Interior Decoration",
    ],

    packaging: [
      "Export cartons",
      "Palletized shipment",
    ],

    variants: [
      {
        key: "brick",

        label: "Pink Salt Bricks",

        swatch: "#d39c90",

        desc: "Natural Himalayan salt bricks.",

        purity: "",

        images: [
          {
            src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1749544296/Gourmet_Himalayan_Pink_Salt_-_5_Pound_Brick_by_u3uxbv.jpg",
          },
        ],
      },
    ],

    labReports: [],
  },
];
export const productsTwo = [...productsThree, ...productsfour]



export const minerals = [
  {
    name: "Himalayan Salt",
    category: "Natural Mineral",
    id: "salt",
    desc: "Premium Himalayan salt sourced from the Khewra Salt Range. Available for edible, decorative, and industrial applications."
  },
  {
    id: "bentonite",
    name: "Bentonite",
    category: "Industrial Mineral",
    desc: "High-quality bentonite supplied for drilling, construction, foundry, and industrial manufacturing requirements."
  },
  {
    id: "limestone",
    name: "Limestone",
    category: "Industrial Mineral",
    desc: "Reliable limestone supply for construction, cement, and industrial processing applications."
  },
  {
    id: "antimony",
    name: "Antimony",
    category: "Metallic Mineral",
    desc: "Export-grade antimony sourced from Pakistan mineral regions for international buyers."
  },
  {
    id: "nephrite-jade",
    name: "Nephrite Jade",
    category: "Natural Stone",
    desc: "Premium natural nephrite jade available for decorative, gemstone, and collectible markets."
  },
  {
    id: "white-quartz",
    name: "White Quartz",
    category: "Natural Mineral",
    desc: "High-purity white quartz suitable for glass, industrial, and decorative applications."
  },
  {
    id: "silica-sand",
    name: "Silica Sand",
    category: "Industrial Mineral",
    desc: "High-grade silica sand sourced for glass manufacturing, foundry, construction, and industrial applications."
  },
  {
    id: "copper",
    name: "Copper",
    category: "Metallic Mineral",
    desc: "Quality copper sourced from Pakistan mineral deposits for industrial, electrical, and manufacturing applications."
  },
//   {
//   id: "fluorite",
//   name: "Fluorite",
//   category: "Industrial Mineral",
//   desc: "High-quality fluorite sourced from Pakistan mineral regions. Used for industrial applications including metallurgy, chemical processing, and decorative stone markets."
// },
];