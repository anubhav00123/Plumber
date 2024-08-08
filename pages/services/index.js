// import Footer from "@/components/Footer";
// import NavbarCustom from "@/components/Navbar";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";

// const Index = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const images = [
//     "/images/steps/step-1.jpg",
//     "/images/steps/step-2.jpg",
//     "/images/steps/step-3.jpg",
//     "/images/steps/step-4.jpg",
//     "/images/steps/step-5.jpg",
//     "/images/steps/step-1.jpg",
//   ];
//   useEffect(() => {
//     const handleScroll = () => {
//       // Calculate the current step based on scroll position
//       const scrollPosition = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const totalHeight = document.body.scrollHeight;

//       const maxSteps = images.length;
//       const step = Math.ceil(
//         (scrollPosition / (totalHeight - windowHeight)) * maxSteps
//       );

//       // Ensure step is within the range of available steps
//       const newStep = Math.min(Math.max(step, 1), maxSteps);

//       // Update current step if it has changed
//       if (newStep !== currentStep) {
//         setCurrentStep(newStep);
//       }
//     };

//     // Attach scroll event listener
//     window.addEventListener("scroll", handleScroll);

//     // Detach scroll event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [currentStep]);

//   console.log("currentStep:", currentStep);
//   console.log(
//     "currentimage:",
//     `url(${images[currentStep - 1]}) center center no-repeat`
//   );

//   return (
//     <>
//       <NavbarCustom />
//       {/* <section class="steps-banner">
//       </section> */}
//       <div
//         class="bg-gradient_solid"
//         style={{
//           background: `url(${images[currentStep - 1]}) no-repeat`,
//           backgroundPosition: "center",
//           backgroundSize: "cover",

//         }}
//       >
//         <div class="section-header">
//           <h2 class="text-black">How our fox process your clothes.</h2>
//           <hr />
//         </div>

//         <div class="container">
//           <div class="steps">
//             <div class="steps-container" data-aos="fade-right">
//               <div class="content">
//                 <h2 className="lato-regular-bold">Inspection and tagging</h2>
//                 <p className="lato-regular-italic">
//                   This is one of the steps with which you are most familiar. You
//                   take your item to the nearest dry cleaner near you, and the
//                   dry cleaner puts a tag on your item. This is also done again
//                   when your clothes are examined for any stains, missing
//                   buttons, tears, etc., and all the things are mentioned on the
//                   tag that need to be sorted.
//                 </p>
//               </div>
//               <i class="step-line"></i>
//               <div class="date">1</div>
//             </div>
//             <div class="steps-container" data-aos="fade-left">
//               <div class="content">
//                 <h2 className="lato-regular-bold">Pre-spotting</h2>
//                 <p className="lato-regular-italic">
//                   Once you have dropped off your garments, the cleaners
//                   typically go through a pre-spotting process where there will
//                   be an application of a chemical solvent. Then, through the
//                   process of vacuum cleaning or heating, the stains on your
//                   garments are removed, and it is a major step in dry cleaning.
//                 </p>
//               </div>
//               <i class="step-line"></i>
//               <div class="date">2</div>
//             </div>
//             <div class="steps-container" data-aos="fade-right">
//               <div class="content">
//                 <h2 className="lato-regular-bold">The dry cleaning process</h2>
//                 <p className="lato-regular-italic">
//                   This part of dry cleaning is less known to people. Once your
//                   clothes have been pre-spotted, they are placed in a machine
//                   and submerged in a non-water-based solvent. The clothes are
//                   then rotated in a perforated cylinder, which has tiny holes
//                   where the solvent for cleaning is pumped out in a steady
//                   amount throughout the entire process. From there, the bucket
//                   in the machine swiftly spins the clothes to get rid of any
//                   excess solvent and release warm air. Then the clothes emerge
//                   completely dry.
//                 </p>
//               </div>
//               <i class="step-line"></i>
//               <div class="date">3</div>
//             </div>
//             <div class="steps-container" data-aos="fade-left">
//               <div class="content">
//                 <h2 className="lato-regular-bold">Post-spotting</h2>
//                 <p className="lato-regular-italic">
//                   Here, your dry cleaner will inspect your clothes for any
//                   remaining stains or residue and remove them using the same
//                   procedure he did in the pre-spotting stage. Make sure that
//                   your cloth stains are not as stubborn as the power of dry
//                   cleaning.
//                 </p>
//               </div>
//               <i class="step-line"></i>
//               <div class="date">4</div>
//             </div>
//             <div class="steps-container" data-aos="fade-right">
//               <div class="content">
//                 <h2 className="lato-regular-bold">Finishing</h2>
//                 <p className="lato-regular-italic">
//                   After your clothes have gone through the complete procedure of
//                   dry cleaning, they are then steam-ironed. This is the
//                   important part because it makes your clothes look amazing,
//                   just like new ones. Dry cleaning is very beneficial for
//                   garments made from fibers that don’t react well when exposed
//                   to water, like silk sarees and woolen sweaters. It’s also good
//                   for clothes that shouldn’t be exposed to the heat of a
//                   traditional dryer for an extended period of time. While the
//                   dry cleaning process can seem a bit complex, all in all, it’s
//                   not as complex as it seems once you break down the steps and
//                   get familiar with the process.
//                 </p>
//               </div>
//               <i class="step-line"></i>
//               <div class="date">5</div>
//             </div>
//             <div class="steps-container" data-aos="fade-left">
//               <div class="content">
//                 <h2 className="lato-regular-bold">Packing</h2>
//                 <p className="lato-regular-italic">
//                   We pack clothes as per customer requirements and deliver them
//                   as crisp as new.
//                 </p>
//               </div>
//               <i class="step-line"></i>
//               <div class="date">6</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Index;

