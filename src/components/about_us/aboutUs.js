import { cards } from "@/common/aboutUs-card";
import { Col, Row } from "antd";
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
      <Row gutter={[10, 10]} className="cards-about">
        {cards.map((card) => (
          <Col
            lg={12}
            xl={12}
            sm={24}
            xs={24}
            md={24}
            className="card-about"
            key={card.title}
          >
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
          </Col>
        ))}
        <Col lg={12} xl={12} sm={0} xs={0} md={0}>
          <Image
            priority
            width={488}
            height={60}
            src={Group56}
            alt={"Group56"}
          />
        </Col>
        <Col lg={12} xl={12} sm={24} xs={24} md={24}>
          <button> ABOUT US </button>
        </Col>
      </Row>
    </div>
  );
}

export default AboutUs;
