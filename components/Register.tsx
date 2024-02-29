"use client"

import React, { useState } from "react";
import Image from "next/image";
import Input from "./Input";
import Button from "./Button";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
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
  }

  return (
    <section id='registration' className='bg-primary-60 bg-opacity-20 max-h-[650px]'>
      <div className='flex justify-between gap-16 pt-16 padding-container'>
        <div className='w-full h-full space-y-6'>
          <div className='space-y-4'>
            <h3 className="text-primary-50">Pre-Registration</h3>
            <h1 className="text-4xl font-bold text-text-10">
              Pre Register Now!
            </h1>
          </div>
          <div className='w-full h-[490px]'>
            <form onSubmit={handleSubmit} className="w-full md:max-w-[540px] space-y-16 h-full">
              <div className="w-full space-y-6">
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
              </div>

              <Button
                type="submit"
                title="Register"
                variant="btn_orangelight"
              />
            </form>
          </div>
        </div>
        <div className="w-full max-w-[500px] hidden md:block">
        <Image
            src="/register-img.svg"
            alt="register"
            width={1112}
            height={1003}
          />
        </div>
      </div>
    </section>
  )
};


export default Register
