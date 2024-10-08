import React, { useEffect, useRef, useState } from "react";
import "./LandingPage.css";
import { gsap } from "gsap";
import AboutSite from "./AboutSite";
import ThreeDivExp from "./ThreeDivExp";
import SpaceWeather from "./SpaceWeather";
import EarthAnimation from "./EarthAnimation";
import Footer from "./Footer";
import { Mosaic } from "react-loading-indicators";

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  const page1ContentRef = useRef(null);
  const cursorRef = useRef(null);
  const isVisible = true; // Assuming isVisible is always true for demonstration

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

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedLandingPage");
    if (!hasVisited) {
      window.scrollTo(0, 0);
      sessionStorage.setItem("hasVisitedLandingPage", "true");
    } else {
      const lastScrollPosition = sessionStorage.getItem("lastScrollPosition");
      if (lastScrollPosition) {
        window.scrollTo(0, parseInt(lastScrollPosition, 10));
      }
    }

    const handleBeforeUnload = () => {
      sessionStorage.setItem(
        "lastScrollPosition",
        window.pageYOffset.toString()
      );
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-black">
        <Mosaic
          color="#ff8912"
          size="large"
          text="Spacifyer"
          textColor="font-[rejoy] text-2xl md:text-3xl lg:text-4xl font-thin"
        />
      </div>
    );
  }

  return (
    <>
      <div
        ref={page1ContentRef}
        className="h-screen w-full bg-white relative overflow-hidden"
      >
        <div
          ref={cursorRef}
          className={`h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 bg-[#ff8912] rounded-full fixed z-10 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 ${
            isVisible ? "md:flex" : "hidden"
          }`}
        >
          <h5 className="font-medium text-white text-xs md:text-sm lg:text-base">
            Play space
          </h5>
        </div>
        <video
          className="h-screen w-full absolute object-cover"
          autoPlay
          loop
          muted
          src="./Geomagnetic Story Video.mp4"
        ></video>
        <div className="h-full w-full relative z-2 text-white flex flex-col items-center justify-between">
          <nav className="flex items-center justify-between w-full p-4 md:p-6 lg:p-8">
            <h3 className="text-sm md:text-base lg:text-lg font-thin">
              A Geomagnetic Experience
            </h3>
          </nav>
          <h1 className="font-[rejoy] text-[1vw] sm:text-[7vw] md:text-[8vw] lg:text-[9vw] xl:text-[20vw] font-thin leading-tight md:leading-tight lg:leading-tight xl:leading-[27vw] text-center px-4">
            spacifyer
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
