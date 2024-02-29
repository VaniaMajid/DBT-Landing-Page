"use client"

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import React from "react";

const Footer = () => {

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      // Close the menu after clicking on a navigation link
    }
  };


  return (
    <footer className="bg-black py-6">
      <div className="padding-container mx-auto text-white pt-16">
        <div className="flex flex-col space-y-8 md:space-y-0 items-center justify-center md:items-start md:flex-row md:justify-between">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-center md:text-start">
              DTB
            </h1>
            <ul className="flex justify-center md:justify-start space-x-2 mt-4">
              <li className="border border-white hover:text-primary-40 hover:border-primary-40 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </li>
              <li className="border border-white hover:text-primary-40 hover:border-primary-40 rounded-full p-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                </svg>
              </li>
              <li className="border border-white hover:text-primary-40 hover:border-primary-40 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </li>
            </ul>
          </div>
          <div className="md:space-y-6">
            <h1 className="text-center md:text-start text-lg font-medium">
              Quick Links
            </h1>
            <ul className="text-center mt-2 md:text-start flex flex-col space-y-2 text-gray-50 cursor-pointer">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <a
                    onClick={() => scrollToSection(link.href)} // Use onClick event on anchor tag
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-start md:space-y-6">
            <h1 className="text-lg font-medium">Company</h1>
            <ul className="flex flex-col mt-2 space-y-2 text-gray-50">
              <li>
                <a
                  onClick={() => scrollToSection('about')} // Use onClick event on anchor tag
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection('contact')} // Use onClick event on anchor tag
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
      <div className="text-white border border-r-0 border-l-0 border-b-0 my-2 mt-10 border-t-primary-40">
          <div className="padding-container flex justify-between mt-2">
          <p>Copyright© 2024 DTB</p>
          <p>All Rights Reserved</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
