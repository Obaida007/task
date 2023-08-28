import { lastNewsCards } from "@/common/lastNews-cards";
import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Group58 from "../../../assets/images/Group58.png";

function LastNews() {
  return (
    <div id="lastNews" className="lastNews">
      <div className="text-last-news">
        <p className="title-text">LATEST NEWS</p>
        <p className="des-text">Find the latest Blogs news from Msader</p>
      </div>
      <div className="cards-last-news">
        {lastNewsCards.map((card) => (
          <div className="card-last-news" key={card.date}>
            <Image
              priority
              width={420}
              height={270}
              src={card.img}
              alt="card"
            />
            <div className="line-sp"></div>
            <p className="date">{card.date}</p>
            <p className="text-card">{card.text}</p>
            <a>
              READ MORE <AiOutlineArrowRight />
            </a>
          </div>
        ))}
      </div>
      <div className="read-last-news">
        <Image priority width={490} height={60} src={Group58} alt="Group58" />
        <button> read more </button>
      </div>
      <div className="footer-last-news">
        <p className="text-footer">YOUR ONCE STEP AWAY TO CAREER GROWTH</p>
        <button>requst a demo</button>
      </div>
    </div>
  );
}

export default LastNews;
