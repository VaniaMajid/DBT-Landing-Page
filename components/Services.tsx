import Image from "next/image";
import React from "react";
import FeatureCard from "./FeatureCard";
import { SERVICES } from "@/constants";

const Services = () => {
  return (
    <section id="services" className="overflow-hidden">
      <div className="padding-container py-6">
        <div className="flex items-end gap-2">
          <div className="space-y-6 w-3/5">
            <h3 className="text-primary-50">SERVICES</h3>
            <h1 className="text-4xl font-bold text-text-10">Features</h1>
            <p className="text-xl text-gray-50">
              We will bring the breathe of our experience and industry knowledge
              to help you succeed
            </p>
          </div>
          <div className="flex justify-between mt-10 items-center">
            <Image src="/arrow.svg" alt="arrow" width={170} height={160} />
          </div>
        </div>
        <div className="flex flex-wrap gap-6 items-center justify-center mt-16 padding-container 2xl:mx-20">

          {SERVICES.map((service) => (
            <FeatureCard
              icon={service.icon}
              title={service.title}
              description={service.description}
              key={service.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
