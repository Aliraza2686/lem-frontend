import {
  Mountain,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ADDRESS, EMAIL, PHONE_NUMBER } from "../lib/utills";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold">Lumina Earth Minerals</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted wholesale partner for premium natural products.
              Quality guaranteed, bulk quantities available.
            </p>
            <div className="flex gap-4">
              <Link to="https://web.facebook.com/LuminaEarthMineralsLLP" target="_blank"><Facebook className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer" /></Link>
            
             <Link to="https://www.instagram.com/luminaearthminerals" target="_blank">
              <Instagram className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer" />
             </Link> 
            <Twitter className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-green-400">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-green-400"
                >
                  Salt Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-green-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-green-400"
                >
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/shipping"
                  className="text-gray-300 hover:text-green-400"
                >
                  Shipping Info
                </Link>
              </li> */}
              {/* <li>
                <Link
                  to="/returns"
                  className="text-gray-300 hover:text-green-400"
                >
                  Returns
                </Link>
              </li> */}
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-green-400">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">{PHONE_NUMBER}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">
                  {EMAIL}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">
                  {ADDRESS}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Lumina Earth Minerals. All rights reserved. |
            <Link to="/privacy" className="hover:text-green-400 ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link to="/terms" className="hover:text-green-400 ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
