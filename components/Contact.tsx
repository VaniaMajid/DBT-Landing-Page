"use client"

import React, { useState } from "react";
import Image from "next/image";
import Input from "./Input";
import Button from "./Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  
   
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '', 
    }));
  };
  

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Validate name
    if (formData.name.trim().length < 2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Full name must be at least 2 characters.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }

    // Validate message
    if (formData.message.trim().length < 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Message must be at least 5 characters.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, message: "" }));
    }
  };

  return (
    <section id="contact" className="mr-16">
      <div className="flex w-full items-center gap-12 justify-between padding-container">
        <div className="w-full hidden md:flex">
          <Image
            src="/contact-img.svg"
            alt="contact us"
            width={1168}
            height={1286}
          />
        </div>
        <div className="w-full">
          <div className="space-y-4 mb-6">
            <h3 className="text-primary-50">CONTACT US</h3>
            <h1 className="text-4xl font-bold text-text-10">
              Let's Collaborate
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <Input
              type="text"
              id="name"
              name="name"
              label="Full Name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
            <Input
              type="email"
              id="email"
              name="email"
              label="Email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <div className="space-y-2">
              <label
                htmlFor="message"
                className={`text-sm font-medium leading-none ${errors.name ? 'text-red-500' : 'text-black'} peer-disabled:cursor-not-allowed`}
              >
                Message
              </label>
              <textarea
                className={`flex min-h-[80px] w-full text-primary-50 rounded-sm border bg-primary-70 px-3 py-2 text-sm focus-visible:border-primary-50 ring-offset-primary-50 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-50 focus-visible:outline-none focus-visible:ring-offset-0 ${errors.message ? 'border-red-500' : ''}`}
                placeholder="Your message..."
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-red-500 text-sm font-medium">{errors.message}</p>
              )}
            </div>
            <Button
              type="submit"
              title="Send Message"
              variant="btn_orange"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
