// import React from "react";
// import "./Faq.css";

// const Faq = () => {
//   return (
//     <>
//       <div className="faqcontainer">
//         <div className="faqtitle">
//           Find the Answers on Frequently Asked Questions
//         </div>
//         <div className="faqquestions">
//           <div className="space-y-4">
//             <details
//               className="group bg-gray-50 p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden faqquestioncontainer"
//               open
//             >
//               <summary className="flex cursor-pointer items-center justify-between gap-1.5">
//                 <h2 className="text-lg font-medium text-gray-900 dark:text-white faqquestiontitle">
//                   Lorem ipsum dolor sit amet consectetur adipisicing?
//                 </h2>

//                 <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 dark:bg-gray-800 dark:text-white sm:p-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </span>
//               </summary>

//               <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200 faqquestiondesc">
//                 Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua ut
//                 enim ad minim veniam quis nostrud exercitation ullamco laboris
//                 nisi. consectetur adipiscing elit sed do eiusmod tempor
//                 incididunt ut labore et dolore magna aliqua ut enim ad minim
//                 veniam quis nostrud exercitation ullamco laboris nisi.
//               </p>
//             </details>
//             <details
//               className="group bg-gray-50 p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden faqquestioncontainer"
//               open
//             >
//               <summary className="flex cursor-pointer items-center justify-between gap-1.5">
//                 <h2 className="text-lg font-medium text-gray-900 dark:text-white faqquestiontitle">
//                   Lorem ipsum dolor sit amet consectetur adipisicing?
//                 </h2>

//                 <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 dark:bg-gray-800 dark:text-white sm:p-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </span>
//               </summary>

//               <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200 faqquestiondesc">
//                 Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua ut
//                 enim ad minim veniam quis nostrud exercitation ullamco laboris
//                 nisi. consectetur adipiscing elit sed do eiusmod tempor
//                 incididunt ut labore et dolore magna aliqua ut enim ad minim
//                 veniam quis nostrud exercitation ullamco laboris nisi.
//               </p>
//             </details>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Faq;
import React, { useState } from "react";
import "./Faq.css";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="faqcontainer">
        <div className="faqtitle">
          Find the Answers on Frequently Asked Questions
        </div>
        <div className="faqquestions">
          <div className="space-y-20">
            {/* 1st */}
            <details
              className={`group bg-${
                isOpen ? "green" : "gray-50"
              } p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden faqquestioncontainer`}
              onClick={toggleFAQ}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2
                  className={`text-lg font-medium text-gray-900 dark:text-white faqquestiontitle pb-4`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing?
                </h2>

                <span
                  className={`shrink-0 rounded-full bg-white p-1.5 text-gray-900 dark:bg-gray-800 dark:text-white sm:p-3`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 shrink-0 transition duration-300 ${
                      isOpen ? "group-open:-rotate-45" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200 faqquestiondesc">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim ad minim veniam quis nostrud exercitation ullamco laboris
                nisi. consectetur adipiscing elit sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua ut enim ad minim
                veniam quis nostrud exercitation ullamco laboris nisi.
              </p>
            </details>
            {/* 2nd */}
            <details
              className={`group bg-${
                isOpen ? "green" : "gray-50"
              } p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden faqquestioncontainer`}
              onClick={toggleFAQ}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2
                  className={`text-lg font-medium text-gray-900 dark:text-white faqquestiontitle pb-4`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing?
                </h2>

                <span
                  className={`shrink-0 rounded-full bg-white p-1.5 text-gray-900 dark:bg-gray-800 dark:text-white sm:p-3`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 shrink-0 transition duration-300 ${
                      isOpen ? "group-open:-rotate-45" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200 faqquestiondesc">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim ad minim veniam quis nostrud exercitation ullamco laboris
                nisi. consectetur adipiscing elit sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua ut enim ad minim
                veniam quis nostrud exercitation ullamco laboris nisi.
              </p>
            </details>
            {/* 3rd */}
            <details
              className={`group bg-${
                isOpen ? "green" : "gray-50"
              } p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden faqquestioncontainer`}
              onClick={toggleFAQ}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2
                  className={`text-lg font-medium text-gray-900 dark:text-white faqquestiontitle pb-4`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing?
                </h2>

                <span
                  className={`shrink-0 rounded-full bg-white p-1.5 text-gray-900 dark:bg-gray-800 dark:text-white sm:p-3`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 shrink-0 transition duration-300 ${
                      isOpen ? "group-open:-rotate-45" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200 faqquestiondesc">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim ad minim veniam quis nostrud exercitation ullamco laboris
                nisi. consectetur adipiscing elit sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua ut enim ad minim
                veniam quis nostrud exercitation ullamco laboris nisi.
              </p>
            </details>
            {/* 4th */}
            <details
              className={`group bg-${
                isOpen ? "green" : "gray-50"
              } p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden faqquestioncontainer`}
              onClick={toggleFAQ}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2
                  className={`text-lg font-medium text-gray-900 dark:text-white faqquestiontitle pb-4`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing?
                </h2>

                <span
                  className={`shrink-0 rounded-full bg-white p-1.5 text-gray-900 dark:bg-gray-800 dark:text-white sm:p-3`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 shrink-0 transition duration-300 ${
                      isOpen ? "group-open:-rotate-45" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200 faqquestiondesc ">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim ad minim veniam quis nostrud exercitation ullamco laboris
                nisi. consectetur adipiscing elit sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua ut enim ad minim
                veniam quis nostrud exercitation ullamco laboris nisi.
              </p>
            </details>
            {/* 5th */}
            <details
              className={`group bg-${
                isOpen ? "green" : "gray-50"
              } p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden faqquestioncontainer`}
              onClick={toggleFAQ}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2
                  className={`text-lg font-medium text-gray-900 dark:text-white faqquestiontitle pb-4`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing?
                </h2>

                <span
                  className={`shrink-0 rounded-full bg-white p-1.5 text-gray-900 dark:bg-gray-800 dark:text-white sm:p-3`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 shrink-0 transition duration-300 ${
                      isOpen ? "group-open:-rotate-45" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200 faqquestiondesc">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim ad minim veniam quis nostrud exercitation ullamco laboris
                nisi. consectetur adipiscing elit sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua ut enim ad minim
                veniam quis nostrud exercitation ullamco laboris nisi.
              </p>
            </details>
            {/* Add more FAQ details as needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
