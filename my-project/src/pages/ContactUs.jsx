import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const data = new FormData();
    data.append("access_key", "90b88d87-1f78-4063-8ba4-1af20f4b66e4");
    data.append("First Name", formData.firstName);
    data.append("Last Name", formData.lastName);
    data.append("Email", formData.email);
    data.append("Phone", formData.phone);
    data.append("Service Needed", formData.service);
    data.append("Message", formData.message);
    data.append(
      "subject",
      `New Booking Inquiry from ${formData.firstName} ${formData.lastName}`
    );

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    }).then((res) => res.json());

    if (res.success) {
      setResult("✅ Form Submitted Successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "Web Development",
        message: "",
      });
    } else {
      console.error("Error", res);
      setResult("❌ " + res.message);
    }
  };

  return (
    <div className="py-20 bg-white text-black">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have a project in mind? Fill out the form or reach out to us
            directly — we’d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <div className="bg-gray-100 p-10 rounded-xl shadow space-y-8">
            <h2 className="text-2xl font-bold">Reach Us At</h2>

            <div className="flex items-center space-x-4">
              <FaEnvelope size={24} />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-700">
                  <a href="mailto:heydigitals.care@gmail.com" className="hover:underline">
                    heydigitals.care@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhone size={24} />
              <div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <p className="text-gray-700">+91 9080407021</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt size={24} />
              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-gray-700">Pudukkottai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-gray-50 border border-gray-200 p-10 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-6">Book a Service</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="w-full border border-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="w-full border border-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full border border-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border border-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border border-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option>Web Development</option>
                <option>Shopify Development</option>
                <option>Digital Marketing</option>
                <option>Video Editing</option>
                <option>Thumbnail Design</option>
                <option>Resume Building</option>
              </select>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows="5"
                required
                className="w-full border border-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-black text-white font-bold py-3 px-6 rounded-md hover:bg-gray-800 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
            {result && (
              <p className="mt-4 text-center font-semibold text-black">
                {result}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
