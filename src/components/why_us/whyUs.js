import Image from "next/image";
import React from "react";
import Group57 from "../../../assets/images/Group57@2x.png";
import ScrollGroup5 from "../../../assets/images/ScrollGroup5@2x.png";
import shutterstock_1902234202 from "../../../assets/images/shutterstock_1902234202@2x.png";
import shutterstock_1701327436 from "../../../assets/images/shutterstock_1701327436@2x.png";
import { BsArrowRightCircle } from "react-icons/bs";
import { WhyUsCards } from "@/common/why-us-cards";
function WhyUs() {
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
        <div className="imges">
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
        <BsArrowRightCircle className="icon" color={"#fff"} />
      </div>
      <div className="footer-why-us">
        <Image priority width={525} height={60} src={Group57} alt="Group57" />
        <button> learn more </button>
      </div>
    </div>
  );
}

export default WhyUs;
