import React from "react";
import "./SpaceWeather.css";

const SpaceWeather = () => {
  return (
    <>
      <div className="h-full w-full relative p-[5vw_2.8vw]">
        <div className="flex items-end justify-between pb-[1.2vw] mb-[1vw] border-b border-black/[0.57]">
          <h3 className="animate-on-scroll text-[2.5vw] md:text-[1.7vw] font-medium w-full md:w-[26%] text-white">
            What is Space Weather ?
          </h3>
        </div>

        <hr className="text-white" />

        <div className="overflow-hidden elem">
          <h1 className="about-space-weather animate-on-scroll text-[3vw] md:text-[2vw] text-white font-thin">
            Activity on the Sun’s surface creates a type of weather called space
            weather. The Sun is really far away—about 93 million miles (150
            million kilometers)—from Earth. However, space weather can affect
            Earth and the rest of the solar system.
          </h1>
          <h2 className="about-space-weather-2 animate-on-scroll text-[3.5vw] md:text-[2.5vw] text-white font-thin">
            As our dependence on technology continues to grow, so does our need
            to monitor and forecast space weather. Space weather refers to the
            impact of radiation from space on astronauts, satellites, and
            systems on Earth. Space weather is known to have caused a blackout
            in the province of Quebec in 1989, malfunctions of the Anik E1 and
            Anik E2 satellites in 1994, and the loss of 40 Starlink satellites
            in February 2022. Because of its northern location, Canada is highly
            impacted by the effects of space weather, but this also gives Canada
            a front row seat to observe the near-Earth space environment
            (geospace) where space weather occurs.
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <a
              className="text-white font-[rejoy] font-bold text-[6vw] md:text-[5vw] m-20 underline"
              href="https://en.wikipedia.org/wiki/Space_weather"
            >
              Click here to learn more
            </a>
            <img
              className="ml-auto mr-10 p-10 rounded-xl float-right w-full md:w-1/2"
              src="./space-weather-graph.jpg"
              alt="space-weather-graph"
            />
          </div>
          <hr />
        </div>

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
    </>
  );
};

export default SpaceWeather;
