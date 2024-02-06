import React, { useState } from "react";
import "../featureofinstapix/Featureofinstapix.css";
import { motion, AnimatePresence } from "framer-motion";
import beforebutton from "../../Assets/beforebutton.svg";
import afterbutton from "../../Assets/afterbutton.svg";

import ReactCompareImage from "react-compare-image";
import beforeimgskyreplace from "../../Assets/Features Comparison Images/Sky Replace-Before.jpg";
import afterimageskyreplace from "../../Assets/Features Comparison Images/Sky Replace-After.jpg";
import beforehdr from "../../Assets/Features Comparison Images/HDR-Before.JPG";
import afterhdr from "../../Assets/Features Comparison Images/HDR-After.jpg";

import beforimagesaturation from "../../Assets/Features Comparison Images/Saturation-Before.jpg";
import afterimagesaturation from "../../Assets/Features Comparison Images/Saturation-After.jpg";
import beforecontrast from "../../Assets/Features Comparison Images/Contrast-Before.jpg";
import aftercontrast from "../../Assets/Features Comparison Images/Contrast-After.jpg";
import beforeimgrelightning from "../../Assets/Features Comparison Images/Image Relighting-Before.jpg";
import afterimgrelightning from "../../Assets/Features Comparison Images/Image Relighting-After.jpg";
import beforePerspectivecorrection from "../../Assets/Features Comparison Images/Perspective Correction-Before.jpg";
import afterPerspectivecorrection from "../../Assets/Features Comparison Images/Perspective Correction-After.jpg";

