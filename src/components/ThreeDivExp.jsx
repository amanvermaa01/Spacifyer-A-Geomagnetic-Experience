import React from "react";
import { useNavigate } from "react-router-dom";

const ThreeDivExp = () => {
  const navigate = useNavigate();
  const handleOrigin = () => {
    navigate("/origin");
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };
  const handleSolarwind = () => {
    navigate("/solarwind");
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };
  const handleEffects = () => {
    navigate("/effects");
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };
  return (
    <>
      <div className="min-h-screen w-full relative p-[3vw]">
        <div className="bg-black text-center">
          <h4 className="text-white mb-[1vw] text-[1vw] font-medium">
            Space & Technology{" "}
            <span className="text-[0.7vw] bg-black text-white px-[10px] py-1 rounded-[10px]">
              Models
            </span>
          </h4>
          <h2 className="text-[4vw] font-medium text-white">
            The Geomagnetic Storm
          </h2>
          <h2 className="text-[4vw] font-medium text-white">May 2024</h2>
        </div>
        <div className="h-150px w-full relative p-[3vw] text-white flex flex-col items-center justify-center">
          <h2>"Failure is not an option." ~NASA</h2>
          <h4>See the work⤵️</h4>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 md:mt-[8vw] h-auto md:h-[75vh]">
          <div
            onClick={handleOrigin}
            className="box w-full md:w-[32.5%] h-[50vh] md:h-full relative group cursor-pointer"
          >
            <img
              className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-linear group-hover:opacity-0"
              src="./yellow-sun.jpg"
              alt="Yellow Sun"
            />
            <video
              className="h-full w-full object-cover object-center"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="./yellow-moving-sun.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-linear group-hover:opacity-0">
              <h2 className="text-white underline text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-mono shadow-lg p-2 bg-opacity-50">
                Origin
              </h2>
            </div>
          </div>

          <div
            onClick={handleSolarwind}
            className="box w-full md:w-[32.5%] h-[50vh] md:h-full relative group cursor-pointer"
          >
            <img
              className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-linear group-hover:opacity-0"
              src="./solowind.jpg"
              alt="Solarwind"
            />
            <video
              className="h-full w-full object-cover object-center"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="./solorwind-moving.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-linear group-hover:opacity-0">
              <h2 className="text-white underline text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-mono shadow-lg p-2 bg-opacity-50">
                Solarwind
              </h2>
            </div>
          </div>

          <div
            onClick={handleEffects}
            className="box w-full md:w-[32.5%] h-[50vh] md:h-full relative group cursor-pointer"
          >
            <img
              className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-linear group-hover:opacity-0"
              src="./aouras.jpg"
              alt="Aouras"
            />
            <video
              className="h-full w-full object-cover object-center"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="./aouras-moving.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-linear group-hover:opacity-0">
              <h2 className="text-white underline text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-mono shadow-lg p-2 bg-opacity-50">
                Effects
              </h2>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default ThreeDivExp;
