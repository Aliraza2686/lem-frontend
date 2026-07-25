/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-case-declarations */
import React, { useState } from "react";
import { Package, MessageSquare, User, Check, ChevronsUpDown, Truck, ChevronDown, MapPin } from "lucide-react";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/react";
import { countries, productsTwo } from "../../lib/utills";
import api from "../../api";
import Loader from "../loader";
import { useSearchParams } from "react-router-dom";

const UNIT_OPTIONS = ["Kilograms (KG)", "Metric Tons (MT)", "20ft Container", "40ft Container"];
const INCOTERM_OPTIONS = ["FOB", "CIF", "CFR", "EXW", "Not sure / need guidance"];
const DEFAULT_PACKAGING_OPTIONS = [
  "25kg / 50kg PP bags",
  "Jumbo bags (1 ton)",
  "Bulk loose (truck/container)",
  "Custom / private label packaging",
];

const emptyFormData = {
  name: "",
  email: "",
  phone: "",
  country: "",
  message: "",
  quantity: "",
  unit: "",
  packaging: "",
  incoterm: "",
  destinationPort: "",
};

export const ContactForm = () => {
  const [formData, setFormData] = useState(emptyFormData);

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [countryQuery, setCountryQuery] = useState("");
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  const product = productsTwo.find((p) => p.id === productId);
  const [showShipmentDetails, setShowShipmentDetails] = useState(!!productId);

  const packagingOptions = product?.packaging?.length ? product.packaging : DEFAULT_PACKAGING_OPTIONS;

  const filteredCountries =
    countryQuery === ""
      ? countries
      : countries.filter((country) =>
          country.toLowerCase().includes(countryQuery.toLowerCase())
        );

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim().length < 2
          ? "Name must be at least 2 characters"
          : "";

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value)
          ? "Please enter a valid email address"
          : "";

      case "country":
        return !value ? "Please select your country" : "";

      case "message":
        return value.trim().length < 10
          ? "Please provide more details (minimum 10 characters)"
          : "";

      case "quantity":
        return value && (isNaN(value) || Number(value) <= 0)
          ? "Please enter a valid quantity"
          : "";

      default:
        return "";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time validation
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleCountryChange = (value) => {
    setFormData((prev) => ({ ...prev, country: value }));
    setErrors((prev) => ({ ...prev, country: validateField("country", value) }));
  };

  const handleSubmit = async () => {
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      let newPayload = {
        ...formData,
        product_slug: productId ? productId : "",
      };

      try {
        setIsLoading(true); // show loading state
        const res = await api.post("/submit-contact-form", newPayload);

        if (res.data?.success) {
          setIsSubmitted(true);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsLoading(false); // reset loading
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className=" p-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-green-800 mb-2">
            Message Sent Successfully!
          </h2>
          <p className="text-green-700 mb-4">
            Thank you for contacting us. Our team will review your message and
            get back to you within 24-48 hours.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData(emptyFormData);
            }}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto md:p-2 bg-white">
      <Loader show={isLoading} />
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
        <p className="text-gray-600">
          Get in touch for bulk orders and business inquiries
        </p>
      </div>

      <div className="space-y-6">
        {/* Contact Information */}
        <div className="">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <User className="w-5 h-5 mr-2" />
            Your Information
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="your.email@company.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country *
              </label>
              <Combobox value={formData.country} onChange={handleCountryChange}>
                <div className="relative">
                  <ComboboxInput
                    className={`w-full px-3 py-2 pr-9 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.country ? "border-red-500" : "border-gray-300"
                      }`}
                    displayValue={(value) => value || ""}
                    onChange={(e) => setCountryQuery(e.target.value)}
                    placeholder="Type to search your country"
                    autoComplete="off"
                  />
                  <ComboboxButton className="absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-400">
                    <ChevronsUpDown className="w-4 h-4" />
                  </ComboboxButton>
                  <ComboboxOptions
                    anchor="bottom start"
                    transition
                    className="z-50 mt-1 max-h-56 w-[var(--input-width)] overflow-auto rounded-lg bg-white border border-gray-200 shadow-lg text-sm focus:outline-none empty:invisible"
                  >
                    {filteredCountries.length === 0 ? (
                      <div className="px-3 py-2 text-gray-500">No country found.</div>
                    ) : (
                      filteredCountries.map((country) => (
                        <ComboboxOption
                          key={country}
                          value={country}
                          className="group flex items-center gap-2 px-3 py-2 cursor-pointer data-[focus]:bg-blue-50 data-[focus]:text-blue-700"
                        >
                          <Check className="w-4 h-4 invisible group-data-[selected]:visible" />
                          {country}
                        </ComboboxOption>
                      ))
                    )}
                  </ComboboxOptions>
                </div>
              </Combobox>
              {errors.country && (
                <p className="text-red-500 text-sm mt-1">{errors.country}</p>
              )}
            </div>
          </div>
        </div>

        {/* Shipment / RFQ Details */}
        <div className="border border-gray-200 rounded-lg">
          <button
            type="button"
            onClick={() => setShowShipmentDetails((prev) => !prev)}
            className="w-full flex items-center justify-between px-4 py-3 text-left"
          >
            <span className="text-xl font-semibold text-gray-800 flex items-center">
              <Truck className="w-5 h-5 mr-2" />
              Order Details {product ? `— ${product.name}` : ""}
              <span className="ml-2 text-sm font-normal text-gray-500">(optional, helps us quote faster)</span>
            </span>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 transition-transform ${showShipmentDetails ? "rotate-180" : ""}`}
            />
          </button>

          {showShipmentDetails && (
            <div className="px-4 pb-4 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity Needed
                  </label>
                  <input
                    type="text"
                    inputMode="decimal"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.quantity ? "border-red-500" : "border-gray-300"
                      }`}
                    placeholder="e.g. 5000"
                  />
                  {errors.quantity && (
                    <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Unit
                  </label>
                  <select
                    name="unit"
                    value={formData.unit}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select unit</option>
                    {UNIT_OPTIONS.map((unit) => (
                      <option key={unit} value={unit}>{unit}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Packaging
                  </label>
                  <select
                    name="packaging"
                    value={formData.packaging}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select packaging</option>
                    {packagingOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Incoterm
                  </label>
                  <select
                    name="incoterm"
                    value={formData.incoterm}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select Incoterm</option>
                    {INCOTERM_OPTIONS.map((term) => (
                      <option key={term} value={term}>{term}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1" />
                  Destination Port
                </label>
                <input
                  type="text"
                  name="destinationPort"
                  value={formData.destinationPort}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g. Port of Shanghai"
                />
              </div>
            </div>
          )}
        </div>

        {/* Message */}
        <div className="">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <MessageSquare className="w-5 h-5 mr-2" />
            Your Message
          </h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="5"
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.message ? "border-red-500" : "border-gray-300"
                }`}
              placeholder="Tell us about your bulk order requirements, product specifications, quantity needed, or any other details..."
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center flex justify-center items-center flex-col gap-2">
          <button
            type="button"
            onClick={handleSubmit}
            className="mobile-cta"
          >
            Submit Contact Form
          </button>
          <p className="text-sm text-gray-500 mt-2">
            * Required fields. We&apos;ll respond within 24-48 hours.
          </p>
        </div>
      </div>
    </div>
  );
};
