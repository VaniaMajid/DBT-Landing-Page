
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="padding-container">
      <div className="w-full flex flex-col lg:flex-row gap-12 py-16">
        <div className="flex flex-col space-y-8 w-full h-full">
          <div className="flex flex-col justify-center gap-4 h-full">
            <h1 className="text-5xl font-bold w-fit text-text-10 relative">
              <span>About </span>
              us
              <div className="absolute -top-3 right-[88px]">
                <Image
                  src="/ellipse.svg"
                  alt="ellipse"
                  width={46}
                  height={24}
                />
              </div>
            </h1>
            <p className="text-gray-50 text-base">
              Disrupt the Basic is dedicated to empowering women in finance
              through personalized coaching, comprehensive education, and
              collaborative tools. Inspired by Clare Booth Luce's insight, we're
              revolutionizing the financial landscape. Join us and seize control
              of your financial future today.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-8 h-full">
            <div className="rounded-lg border border-none flex items-start shadow-none">
              <div className="flex flex-col space-y-1.5 p-0">
                <Image src="/shield.svg" alt="shield" width={80} height={80} />
              </div>
              <div className="p-6 pt-0">
                <h1 className="text-xl font-medium text-text-10">
                  Safe & Secured
                </h1>
                <p className="text-base mt-0.5 text-gray-50">
                  Ensures the highest security for your financial activities,
                  from bank links to investments, with advanced encryption and
                  strict data protection.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-none flex items-start shadow-none">
              <div className="flex flex-col space-y-1.5 p-0">
                <Image
                  src="/rating.svg"
                  alt="shield"
                  width={100}
                  height={100}
                />
              </div>
              <div className="p-6 pt-0">
                <h1 className="text-xl font-medium text-text-10">
                  Certified Coaches
                </h1>
                <p className="text-base mt-0.5 text-gray-50">
                  Coaches on "Disrupt the Basic" are selected for their
                  certified expertise and trained in our mission-driven
                  approach, ensuring top-quality financial empowerment coaching.
                </p>
              </div>
            </div>


          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="relative">
            <Image
              src="/about-img.svg"
              alt="shield"
              width={1590}
              height={1375}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
