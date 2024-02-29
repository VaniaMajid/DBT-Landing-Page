"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import HowItWorksCard from "./HowItWorksCard";
import { HOWITWORKS } from "@/constants";

const HowItWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3); // Number of cards to show per slide

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setCardsPerSlide(3);
      } else if (screenWidth >= 768) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(1);
      }
    };

    handleResize(); // Call once to initialize based on initial screen width

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    if (currentIndex < HOWITWORKS.length - cardsPerSlide) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(HOWITWORKS.length - cardsPerSlide);
    }
  };

  return (
    <section id="how-it-works" className="overflow-hidden">
      <div className="howitworks-bg flex items-center justify-center relative bg-primary-60 bg-opacity-20">
        <div className="padding-container flex flex-col w-full h-full pb-16">
          <div className="xs:mx-7 s:mx-0 md:mx-0 lg:mx-0 flex flex-col justify-center gap-4 h-full">
            <h1 className="text-[45px] font-bold w-fit text-text-10 relative">
              How it
              <span> works</span>
              <div className="absolute -top-1 right-14">
                <Image src="/ellipse.svg" alt="ellipse" width={46} height={24} />
              </div>
            </h1>
            <p className="text-gray-50 text-base w-full max-w-[430px]">
              Businesses generally promote their brand, products, and services by identifying audience.
            </p>
          </div>
          <div className="flex w-full">
            <div className="relative w-full overflow-hidden">
              <div className="flex" style={{ transition: "transform 0.5s ease", transform: `translateX(-${currentIndex * (100 / cardsPerSlide)}%)` }}>
                {HOWITWORKS.map((work, index) => (
                  <div key={work.title} style={{ flex: `0 0 ${100 / cardsPerSlide}%` }}>
                    <HowItWorksCard
                      icon={work.icon}
                      title={work.title}
                      description={work.description}
                    />
                  </div>
                ))}
              </div>
              <button
                className="btn_carousel -left-6 sm:left-0 xs:left-2"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
              >
                <Image src="/arrow-back.svg" alt="back" width={16} height={16} />
              </button>
              <button
                className="btn_carousel -right-6 sm:right-0 xs:right-2"
                onClick={handleNext}
                disabled={currentIndex >= HOWITWORKS.length - cardsPerSlide}
              >
                <Image src="/arrow-forward.svg" alt="forward" width={16} height={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;



