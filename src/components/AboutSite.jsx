import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutSite.css";

// gsap.registerPlugin(ScrollTrigger);

const AboutSite = () => {
  // useEffect(() => {
  //   const animateOnScroll = () => {
  //     gsap.utils.toArray(".animate-on-scroll").forEach((element) => {
  //       gsap.from(element, {
  //         y: 50,
  //         opacity: 0,
  //         duration: 1,
  //         scrollTrigger: {
  //           trigger: element,
  //           start: "top 80%",
  //           end: "top 50%",
  //           scrub: 1,
  //           once: true,
  //         },
  //       });
  //     });
  //   };

  //   animateOnScroll();
  // }, []);

  // Clean up function

  return (
    <div className="h-full w-full relative p-[5vw_2.8vw]">
      <div className="flex flex-col md:flex-row items-end justify-between pb-[1.2vw] mb-[1vw] border-b border-black/[0.57]">
        <h3 className="animate-on-scroll text-[4vw] md:text-[1.7vw] font-medium w-full md:w-[26%] text-white">
          Get Ready To Explore Geomagnetic Storms™
        </h3>
        <h4 className="animate-on-scroll text-[4vw] md:text-[1.7vw] font-medium text-white">
          Nashik / Maharashtra
        </h4>
      </div>

      <hr className="text-white" />

      <div className="overflow-hidden elem">
        <h1 className="animate-on-scroll text-[5vw] md:text-[4.2vw] text-white font-thin font-50px">
          Explore the fascinating world of geomagnetic storms predicted for May
          2024. Our website offers real-time updates, stunning visualizations,
          and expert insights into these powerful solar events. Learn how these
          storms affect our planet, from disrupting technology to creating
          breathtaking auroras.
        </h1>
      </div>

      <button
        onClick={() => {
          window.location.href =
            "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-282.86,22.31,1283/loc=75.303,13.957";
        }}
        className="bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-md font-[monospace] font-bold mt-8 mx-auto block"
      >
        Navigate On Map
      </button>

      {/* Commented out video element
      <video
        autoPlay
        loop
        muted
        playsInline
        className="none abs t--90% t-0%@m l-50% w-150% w-300%@m max-w-100000% transform shift-y-0% shift-y--40%@m shift-x--50% d-none"
        style={{ filter: "blur(50px)" }}
      ></video>
      */}
    </div>
  );
};

export default AboutSite;
