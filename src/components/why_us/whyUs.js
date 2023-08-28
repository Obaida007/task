"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Group57 from "../../../assets/images/Group57@2x.png";
import ScrollGroup5 from "../../../assets/images/ScrollGroup5@2x.png";
import { BsArrowRightCircle } from "react-icons/bs";
import { WhyUsCards } from "@/common/why-us-cards";
function WhyUs() {
  const scrollableRef = useRef(null);

  const handleScrollButtonClick = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollLeft += 400; // Adjust the scroll amount as needed
    }
  };
  return (
    <div id="whyUs" className="why-us">
      <div className="why-us-body">
        <div className="left-body">
          <div className="why-us-text">
            <p className="main-text">WHY US</p>
            <p className="des-text">
              They say choose wisely. that’s why we are here to be chosen
            </p>
          </div>
          <div className="circles">
            <div className="circle "></div>
            <div className="circle "></div>
          </div>
        </div>
        <div className="imges" ref={scrollableRef}>
          <Image
            priority
            width={700}
            height={400}
            src={ScrollGroup5}
            alt="ScrollGroup5"
          />
          {WhyUsCards.map((card) => (
            <div key={card.discreption} className="card">
              {card.imge}
              <p className="att-card">{card.discreption}</p>
            </div>
          ))}
        </div>
        <button onClick={handleScrollButtonClick}>
          <BsArrowRightCircle className="icon" color={"#fff"} />
        </button>
      </div>
      <div className="footer-why-us">
        <Image priority width={525} height={60} src={Group57} alt="Group57" />
        <button> learn more </button>
      </div>
    </div>
  );
}

export default WhyUs;