import Footer from "@/components/Footer";
import NavbarCustom from "@/components/Navbar";
import { host, siteId } from "@/static";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Procedure = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const images = [
    "/images/flex_background.png",
    "/images/flex_background.png",
    "/images/flex_background.png",
    "/images/flex_background.png",
    "/images/flex_background.png",
    "/images/flex_background.png",
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the current step based on scroll position
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalHeight = document.body.scrollHeight;

      const maxSteps = images.length;
      const step = Math.ceil(
        (scrollPosition / (totalHeight - windowHeight)) * maxSteps
      );

      // Ensure step is within the range of available steps
      const newStep = Math.min(Math.max(step, 1), maxSteps);

      // Update current step if it has changed
      if (newStep !== currentStep) {
        setCurrentStep(newStep);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Detach scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentStep]);

  return (
    <>
      {/* Content container */}
      <div>
        <div className="section-header">
          <h2 className="text-black lato-regular">
            How our fox process your clothes.
          </h2>
          <hr />
        </div>

        <div className="container">
          <div class="steps">
            <div class="steps-container" data-aos="fade-right">
              <div class="content">
                <h2 className="lato-regular-bold">Inspection and tagging</h2>
                <p className="lato-regular-italic">
                  This is one of the steps with which you are most familiar. You
                  take your item to the nearest dry cleaner near you, and the
                  dry cleaner puts a tag on your item. This is also done again
                  when your clothes are examined for any stains, missing
                  buttons, tears, etc., and all the things are mentioned on the
                  tag that need to be sorted.
                </p>
              </div>
              <i class="step-line"></i>
              <div class="date">1</div>
            </div>
            <div class="steps-container" data-aos="fade-left">
              <div class="content">
                <h2 className="lato-regular-bold">Pre-spotting</h2>
                <p className="lato-regular-italic">
                  Once you have dropped off your garments, the cleaners
                  typically go through a pre-spotting process where there will
                  be an application of a chemical solvent. Then, through the
                  process of vacuum cleaning or heating, the stains on your
                  garments are removed, and it is a major step in dry cleaning.
                </p>
              </div>
              <i class="step-line"></i>
              <div class="date">2</div>
            </div>
            <div class="steps-container" data-aos="fade-right">
              <div class="content">
                <h2 className="lato-regular-bold">The dry cleaning process</h2>
                <p className="lato-regular-italic">
                  This part of dry cleaning is less known to people. Once your
                  clothes have been pre-spotted, they are placed in a machine
                  and submerged in a non-water-based solvent. The clothes are
                  then rotated in a perforated cylinder, which has tiny holes
                  where the solvent for cleaning is pumped out in a steady
                  amount throughout the entire process. From there, the bucket
                  in the machine swiftly spins the clothes to get rid of any
                  excess solvent and release warm air. Then the clothes emerge
                  completely dry.
                </p>
              </div>
              <i class="step-line"></i>
              <div class="date">3</div>
            </div>
            <div class="steps-container" data-aos="fade-left">
              <div class="content">
                <h2 className="lato-regular-bold">Post-spotting</h2>
                <p className="lato-regular-italic">
                  Here, your dry cleaner will inspect your clothes for any
                  remaining stains or residue and remove them using the same
                  procedure he did in the pre-spotting stage. Make sure that
                  your cloth stains are not as stubborn as the power of dry
                  cleaning.
                </p>
              </div>
              <i class="step-line"></i>
              <div class="date">4</div>
            </div>
            <div class="steps-container" data-aos="fade-right">
              <div class="content">
                <h2 className="lato-regular-bold">Finishing</h2>
                <p className="lato-regular-italic">
                  After your clothes have gone through the complete procedure of
                  dry cleaning, they are then steam-ironed. This is the
                  important part because it makes your clothes look amazing,
                  just like new ones. Dry cleaning is very beneficial for
                  garments made from fibers that don’t react well when exposed
                  to water, like silk sarees and woolen sweaters. It’s also good
                  for clothes that shouldn’t be exposed to the heat of a
                  traditional dryer for an extended period of time. While the
                  dry cleaning process can seem a bit complex, all in all, it’s
                  not as complex as it seems once you break down the steps and
                  get familiar with the process.
                </p>
              </div>
              <i class="step-line"></i>
              <div class="date">5</div>
            </div>
            <div class="steps-container" data-aos="fade-left">
              <div class="content">
                <h2 className="lato-regular-bold">Packing</h2>
                <p className="lato-regular-italic">
                  We pack clothes as per customer requirements and deliver them
                  as crisp as new.
                </p>
              </div>
              <i class="step-line"></i>
              <div class="date">6</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Procedure;

export const getServerSideProps = async (context) => {};
