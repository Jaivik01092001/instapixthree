import React from "react";
import { motion } from "framer-motion";
import "./Keyfeature.css";
import cardimage from "../../Assets/2nd design assets/card image.svg";

const Keyfeature = () => {
  const cardData = [
    {
      title: "Find Photographers",
      description:
        "Search our nationwide marketplace of qualified real estate photographers using our AI-powered capture and editing solution.",
      imageSrc: cardimage,
    },
    {
      title: "Book Photographers",
      description:
        "Instantly book an appointment with your desired photographer.",
      imageSrc: cardimage,
    },
    {
      title: "Received HDR Photos",
      description:
        "With our fast, efficient service, photos are delivered on-site, saving time and money while showcasing the property in the best possible light.",
      imageSrc: cardimage,
    },
    // Add more card data as needed
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.1, transition: { duration: 0.4 } },
  };

  return (
    <div className="keyfeaturecontainer overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="kfleft"
      >
        <div className="servicetitle uppercase">Services</div>
        <div className="kftitle capitalize">Key Features</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="kfright flex gap-8 bg-green shrink"
        variants={cardVariants}
      >
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="cardcontainer"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="cardimage">
              <img src={card.imageSrc} alt="" />
            </div>
            <div className="cardtitle capitalize">{card.title}</div>
            <div className="carddesc">{card.description}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Keyfeature;
