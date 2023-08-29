"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Group57 from "../../../assets/images/Group57@2x.png";
import ScrollGroup5 from "../../../assets/images/ScrollGroup5@2x.png";
import { BsArrowRightCircle } from "react-icons/bs";
import { WhyUsCards } from "@/common/why-us-cards";
import { Button, Col, Row } from "antd";
function WhyUs() {
  const scrollableRef = useRef(null);

  const handleScrollButtonClick = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollLeft += 400; // Adjust the scroll amount as needed
    }
  };
  return (
    <div id="whyUs" className="why-us">
      <Row gutter={[10, 50]}>
        <Col lg={11} xl={11} sm={24} xs={24} md={24} className="left-body">
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
        </Col>

        <Col
          lg={12}
          xl={12}
          sm={23}
          xs={23}
          md={23}
          className="imges"
          ref={scrollableRef}
        >
          <Image
            priority
            width={700}
            height={400}
            src={ScrollGroup5}
            alt="ScrollGroup5"
          />
          {WhyUsCards.map((card) => (
            <div key={card.discreption} className="card-why">
              {card.imge}
              <p className="att-card">{card.discreption}</p>
            </div>
          ))}
        </Col>
        <Col style={{ display: "flex", alignItems: "center" }} span={1}>
          <Button
            onClick={handleScrollButtonClick}
            className="icon"
            icon={<BsArrowRightCircle color={"#fff"} />}
          ></Button>
        </Col>

        <Col lg={13} xl={13} sm={0} xs={0} md={0}>
          <Image priority width={525} height={60} src={Group57} alt="Group57" />
        </Col>
        <Col lg={11} xl={11} sm={24} xs={24} md={24}>
          <button className="learn-more"> learn more </button>
        </Col>
      </Row>
    </div>
  );
}

export default WhyUs;
