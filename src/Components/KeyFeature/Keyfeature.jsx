import React from "react";
import "./Keyfeature.css";
// import kfmockup from "../../Assets/kfmockup.png";
import kfleftmobile from "../../Assets/kfleftsvg.svg";
import kfrightmobile from "../../Assets/kfrightsvg.svg";
import kfmiddlemobile from "../../Assets/kfmiddlesvg.svg";
import { motion } from "framer-motion";
import { useState } from "react";

const Keyfeature = () => {
  const [selectedOption, setSelectedOption] = useState("bookedPhotographer");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderComponent = () => {
    // eslint-disable-next-line default-case
    switch (selectedOption) {
      case "bookedPhotographer":
        return (
          <>
            <div className="twomobileimages  flex justify-center ">
              <motion.img
                initial={{ opacity: 0, x: -100, y: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="transformimg"
                src={kfleftmobile}
                alt=""
              />
              <motion.img
                initial={{ opacity: 0, x: 100, y: 10 }}
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
          </>
        );
      case "searchedPhotographer":
        return (
          <>
            <div className="twomobileimages  flex justify-center ">
              <motion.img
                initial={{ opacity: 0, x: -100, y: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="transformimg"
                src={kfleftmobile}
                alt=""
              />
              <motion.img
                initial={{ opacity: 0, x: 100, y: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="transformimg"
                src={kfrightmobile}
                alt=""
              />
              {/* <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute "
                src={kfmiddlemobile}
                alt=""
              /> */}
            </div>
          </>
        );
    }
  };
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
        <div className="keyfeaturebottom flex overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{
              backgroundColor:
                selectedOption === "bookedPhotographer"
                  ? "#4AB11F"
                  : "transparent",
            }}
            className="keyfeatureleft "
            onClick={() => handleOptionClick("bookedPhotographer")}
          >
            <div className="kfbltitle">
              <span
                style={{
                  color:
                    selectedOption === "bookedPhotographer"
                      ? "white"
                      : "#29A0F5",
                }}
              >
                Booked a
              </span>{" "}
              Photographer
            </div>
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
            onClick={() => handleOptionClick("searchedPhotographer")}
            style={{
              backgroundColor:
                selectedOption === "searchedPhotographer"
                  ? "#4AB11F"
                  : "transparent",
            }}
          >
            <div className="kfbltitle">
              <span
                style={{
                  color:
                    selectedOption === "bookedPhotographer"
                      ? "#29A0F5"
                      : "white",
                }}
              >
                Search
              </span>{" "}
              Photographer
            </div>
            <div className="kfbldesc">
              Easily integrate with all your favorite tools through and APIs
              including.
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bottom kfmockup">{renderComponent()}</div>
    </div>
  );
};
export default Keyfeature;
