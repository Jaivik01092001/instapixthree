import React from "react";
import "./Keyfeature.css";
// import kfmockup from "../../Assets/kfmockup.png";
import kfleftmobile from "../../Assets/kfleftsvg.svg";
import kfrightmobile from "../../Assets/kfrightsvg.svg";
import kfmiddlemobile from "../../Assets/kfmiddlesvg.svg";
import { motion } from "framer-motion";

const Keyfeature = () => {
  return (
    <div className="keyfeaturecontainer" id="features">
      <div className="top">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="keyfeaturetop"
        >
          Key features of user
        </motion.div>
        <div className="keyfeaturebottom flex">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="keyfeatureleft "
          >
            <div className="kfbltitle">Booked a Photographer</div>
            <div className="kfbldesc">
              Easily integrate with all your favorite tools through and APIs
              including automatic.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="keyfeatureright "
          >
            <div className="kfbltitle">
              <span className="searchtitle">Search</span> Photographer
            </div>
            <div className="kfbldesc">
              Easily integrate with all your favorite tools through and APIs
              including.
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bottom kfmockup">
        {/* <img
          className="kfmockup "
          src={kfmockup}
          alt=""
        /> */}
        <div className="twomobileimages  flex justify-center">
          <motion.img
            initial={{ opacity: 0, x: -100, y: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="transformimg"
            src={kfleftmobile}
            alt=""
          />
          <motion.img
            initial={{ opacity: 0, x: 100, y: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="transformimg"
            src={kfrightmobile}
            alt=""
          />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute "
            src={kfmiddlemobile}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Keyfeature;
