import React from "react";
import "./NetworkofPhotographer.css";
import TestimonialComp from "../TestimonialComp";
import user1 from "../../Assets/2nd design assets/user1img.svg";
import user2 from "../../Assets/2nd design assets/user2img.svg";

import user3 from "../../Assets/2nd design assets/user3img.svg";
import user4 from "../../Assets/2nd design assets/user4img.svg";
import phone from "../../Assets/2nd design assets/phonemockup.svg";
import { motion } from "framer-motion";

const NetworkofPhotographer = () => {
  return (
    <>
      <div className="NetworkofPhotographer">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="nwtop"
        >
          <div className="nwtoptilte">
            Network of photographers to capture image
          </div>
          <div className="nwttopdesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </div>
        </motion.div>
        <div className="nwbottom flex justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="nwleft flex flex-col gap-12"
          >
            <TestimonialComp
              userprofile={user1}
              name="Johnathan Doe"
              profession="Photographer"
              location="New Jersey America"
            />
            <TestimonialComp
              userprofile={user2}
              name="Kevin Vacchani"
              profession="Photographer"
              location="New Jersey America"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="nwmiddle bg-[#015BE4] overflow-hidden"
          >
            <div className="findtitle uppercase">
              Find a network photographer
            </div>
            <div className="finddesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In amet,
              morbi non at sed neque.
            </div>
            <div className="findphoneimage">
              <img className="phoneimageset" src={phone} alt="" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="nwright flex flex-col gap-12"
          >
            <TestimonialComp
              userprofile={user3}
              name="Amelie Fernandes"
              profession="Photographer"
              location="New Jersey America"
            />
            <TestimonialComp
              userprofile={user4}
              name="Amelie Fernandes"
              profession="Photographer"
              location="New Jersey America"
            />
          </motion.div>
          <div className="nwright"></div>
        </div>
      </div>
    </>
  );
};

export default NetworkofPhotographer;
