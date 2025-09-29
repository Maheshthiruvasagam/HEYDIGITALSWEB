import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'Web Development',
    message: ''
  });
  
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");
    const data = new FormData();
    data.append("access_key", "YOUR_ACCESS_KEY_HERE"); // IMPORTANT: Replace with your key
    data.append("First Name", formData.firstName);
    data.append("Last Name", formData.lastName);
    data.append("Email", formData.email);
    data.append("Phone", formData.phone);
    data.append("Service Needed", formData.service);
    data.append("Message", formData.message);
    data.append("subject", `New Booking Inquiry from ${formData.firstName} ${formData.lastName}`);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data
    }).then(res => res.json());

    if (res.success) {
      setResult("Form Submitted Successfully!");
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: 'Web Development',
        message: ''
      });
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };


  return (
    <div className="py-16 bg-primary text-light-text">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-dark-text max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear about it. Fill out the form below or reach out to us directly.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-secondary p-8 rounded-lg">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-6">Get in Touch Directly</h2>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-accent" size={24} />
              <div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <p className="text-dark-text hover:text-accent transition-colors"><a href="mailto:heydigitals.care@gmail.com">heydigitals.care@gmail.com</a></p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-accent" size={24} />
              <div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <p className="text-dark-text">+91 12345 67890 (Sample)</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-accent" size={24} />
               <div>
                <h3 className="font-semibold text-lg">Our Location</h3>
                <p className="text-dark-text">Pudukkottai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Book a Service</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required className="w-full bg-primary p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent" />
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required className="w-full bg-primary p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="w-full bg-primary p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent" />
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full bg-primary p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent" />
              <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-primary p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent">
                <option>Web Development</option>
                <option>Shopify Development</option>
                <option>Digital Marketing</option>
                <option>Video Editing</option>
                <option>Thumbnail Design</option>
                <option>Resume Building</option>
              </select>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." rows="5" required className="w-full bg-primary p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
              <button type="submit" className="w-full bg-accent text-white font-bold py-3 px-6 rounded-md hover:bg-purple-700 transition-all duration-300">Send Now</button>
            </form>
             {result && <p className="mt-4 text-center font-semibold">{result}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;