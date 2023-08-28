import Image from "next/image";
import React from "react";
import MaskGroup2 from "../../../assets/images/MaskGroup2@2x.png";
import Group54 from "../../../assets/images/Group54@2x.png";
import { paragraphs } from "@/common/sevices-paragraphs";
import { AiOutlineArrowRight } from "react-icons/ai";
function Services() {
  return (
    <div id="services" className="services">
      <div className="left">
        <div className="text">
          <p className="title">SERVICES</p>
          <p className="des">
            We are focused on providing the best experience for you
          </p>
        </div>
        <div className="images">
          <Image
            priority
            width={272}
            height={136}
            className="first-logo"
            src={Group54}
            alt="Group54"
          />
          <Image
            priority
            width={822}
            height={786}
            className="MaskGroup2"
            src={MaskGroup2}
            alt="MaskGroup2"
          />
        </div>
      </div>
      <div className="right">
        <div className="content">
          <Image
            priority
            width={272}
            height={136}
            className="first-logo"
            src={Group54}
            alt="Group54"
          />
          <div className="scroll-paragraphs">
            {paragraphs.map((p, i) => (
              <div key={p.title} className="paragraph">
                <p className="title">{p.title}</p>
                <p className="des">{p.disception}</p>
                {i !== paragraphs.length - 1 && (
                  <a>
                    READ MORE <AiOutlineArrowRight />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
