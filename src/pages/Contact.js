import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, CheckCircle, Award, Users, Calendar } from 'lucide-react';
import bgImage from "../assets/TIP_04.png";

// Contact Page
const Contact = () => {
  return (
    <div className="pb-16 bg-white">
          <div style={{ backgroundImage: `url(${bgImage})` }} className='relative bg-cover bg-center w-full py-40 mb-20'>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <h1 className="relative text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Ready to start your construction project? Get in touch with our team of experts for professional consultation and project planning.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-full">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                  <p className="text-gray-700 mb-1">0300-9317148</p>
                  <p className="text-gray-700">0333-3628812</p>
                  <p className="text-sm text-gray-500 mt-1">Available 24/7 for project inquiries</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-full">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Address</h3>
                  <p className="text-gray-700">hbas.and.co@gmail.com</p>
                  <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-full">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Address</h3>
                  <p className="text-gray-700">
                    B # 21/C Ghospel Homes Near Soneri Book Land<br />
                    Qasimabad, Hyderabad, Sindh<br />
                    Pakistan
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Office hours: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Managing Director Info */}
            <div className="mt-12 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Leadership Contact</h3>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">FA</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Furqan Ali Soomro</h4>
                  <p className="text-blue-600">Managing Director & CEO</p>
                  <p className="text-sm text-gray-500">Available for major project discussions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+92 300 1234567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select project type</option>
                  <option value="irrigation">Irrigation Systems</option>
                  <option value="water-management">Water Management</option>
                  <option value="infrastructure">Infrastructure Development</option>
                  <option value="lining">Canal Lining</option>
                  <option value="government">Government Project</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Budget (Optional)
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select budget range</option>
                  <option value="under-10m">Under 10 Million PKR</option>
                  <option value="10m-50m">10M - 50M PKR</option>
                  <option value="50m-100m">50M - 100M PKR</option>
                  <option value="100m-500m">100M - 500M PKR</option>
                  <option value="over-500m">Over 500M PKR</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please describe your project requirements, timeline, and any specific details you'd like to discuss..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span>We'll review your project requirements</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span>Our team will contact you within 24 hours</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span>Schedule a consultation meeting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span>Provide detailed project proposal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-gray-50 p-6 rounded-lg">
            <Award className="text-blue-600 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">PEC Registered</h3>
            <p className="text-gray-600 text-sm">
              Officially registered with Pakistan Engineering Council as No Limit Construction Company
            </p>
          </div>
          
          <div className="text-center bg-gray-50 p-6 rounded-lg">
            <Users className="text-blue-600 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
            <p className="text-gray-600 text-sm">
              Professional engineers and construction experts with decades of combined experience
            </p>
          </div>
          
          <div className="text-center bg-gray-50 p-6 rounded-lg">
            <CheckCircle className="text-blue-600 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
            <p className="text-gray-600 text-sm">
              Committed to delivering projects with highest quality standards and timely completion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Contact