"use client";
import { linksHeader } from "@/common/links_header";
import Image from "next/image";
import Link from "next/link";
import Group2 from "../../../assets/images/Group 2.png";
import Group54 from "../../../assets/images/Group54@2x.png";
import MaskGroup1 from "../../../assets/images/MaskGroup1.png";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
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
        <nav class="navbar navbar-expand-lg navbar-light menu-class">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon">
                <AiOutlineMenu className="icon-menu" />
              </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                {linksHeader.map((el) => (
                  <li class="nav-item" key={el.title}>
                    <a
                      class="nav-link active"
                      aria-current="page"
                      href={el.url}
                    >
                      {el.title}
                    </a>
                  </li>
                ))}
              </ul>
              <form class="d-flex">
                <button class="requst" type="submit">
                  requst a demo
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
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
