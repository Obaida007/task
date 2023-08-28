import { cards } from "@/common/aboutUs-card";
import Image from "next/image";
import React from "react";
import Group56 from "../../../assets/images/Group56@2x.png";

function AboutUs() {
  return (
    <div id="aboutUs" className="about-us">
      <div className="pragraphs">
        <p>
          WE ARE HERE TO <span className="bold">ELEVATE YOUR BUSINESS</span> TO
          THE ULTIMATE LEVEL OF GROWTH
        </p>
        <p className="normal">
          At Msader we provide all kind of HR services, we are responsible for
          all things workforce and talent-related.
        </p>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <div className="card" key={card.title}>
            <Image
              priority
              width={card.width}
              height={card.height}
              src={card.icon}
              alt={card.title}
            />
            <div className="text">
              <p className="title">{card.title}</p>
              <p className="description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="footer-aboutUS">
        {" "}
        <Image
          priority
          width={488}
          height={60}
          src={Group56}
          alt={"Group56"}
        />{" "}
        <button> ABOUT US </button>
      </div>
    </div>
  );
}

export default AboutUs;
