import Image from "next/image";
import React from "react";

type FeatureProps = {
  icon: string;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="rounded-lg border bg-white w-[250px] h-[415px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="flex flex-col p-6 space-y-2">
        <h3 className="text-2xl font-semibold leading-none tracking-tight space-y-2">
          <Image src={icon} alt="icon" width={40} height={40} />
          <p className="text-xl font-medium text-text-10">{title}</p>
        </h3>
        <div className="text-sm text-gray-50">
          <p className="text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
