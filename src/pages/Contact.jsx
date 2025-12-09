import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/card";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { NavLayout } from "../components/layouts/NavLayout";
import { ContactForm } from "../components/forms/Contactform";
import { ADDRESS, EMAIL, PHONE_NUMBER } from "../lib/utills";

export const Contact = () => {
  return (
    <NavLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl text-green-100">
                Get in touch with our team for bulk orders, custom quotes, or
                any questions about our salt, grains, and natural products
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-green-600" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">{PHONE_NUMBER}</p>
                    <p className="text-sm text-gray-600">
                      Monday - Friday, 8 AM - 6 PM PST
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-green-600" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">
                      {EMAIL}
                    </p>
                    <p className="text-sm text-gray-600">
                      We respond within 24 hours
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-green-600" />
                      Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">Khewra Salt Mine</p>
                    <p className="text-gray-600">{ADDRESS}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-green-600" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      <p>
                        <span className="font-medium">Monday - Friday:</span>{" "}
                        8:00 AM - 6:00 PM
                      </p>
                      <p>
                        <span className="font-medium">Saturday:</span> 9:00 AM -
                        4:00 PM
                      </p>
                      <p>
                        <span className="font-medium">Sunday:</span> 9:00 AM -
                        4:00 PM
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we&apos;ll get back to you as soon
                      as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </NavLayout>
  );
};
