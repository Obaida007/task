import React from "react";

function Footer() {
  return (
    <div id="footer" className="footer">
      <div className="content">
        <div className="MSADER">
          <div className="gruop">
            <h4>MSADER</h4>
            <a href="#aboutUs">ABOUT US</a>
            <a href="#services">OUR SERVICES</a>
            <a href="#whyUs">WHY US</a>
            <a href="#footer">CONTACT US</a>
          </div>

          <p className="requst-demo">REQUEST A DEMO</p>
        </div>
        <div className="FOLLOW-US">
          <h4>FOLLOW US</h4>
          <div className="gruop">
            <a href="https://www.facebook.com/">FACEBOOK</a>
            <a href="https://www.instagram.com/">INSTAGRAM</a>
            <a href="https://www.youtube.com/">YOUTUBE</a>
            <a href="https://www.linkedin.com/">LINKEDIN</a>
          </div>
        </div>
        <div className="OUR-NEWSLETTER">
          <h4>OUR NEWSLETTER</h4>
          <p>
            If you want to know more and stay up to date , subscribe by
            verifying your email here
          </p>
          <div className="email">
            <input type={"text"} placeholder="EMAIL" />
            <button> SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="seprator-footer"></div>
      <div className="policy-footer">
        PRIVACY POLICY | TERMS OF USE | © MSADER
      </div>
    </div>
  );
}

export default Footer;
