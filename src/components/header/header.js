"use client";
import { linksHeader } from "@/common/links_header";
import Image from "next/image";
import Link from "next/link";
import Group2 from "../../../assets/images/Group 2.png";
import Group54 from "../../../assets/images/Group54@2x.png";
import MaskGroup1 from "../../../assets/images/MaskGroup1.png";
import React, { useEffect, useState } from "react";

function Headers() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="header">
      <div className="navBar">
        <Image priority width={143} height={59} src={Group2} alt="logo" />
        <div className="links-header">
          {linksHeader.map((el) => (
            <Link style={{ color: "#fff" }} key={el.title} href={el.url}>
              {el.title}
            </Link>
          ))}
          <button> requst a demo </button>
        </div>
      </div>
      <div></div>
      <div className="content" style={{ top: `${scrollY * 0.5}px` }}>
        <div className="imges">
          <Image
            priority
            width={550}
            height={339}
            className="first-logo"
            src={Group54}
            alt="woman-img"
          />
          <Image
            priority
            width={715}
            height={934}
            className="woman-img"
            src={MaskGroup1}
            alt="woman-img"
          />
        </div>
        <div className="description">
          <p className="main-p">YOU DEMAND QUALITY, WE SUPPLY GROWTH</p>
          <p className="sub-p">
            We are focused on providing the best experience for you
          </p>
          <div className="learn-more">
            <button> learn more </button>
            <div className="circles">
              {" "}
              <div className="circle "></div>
              <div className="circle "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headers;
