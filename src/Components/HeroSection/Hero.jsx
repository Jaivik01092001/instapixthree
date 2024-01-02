import React from "react";
import "./Hero.css";
import appstore from "../../Assets/App Store.png";
import playstore from "../../Assets/Play Store.png";
// import iphone from "../../Assets/Iphonemockup.png";
import firstiphone1 from "../../Assets/firstiphone.svg";
import firstiphone2 from "../../Assets/firstiphone2.svg";
import firstiphone3 from "../../Assets/firstiphone3.svg";
import firstiphone4 from "../../Assets/firstiphone4.svg";
import firstiphone5 from "../../Assets/firstiphone5.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="heroseccontainer">
        <div className="herotop">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="herotitle"
          >
            Stunning HDR Photos <br /> using cutting-edge AI Technology, <br />
            delivered Instantly
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="herodescription "
          >
            High-end digital experiences. Created at the heart of <br />{" "}
            Manhattan, we are a human-sized team.
          </motion.div>
          <div className="downloadbutton flex">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="appstore "
              src={appstore}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="playstore "
              src={playstore}
              alt=""
            />
          </div>
        </div>
        <div className="herobottom">
          {/* <img className="iphoneimg" src={iphone} alt="" /> */}
          <div className="mainherimgiphone flex">
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 40 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="iphoneimgsize1"
              src={firstiphone1}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 25 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="iphoneimgsize2"
              src={firstiphone2}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="iphoneimgsize3"
              src={firstiphone3}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: -25 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="iphoneimgsize4"
              src={firstiphone4}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: -40 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="iphoneimgsize5"
              src={firstiphone5}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
