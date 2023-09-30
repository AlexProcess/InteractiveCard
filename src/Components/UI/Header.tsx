import React from "react";
import MobileBack from "../../assets/images/bg-card-back.png";
import MobileFront from "../../assets/images/bg-card-front.png";
import { CardLogo } from "../../assets/images/card-logo";

export const Header: React.FC = () => {
  return (
    <header className="w-full p-40 overflow-hidden">
      <div className="flex w-full h-full ">
        <img
          className="absolute bg-cover sm:w-3/4 sm:top-12 sm:right-6 "
          src={MobileBack}
          alt="Back-card"
        />
        <img
          className="absolute bg-cover sm:w-3/4 sm:top-15 left-6 "
          src={MobileFront}
          alt="Back-card"
        />
        <div className="absolute sm:left-10 sm:top-44">
          <CardLogo />
        </div>
      </div>
    </header>
  );
};
