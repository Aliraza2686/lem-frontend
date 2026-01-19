/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-case-declarations */
import React, { useState } from "react";
import { Package, MessageSquare, User } from "lucide-react";
import { countries } from "../../lib/utills";
import api from "../../api";
import Loader from "../loader";
import { useSearchParams } from "react-router-dom";
import LexicalEditorComponent from "../atoms/editor/LexicalEditorComponent";
//change
export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");

  // Countries list for dropdown

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

      //   case "phone":
      //     const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
      //     return !phoneRegex.test(value.replace(/[\s\-()]/g, ""))
      //       ? "Please enter a valid phone number"
      //       : "";

      case "country":
        return !value ? "Please select your country" : "";

      case "message":
        return value.trim().length < 10
          ? "Please provide more details (minimum 10 characters)"
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
          // setResponseMsg(res.data.message || "Email sent successfully!");
        } else {
          // setResponseMsg("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsLoading(false); // reset loading
      }

      // setIsSubmitted(true);
      // Here you would typically send the data to your backend
      console.info("Form submitted:", newPayload);
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
              setFormData({
                name: "",
                email: "",
                phone: "",
                country: "",
                message: "",
              });
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
    <div className="max-w-4xl mx-auto md:p-6 bg-white">
      <Loader show={isLoading} />
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
        <p className="text-gray-600">
          Get in touch for bulk orders and business inquiries
        </p>
      </div>

      <div className="space-y-6">
        {/* Contact Information */}
        <div className="bg-gray-50 rounded-lg p-6">
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
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country *
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.country ? "border-red-500" : "border-gray-300"
                  }`}
              >
                <option value="">Select your country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.country && (
                <p className="text-red-500 text-sm mt-1">{errors.country}</p>
              )}
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <MessageSquare className="w-5 h-5 mr-2" />
            Your Message
          </h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message *
            </label>
            <LexicalEditorComponent
              defaultValue={formData?.json}
              onChange={(val) =>
                setFormData((prev) => ({
                  ...prev,
                  message: val,
                }))
              }
            />
            {/* <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="5"
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Tell us about your bulk order requirements, product specifications, quantity needed, or any other details..."
            /> */}
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-600 cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
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
