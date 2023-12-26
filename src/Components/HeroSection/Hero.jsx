import React from "react";
import "./Hero.css";
import appstore from "../../Assets/App Store.png";
import playstore from "../../Assets/Play Store.png";
import iphone from "../../Assets/Iphonemockup.png";

const Hero = () => {
  return (
    <>
      <div className="heroseccontainer">
        <div className="herotop">
          <div className="herotitle">
            Stunning HDR Photos <br /> using cutting-edge AI Technology, <br />{" "}
            delivered Instantly
          </div>
          <div className="herodescription">
            High-end digital experiences. Created at the heart of <br />{" "}
            Manhattan, we are a human-sized team.
          </div>
          <div className="downloadbutton flex">
            <img className="appstore" src={appstore} alt="" />
            <img className="playstore" src={playstore} alt="" />
          </div>
        </div>
        <div className="herobottom">
          <img className="iphoneimg" src={iphone} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
