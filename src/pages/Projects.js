import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, CheckCircle, Award, Users, Calendar } from 'lucide-react';

import bgImage from "../assets/TIP_03.jpg";
const Projects = () => {
  const projects = [
    {
      title: "Major Irrigation Canal System - Sindh Province",
      category: "Irrigation Infrastructure",
      description: "Construction of a 50km irrigation canal system serving over 10,000 acres of agricultural land, including main canals, distributaries, and water control structures.",
      status: "Completed",
      year: "2023",
      features: ["50km Main Canal", "15 Distributaries", "Water Control Gates", "Concrete Lining"],
      image: "/1.png"
    },
    {
      title: "Small Dam Construction - Balochistan",
      category: "Water Management",
      description: "Development of small dam facility with 5 million cubic meter capacity for water storage and irrigation purposes in drought-prone areas.",
      status: "Completed",
      year: "2022",
      image: "/2.jpg",
      features: ["5M Cubic Meter Capacity", "Spillway Construction", "Embankment Work", "Instrumentation"]
    },
    {
      title: "Urban Infrastructure Development - Hyderabad",
      category: "Infrastructure",
      description: "Comprehensive urban infrastructure project including road construction, drainage systems, and utility installations across multiple sectors.",
      status: "Completed",
      year: "2023",
      image: "/3.png",
      features: ["Road Networks", "Drainage Systems", "Utility Infrastructure", "Traffic Management"]
    },
    {
      title: "Canal Lining Project - Punjab",
      category: "Water Conservation",
      description: "Extensive canal lining project covering 75km of irrigation canals to reduce water losses and improve irrigation efficiency.",
      status: "In Progress",
      year: "2024",
      image: "/4.png",
      features: ["75km Canal Lining", "Concrete Structures", "Water Conservation", "Efficiency Improvement"]
    },
    {
      title: "Bridge Construction - KPK Province",
      category: "Infrastructure",
      description: "Construction of reinforced concrete bridge spanning 200 meters over major river, connecting rural communities to urban centers.",
      status: "Completed",
      year: "2022",
      image: "/5.png",
      features: ["200m Span Bridge", "Reinforced Concrete", "Foundation Work", "Safety Features"]
    },
    {
      title: "Water Treatment Facility - Karachi",
      category: "Water Management",
      description: "Modern water treatment plant with capacity to process 50 million gallons per day, serving industrial and residential areas.",
      status: "In Progress",
      year: "2024",
      image: "/6.png",
      features: ["50MGD Capacity", "Modern Technology", "Quality Control", "Environmental Compliance"]
    }
  ];

  return (
    <div className="pb-16 bg-white">
      <div style={{ backgroundImage: `url(${bgImage})` }} className='relative bg-cover bg-center w-full py-40 mb-20'>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <h1 className="relative text-4xl md:text-5xl font-bold text-white mb-6">Our Projects</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Showcasing our expertise through successful completion of diverse civil construction and infrastructure projects across Pakistan.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-lg">
            <div className="text-3xl font-bold text-white mb-2">100+</div>
            <div className="text-white">Projects Completed</div>
          </div>
          <div className="text-center bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-lg">
            <div className="text-3xl font-bold text-white mb-2">30+</div>
            <div className="text-white">Years Experience</div>
          </div>
          <div className="text-center bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-lg">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-white">Government Projects</div>
          </div>
          <div className="text-center bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-lg">
            <div className="text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-white">Client Satisfaction</div>
          </div>
        </div>

        {/* Projects Grid  OFFICIAL*/}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                      }`}>
                      {project.status}
                    </span>
                    <span className="text-gray-500 text-sm">{project.year}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Project Highlights:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="text-green-600 flex-shrink-0" size={14} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all"
            >
              <div className="grid md:grid-cols-2">
               
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

               
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Highlights:</h4>
                    <ul className="space-y-1">
                      {project.features.map((f, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-700">
                          <CheckCircle size={14} className="text-green-600 mr-2" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {projects.map((project, index) => (
    <div
      key={index}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
    >
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      {/* Project Content */}
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {project.category}
          </span>
          <div className="flex items-center space-x-2">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                project.status === "Completed"
                  ? "bg-green-100 text-green-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {project.status}
            </span>
            <span className="text-gray-500 text-sm">{project.year}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Project Highlights:</h4>
          <div className="grid grid-cols-2 gap-2">
            {project.features.map((feature, featureIndex) => (
              <div
                key={featureIndex}
                className="flex items-center space-x-2"
              >
                <CheckCircle
                  className="text-green-600 flex-shrink-0"
                  size={14}
                />
                <span className="text-gray-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>



        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Have a Project in Mind?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can bring your construction project to life with our expertise and experience.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Projects