const Featureofinstapix = () => {
  const features = [
    "Sky Replacement",
    // "360 Enhancement",
    "HDR Image",
    "Perspective Correction",
    "Image Relighting",
    // "Sales and Marketing",
    // "Raw and Jpg Format",
    "Contrast Boost",
    "Brightness Boost",
    "Lens Correction",
    "Saturation Level",
    "Noise Reduction",
    "Image Sharpening",
  ];

  const featureContent = {
    "Sky Replacement": {
      title: "Sky replacement",
      desc: "When an exterior photo is captured, the app's AI technology identifies the sky area and replaces it with a stunning blue sky in realtime. This feature enhances outdoor images, making them look more appealing and vibrant without requiring any manual editing skills. Additionally, users have the option to customize the sky with settings for cloud cover, allowing them to choose from clear skies, low clouds, or high clouds, further enhancing their outdoor images with ease.",
      leftimage: beforeimgskyreplace,
      rightimage: afterimageskyreplace,
    },
    "360 Enhancement": {
      title: "360 Enhancement",
      desc: "Dummy content for 360 Enhancement.",
    },
    "HDR Image": {
      title: "HDR Image",
      desc: "This mobile application automatically captures 5 high dynamic range (HDR) images and seamlessly processes them in the cloud using advanced AI editing technology. Once the images are captured, they are quickly sent to the cloud, where AI algorithms work their magic. These algorithms optimize exposure, adjust colors, and reduce noise to create stunning, professional-quality photos.",
      leftimage: beforehdr,
      rightimage: afterhdr,
    },
    "Perspective Correction": {
      title: "Perspective correction",
      desc: "This mobile app automatically corrects perspective distortion, ensuring a professional finish by automatically adjusting skewed angles in photos, guaranteeing polished and well-aligned images without any manual intervention.",
      leftimage: beforePerspectivecorrection,
      rightimage: afterPerspectivecorrection,
    },
    "Image Relighting": {
      title: "Image Relighting",
      desc: "The app's advanced AI editing technology excels in Image Relighting, ensuring impeccable contrast and lighting in photos. This powerful feature automatically analyzes each image and intelligently adjusts the lighting conditions to bring out the perfect contrast and illumination.",
      leftimage: beforeimgrelightning,
      rightimage: afterimgrelightning,
    },
    "Sales and Marketing": {
      title: "Sales and Marketing",
      desc: "Dummy content for Sales and Marketing.",
    },
    "Raw and Jpg Format": {
      title: "Raw and Jpg Format",
      desc: "Dummy content for Raw and Jpg Format.",
    },
    "Contrast Boost": {
      title: "Contrast boost",
      desc: "The app offers users the flexibility to fine-tune contrast settings according to their preferences. With easy-to-use controls, customers can customize contrast levels to achieve the exact look they desire in their photos. This feature empowers users to have full control over the contrast, allowing them to create images that perfectly match their creative vision.",
      leftimage: beforecontrast,
      rightimage: aftercontrast,
    },
    "Brightness Boost": {
      title: "Brightness boost",
      desc: "With user-friendly controls, customers can tailor the brightness levels to match their specific preferences for each photo. This feature grants users full control over brightness, enabling them to create images that align perfectly with their creative vision and desired aesthetic.",
    },
    "Lens Correction": {
      title: "Lens correction",
      desc: "The app's AI editing technology goes a step further by automatically correcting lens distortion, effectively eliminating barrel distortion from your photos. Through intelligent analysis, it identifies and rectifies any distortions caused by the camera lens, ensuring that straight lines appear straight and that the image remains true to reality.",
    },
    "Saturation Level": {
      title: "Saturation Level",
      desc: "With intuitive controls, customers can customize the saturation of their photos to achieve the desired color intensity. This feature provides users with the flexibility to create images that perfectly match their unique style and artistic vision.",
      leftimage: beforimagesaturation,
      rightimage: afterimagesaturation,
    },
    "Noise Reduction": {
      title: "Noise Reduction",
      desc: "The app's AI editing technology also excels in noise reduction, automatically identifying and reducing noise in photos. Through sophisticated algorithms, it effectively cleans up grainy or pixelated elements, resulting in smoother and more refined images.",
    },
    "Image Sharpening": {
      title: "Image Sharpening",
      desc: "The app's AI editing technology automatically enhances photo sharpness, providing an extra boost in quality. Using advanced algorithms, it intelligently identifies areas that need sharpening, ensuring that every detail in the image is crisp and well-defined.",
    },
  };

  const [selectedFeature, setSelectedFeature] = useState("Sky Replacement");

  const renderFeatureContent = () => {
    const feature = featureContent[selectedFeature];
    if (feature) {
      return (
        <>
          <div className="flex gap-40  mobilesetgap">
            <div className="w-2/4 leftcontsetmobile">
              <div className="menutitle">{feature.title}</div>
              <div className="menudesc">{feature.desc}</div>
              <div className="menudownload w-fit px-20 py-8 rounded-full">
                Download App
              </div>
            </div>
            <div className="w-2/4 rightcontsetmobile position-relative ">
              <ReactCompareImage
                className="imageset rightcontsetmobile"
                leftImage={feature.leftimage}
                rightImage={feature.rightimage}
              />
              <img src={beforebutton} className="beforebutton" alt="" />
              <img src={afterbutton} className="afterbutton" alt="" />
            </div>
          </div>
        </>
      );
    }
    return null;
  };
  const transition = { duration: 0.5, ease: "easeOut" };
  return (
    <>
      <div className="foicontainer" id="diycamera">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="foitop"
          id="diycamera"
        >
          <div className="foititle">Features Of Listingpix</div>
          <div className="foidesc">
            Our mobile app captures HDR images using the latest technology. Then
            instantly merges and performs AI editing in the cloud to produce
            stunning real estate images, instantly! Users can further adjust
            these settings within the mobile app to fine tune the final image.
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
          {" "}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFeature}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {renderFeatureContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Featureofinstapix;

// import React from "react";
// import ReactCompareImage from "react-compare-image";
// import beforeimg from "../../Assets/Features Comparison Images/Sky Replace-Before.jpg";
// import afterimage from "../../Assets/Features Comparison Images/Sky Replace-After.jpg";

// const Featureofinstapix = () => {
//   return (
//     <>
//       <div>
//         <ReactCompareImage leftImage={beforeimg} rightImage={afterimage} />;
//       </div>
//     </>
//   );
// };

// export default Featureofinstapix;
