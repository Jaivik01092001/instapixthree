import React from "react";
import "./Footer.css";
import email from "../../Assets/emailicon.png";
import phone from "../../Assets/phoneicon.png";
import insta from "../../Assets/Instagram.png";
import facebook from "../../Assets/Facebook.png";
import twitter from "../../Assets/Twiter.png";
import linkedin from "../../Assets/Vector.png";

const Footer = () => {
  return (
    <>
      <div className="footercontainer">
        <div className="footerrowone flex">
          <div className="frcoloumnone">
            <div className="ltalkparent">
              <div className="ltalktitle">Let’s Talk</div>
              <div className="ltalkdesc">
                Send us an email or start a conversation by filling the form
                below.
              </div>
            </div>
            <div className="richusdirectlyparent">
              <div className="richtitle">Reach us directly!</div>
              <div className="richemail flex">
                <div className="emailleft">
                  <img className="emailicon" src={email} alt="" />
                </div>
                <div className="emailright">
                  <div className="emailidtitle">Email</div>
                  <div className="emailid">hello@cczcvs</div>
                </div>
              </div>
              <div className="phone flex mt-4">
                <div className="phoneleft">
                  <img className="phoneicon" src={phone} alt="" />
                </div>
                <div className="phoneright">
                  <div className="phonetitle">Phone</div>
                  <div className="phoneno">1-677-124-44227</div>
                </div>
              </div>
            </div>
            <div className="my-16">
              <hr />
            </div>
            <div className="socialparent">
              <div className="followtitle">Follow Us :</div>
              <div className="followicon gap-12 flex">
                <div className="insta">
                  <img src={insta} alt="" />
                </div>
                <div className="facebook">
                  <img src={facebook} alt="" />
                </div>
                <div className="twitter">
                  <img src={twitter} alt="" />
                </div>
                <div className="linkedin">
                  <img src={linkedin} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="frcoloumntwo p-8">
            <div className="nameemail flex">
              <div className="name flex flex-col">
                <label htmlFor="fullname ">
                  Full Name<sup>*</sup>
                </label>
                <input
                  type="text"
                  placeholder="John David"
                  autoComplete="off"
                />
              </div>
              <div className="email flex flex-col">
                <label htmlFor="fullemail">
                  Your Email<sup>*</sup>
                </label>
                <input
                  type="email"
                  placeholder="example@yourmail.com"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="phonesubject flex ">
              <div className="phoneform flex flex-col">
                <label htmlFor="fullphone">
                  Phone<sup>*</sup>
                </label>
                <input
                  type="text"
                  placeholder="(000) 123 456"
                  autoComplete="off"
                />
              </div>
              <div className="project flex flex-col">
                <label htmlFor="fullproject">
                  Your Email<sup>*</sup>
                </label>
                <input
                  type="text"
                  placeholder="ex. project "
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="leaveusmessage flex flex-col">
              <label htmlFor="leaveus">
                Leave Us A Message <sup>*</sup>
              </label>
              <input
                type="text"
                className="message"
                placeholder="Hello there,I would like to talk about how to..."
                autoComplete="off"
              />
            </div>
            <div className="sendbtn">
              <button className="sendtext">Send Message</button>
            </div>
          </div>
        </div>
        <div className="hr m-auto my-16">
          <hr />
        </div>
        <div className="footerrowtwo flex justify-between m-auto">
          <div className="copy">Listing pix © 2022. All rights reserved </div>
          <div className="cookie">
            Cookies &nbsp;&nbsp; / &nbsp;&nbsp;Contact Sales
            &nbsp;&nbsp;/&nbsp;&nbsp;Security&nbsp;&nbsp; /&nbsp;&nbsp; Terms of
            Service &nbsp;&nbsp;/&nbsp;&nbsp; Privacy Statement&nbsp;&nbsp;
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
