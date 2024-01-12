import React from "react";
import "./Hero.css";
import appstore from "../../Assets/App Store.png";
import playstore from "../../Assets/Play Store.png";
// import iphone from "../../Assets/Iphonemockup.png";
import { motion } from "framer-motion";
import spiral1 from "../../Assets/3rddesign/spiral.svg";
import spiral2 from "../../Assets/3rddesign/spiral.svg";
import heroimg from "../../Assets/2nd design assets/heroimg.svg";
import bluecircle from "../../Assets/3rddesign/Listing PIX/Mask Group.svg";
import iphone from "../../Assets/3rddesign/Image.svg";
// import eclipsethree from "../../Assets/eclipse/Ellipse.png";
import video from "../../Assets/3rddesign/23video.svg";
import tutor from "../../Assets/3rddesign/250+tutors.svg";
import course from "../../Assets/3rddesign/course.svg";

const Hero = () => {
  const animationVariants = {
    up: { y: -15 },
    down: { y: 15 },
  };
  const animationvariantcircle = {
    up: { x: -25 },
    down: { x: 25 },
  };

  const animationOptions = {
    duration: 1, // You can adjust the duration
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse",
  };

  return (
    <>
      <div className="overflow-hidden">
        <div className="eclipse absolute w-full overflow-hidden">
          <img className="eone" src={spiral1} alt="" />
          <img className="etwo" src={spiral2} alt="" />
          <motion.img
            variants={animationvariantcircle}
            animate="up"
            transition={animationOptions}
            className="ethree"
            src={bluecircle}
            alt=""
          />
          {/* <motion.img
            className="eone"
            src={eclipseone}
            alt=""
            variants={animationVariants}
            animate="up"
            transition={animationOptions}
          />
          <motion.img
            className="etwo"
            src={eclipsetwo}
            alt=""
            variants={animationVariants}
            animate="down"
            transition={animationOptions}
          />
          <motion.img
            className="ethree"
            src={eclipsetwo}
            alt=""
            variants={animationVariants}
            animate="up"
            transition={animationOptions}
          /> */}
        </div>
        <div className="heroseccontainer flex">
          <div className="heroleft">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="herotitle"
            >
              Stunning HDR Photos using cutting-edge AI Technology,delivered
              Instantly
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
            <div className="downloadbutton flex overflow-x-hidden">
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
          <div className="heroright flex flex-col">
            <motion.img
              variants={animationVariants}
              animate="up"
              transition={animationOptions}
              className="videocourse relative"
              src={video}
              alt=""
            />
            <motion.img
              variants={animationVariants}
              animate="up"
              transition={animationOptions}
              className="tutors relative"
              src={tutor}
              alt=""
            />
            <motion.img
              variants={animationVariants}
              animate="up"
              transition={animationOptions}
              className="course relative"
              src={course}
              alt=""
            />

            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="heroimgwidth"
              src={iphone}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
