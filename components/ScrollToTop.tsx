"use client"

import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 200) {
          setShowScrollButton(true);
        } else {
          setShowScrollButton(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };


  return (
    <>
      {showScrollButton && (
        <div className="fixed bottom-8 right-8 bg-primary-50 text-white p-2 rounded-full cursor-pointer">
          <a onClick={scrollToTop}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m16 12-4-4-4 4"></path>
              <path d="M12 16V8"></path>
            </svg>
          </a>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
