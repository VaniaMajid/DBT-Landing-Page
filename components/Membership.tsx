import React from "react";
import Image from "next/image";
import { MEMBERSHIP } from "@/constants";
import MemberCard from "./MemberCard";


const Membership = () => {
  return (
    <div id="membership">
      <div className="membership-bg bg-primary-60 bg-opacity-20">
        <div className="flex flex-col w-full h-full space-y-10 lg:space-y-16 padding-container py-20">
          <h1 className="text-[45px] font-bold w-fit text-text-10 relative">
            Membership
            <div className="absolute top-0 left-1">
              <Image src="/ellipse2.svg" alt="ellipse" width={32} height={17} />
            </div>
          </h1>
          <div className="flex justify-center gap-12 flex-wrap w-full">
            {MEMBERSHIP.map((plan, index) => (
              <MemberCard
                key={index}
                icon={plan.icon}
                title={plan.title}
                subTitle={plan.subTitle}
                price={plan.price}
                duration={plan.duration}
                tick={plan.tick}
                points={plan.points}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
