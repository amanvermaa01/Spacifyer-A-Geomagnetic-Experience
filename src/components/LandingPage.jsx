import React, { useEffect, useRef, useState } from "react";
import "./LandingPage.css";
import { gsap } from "gsap";
import AboutSite from "./AboutSite";
import ThreeDivExp from "./ThreeDivExp";
import SpaceWeather from "./SpaceWeather";
import EarthAnimation from "./EarthAnimation";
import Footer from "./Footer";
import { Mosaic } from "react-loading-indicators";
// import Loader from "./Loader";

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  const page1ContentRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const page1Content = page1ContentRef.current;
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
      });
    };

    if (page1Content) {
      page1Content.addEventListener("mousemove", handleMouseMove);
      page1Content.addEventListener("mouseenter", handleMouseEnter);
      page1Content.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (page1Content) {
        page1Content.removeEventListener("mousemove", handleMouseMove);
        page1Content.removeEventListener("mouseenter", handleMouseEnter);
        page1Content.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-black">
        <Mosaic
          color="#ff8912"
          size="large"
          text="Spacifyer"
          textColor="font-[rejoy] text-[2vw] font-thin "
        />
      </div>
    );
  }

  return (
    <>
      <div ref={page1ContentRef} className="h-screen w-full bg-white relative">
        <div
          ref={cursorRef}
          className="h-[7.5vw] w-[7.5vw] bg-[#ff8912] rounded-full fixed z-[9] flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        >
          <h5 className="font-medium text-white">Play space</h5>
        </div>
        <video
          className="h-screen opacity-0.85 w-full absolute object-cover"
          autoPlay
          loop
          muted
          src="./Geomagnetic Story Video.mp4"
        ></video>
        <div className="h-full w-full relative z-2 text-white flex flex-col items-center justify-between">
          <nav className="flex items-center justify-between w-full p-[3vw]">
            <h3 className="text-[1.4vw] font-thin">A Geomagnetic Experience</h3>
          </nav>
          <h1 className="font-[rejoy] text-[20vw] font-thin leading-[27vw]">
            {"spacifyer".split(" ").map((letter, index) => (
              <span
                key={index}
                className="spacifyer-letterfont-[rejoy] inline-block"
              >
                {letter}
              </span>
            ))}
          </h1>
        </div>
      </div>
      <AboutSite />
      <ThreeDivExp />
      <SpaceWeather />
      <EarthAnimation />
      <Footer />
    </>
  );
};

export default LandingPage;
