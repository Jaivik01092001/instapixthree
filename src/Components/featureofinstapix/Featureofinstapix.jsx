import React, { useState } from "react";
import "../featureofinstapix/Featureofinstapix.css";
import skyreplacement from "../../Assets/2nd design assets/skyreplacement.svg";
import { motion } from "framer-motion";

const Featureofinstapix = () => {
  const features = [
    "Sky replacement",
    "360 Enhancement",
    "HDR Image",
    "Perspective correction",
    "Image Relighting",
    "Sales and Marketing",
    "Raw and Jpg Format",
    "Contrast and Brightness boost",
    "Lens correction",
  ];

  const [selectedFeature, setSelectedFeature] = useState("Sky replacement");

  const renderFeatureContent = () => {
    switch (selectedFeature) {
      case "Sky replacement":
        return (
          <>
            <div className="menutitle">Sky replacement</div>
            <div className="menudesc">
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with service for state of the art customer service.
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with service for state of the art customer service.
            </div>
            <div className="menudownload w-fit px-20 py-8 rounded-full">
              Download App
            </div>
          </>
        );
      case "360 Enhancement":
        return (
          <>
            <div className="menutitle">360 Enhancement</div>
            <div className="menudesc">
              {/* Dummy content for 360 Enhancement */}
              Dummy content for 360 Enhancement.
            </div>
            <div className="menudownload w-fit px-20 py-8 rounded-full">
              Download App
            </div>
          </>
        );
      case "HDR Image":
        return (
          <>
            <div className="menutitle">HDR Image</div>
            <div className="menudesc">
              {/* Dummy content for HDR Image */}
              Dummy content for HDR Image.
            </div>
            <div className="menudownload w-fit px-20 py-8 rounded-full">
              Download App
            </div>
          </>
        );
      case "Perspective correction":
        return (
          <>
            <div className="menutitle">Perspective correction</div>
            <div className="menudesc">
              {/* Dummy content for Perspective correction */}
              Dummy content for Perspective correction.
            </div>
            <div className="menudownload w-fit px-20 py-8 rounded-full">
              Download App
            </div>
          </>
        );
      case "Image Relighting":
        return (
          <>
            <div className="menutitle">Image Relighting</div>
            <div className="menudesc">
              {/* Dummy content for Image Relighting */}
              Dummy content for Image Relighting.
            </div>
            <div className="menudownload w-fit px-20 py-8 rounded-full">
              Download App
            </div>
          </>
        );
      case "Sales and Marketing":
        return (
          <>
            <div className="menutitle">Sales and Marketing</div>
            <div className="menudesc">
              {/* Dummy content for Sales and Marketing */}
              Dummy content for Sales and Marketing.
            </div>
            <div className="menudownload w-fit px-20 py-8 rounded-full">
              Download App
            </div>
          </>
        );
      case "Raw and Jpg Format":
        return (
          <>
            <div className="menutitle">Raw and Jpg Format</div>
            <div className="menudesc">
              {/* Dummy content for Raw and Jpg Format */}
              Dummy content for Raw and Jpg Format.
            </div>
            <div className="menudownload w-fit px-20 py-8 rounded-full">
              Download App
            </div>
          </>
        );
      case "Contrast and Brightness boost":
        return (
          <>
            <div className="menutitle">Contrast and Brightness boost</div>
            <div className="menudesc">
              {/* Dummy content for Contrast and Brightness boost */}
              Dummy content for Contrast and Brightness boost.
            </div>
            <div className="menudownload w-fit px-20 py-8 rounded-full">
              Download App
            </div>
          </>
        );
      case "Lens correction":
        return (
          <>
            <div className="menutitle">Lens correction</div>
            <div className="menudesc">
              {/* Dummy content for Lens correction */}
              Dummy content for Lens correction.
            </div>
            <div className="menudownload w-fit px-20 py-8 rounded-full">
              Download App
            </div>
          </>
        );
      // Add cases for other features if needed
      default:
        return null;
    }
  };
  const transition = { duration: 0.5, ease: "easeOut" };
  return (
    <>
      <div className="foicontainer">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="foitop"
        >
          <div className="foititle">Features Of Instapix</div>
          <div className="foidesc">
            Completely synergize resource taxing relationships via premier niche
            markets. Professionally cultivate one-to-one customer service with
            service for state of the art customer service.
          </div>
        </motion.div>
        <div className="foimiddle">
          <div className="menu flex flex-wrap gap-8">
            {features.map((feature) => (
              <motion.span
                key={feature}
                className={`menubuttonclass ${
                  selectedFeature === feature ? "selected" : ""
                }`}
                onClick={() => setSelectedFeature(feature)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
              >
                {feature}
              </motion.span>
            ))}
          </div>
        </div>
        <div className="foibottom flex">
          <div className="foibottomleft">{renderFeatureContent()}</div>
          <div className="foibottomright">
            {selectedFeature === "Sky replacement" && (
              <img className="skyimgwidth" src={skyreplacement} alt="" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Featureofinstapix;
