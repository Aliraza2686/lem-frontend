import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const PHONE_NUMBER = "+92 306 9302960"
export const EMAIL = "luminaearthminerals@outlook.com"
export const ADDRESS = "Khewra salt mine punjab, pakistan"

export const topSellingProducts = [
  {
    id: "small-salt-lamps",
    name: "Natural Himalayan Salt Lamps",
    description: "Compact salt lamps perfect for desks and small spaces",
    price: "Starting at $22",
    priceValue: 22,
    image: "https://res.cloudinary.com/dptmeakuy/image/upload/v1749545461/Discover_the_serene_glow_of_Himalayan_salt_lamps_btyqrg.jpg",
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

]




export const   products =  [
  {
    id: "himalayan-salt-lamp-large",
    name: "Globe shape Himalayan Salt Lamp",
    description: "Natural air purifying salt lamp with wooden base - Direct from Khewra Mine",
    price: "Starting at $45",
    priceValue: 45,
    image: "https://res.cloudinary.com/dptmeakuy/image/upload/v1735125755/obu9jkazpzsxynhdy2fl.jpg",
    rating: 4.8,
    bulkMin: "10 units",
    category: "Salt Lamps",
    popularity: 95,
  },
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


export  const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Australia",
  "Japan",
  "China",
  "India",
  "Brazil",
  "Mexico",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
  "South Korea",
  "Singapore",
  "New Zealand",
  "South Africa",
  "UAE",
  "Saudi Arabia",
  "Other",
];