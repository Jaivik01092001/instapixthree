import React from "react";
import "./Pricing.css";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <>
      <div className="pricingcontainer">
        <section class="text-white body-font overflow-hidden">
          <div class="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              class="flex flex-col text-center w-full mb-20"
            >
              <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white pricingtitle">
                Pricing
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base pricedesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                nulla suspendisse tortor aenean dis placerat. Scelerisque
              </p>
            </motion.div>
            <div class="flex flex-wrap -m-4 ">
              <div class="pricingmaincontainer p-4 w-full">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  class="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden pricingcardbody"
                >
                  <h2 class="text-sm w-fit px-4 py-3 rounded-full tracking-widest text-white bg-[#0328EE] title-font mb-1 font-medium uppercase">
                    basic
                  </h2>
                  <h1 class="text-5xl text-white leading-none dollortitle">
                    $ 100 USD
                  </h1>
                  <p className="usd">
                    Lorem ipsum dolor sit amet, ametor consectetur adipiscing
                    elit. Et nibh.
                  </p>
                  <div className="flex flex-col gap-1">
                    <div className="feature">Features</div>
                    <p class="flex items-center text-white mb-2 featuredesc">
                      <span class="bg-[#0328EE] w-4 h-4 mr-2 inline-flex items-center justify-center text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          class="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-white"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      Everything included in Basic
                    </p>
                    <p class="flex items-center text-white mb-2 featuredesc">
                      <span class="bg-[#0328EE] w-4 h-4 mr-2 inline-flex items-center justify-center text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          class="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-white"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      Trading up to $1MM per month
                    </p>
                    <p class="flex items-center text-white mb-2 featuredesc">
                      <span class="bg-[#0328EE] w-4 h-4 mr-2 inline-flex items-center justify-center text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          class="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-white"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      Windows & macOS App
                    </p>
                    <p class="flex items-center text-white mb-2 featuredesc">
                      <span class="bg-[#0328EE] w-4 h-4 mr-2 inline-flex items-center justify-center text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          class="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-white"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      Premium Support
                    </p>
                  </div>
                  <button class="flex items-center mt-auto text-white border-0 w-full focus:outline-none hover:bg-gray-700 rounded buttonbg uppercase">
                    Choose Plan
                  </button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  class="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden pricingcardbody"
                >
                  <h2 class="text-sm w-fit px-4 py-3 rounded-full tracking-widest text-white bg-[#0328EE] title-font mb-1 font-medium uppercase">
                    basic
                  </h2>
                  <h1 class="text-5xl text-white leading-none dollortitle">
                    $ 100 USD
                  </h1>
                  <p className="usd">
                    Lorem ipsum dolor sit amet, ametor consectetur adipiscing
                    elit. Et nibh.
                  </p>
                  <div className="flex flex-col gap-1">
                    <div className="feature">Features</div>
                    <p class="flex items-center text-white mb-2 featuredesc">
                      <span class="bg-[#0328EE] w-4 h-4 mr-2 inline-flex items-center justify-center text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          class="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-white"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      Everything included in Basic
                    </p>
                    <p class="flex items-center text-white mb-2 featuredesc">
                      <span class="bg-[#0328EE] w-4 h-4 mr-2 inline-flex items-center justify-center text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          class="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-white"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      Trading up to $1MM per month
                    </p>
                    <p class="flex items-center text-white mb-2 featuredesc">
                      <span class="bg-[#0328EE] w-4 h-4 mr-2 inline-flex items-center justify-center text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          class="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-white"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      Windows & macOS App
                    </p>
                    <p class="flex items-center text-white mb-2 featuredesc">
                      <span class="bg-[#0328EE] w-4 h-4 mr-2 inline-flex items-center justify-center text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          class="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-white"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      Premium Support
                    </p>
                  </div>
                  <button class="flex items-center mt-auto text-white border-0 w-full focus:outline-none hover:bg-gray-700 rounded buttonbg uppercase">
                    Choose Plan
                  </button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  class="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden pricingcardbody"
                >
                  <h2 class="text-sm w-fit px-4 py-3 rounded-full tracking-widest text-white bg-[#0328EE] title-font mb-1 font-medium uppercase">
                    basic
                  </h2>
                  <h1 class="text-5xl text-white leading-none dollortitle">
                    $ 100 USD
                  </h1>
                  <p className="usd">
                    Lorem ipsum dolor sit amet, ametor consectetur adipiscing
                    elit. Et nibh.
                  </p>
                  <div className="flex flex-col gap-1">
                    <div className="feature">Features</div>
                    <p class="flex items-center text-white mb-2 featuredesc">
                      <span class="bg-[#0328EE] w-4 h-4 mr-2 inline-flex items-center justify-center text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          class="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-white"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      Everything included in Basic
                    </p>
                    <p class="flex items-center text-white mb-2 featuredesc">
                      <span class="bg-[#0328EE] w-4 h-4 mr-2 inline-flex items-center justify-center text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          class="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-white"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      Trading up to $1MM per month
                    </p>
                    <p class="flex items-center text-white mb-2 featuredesc">
                      <span class="bg-[#0328EE] w-4 h-4 mr-2 inline-flex items-center justify-center text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          class="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-white"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      Windows & macOS App
                    </p>
                    <p class="flex items-center text-white mb-2 featuredesc">
                      <span class="bg-[#0328EE] w-4 h-4 mr-2 inline-flex items-center justify-center text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          class="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-white"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      Premium Support
                    </p>
                  </div>
                  <button class="flex items-center mt-auto text-white border-0 w-full focus:outline-none hover:bg-gray-700 rounded buttonbg uppercase">
                    Choose Plan
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pricing;
