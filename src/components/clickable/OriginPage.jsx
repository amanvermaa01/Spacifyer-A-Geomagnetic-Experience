import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const OriginPage = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="relative h-screen bg-gray-900 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="./originpage.jpg"
            alt="Rivian vehicle"
            className="w-full h-full object-cover opacity-85"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <header className="flex justify-between items-center p-6">
            <div className="text-2xl font-bold font-[Rejoy]">Spacifyer</div>
            <button
              onClick={handleHome}
              className="text-xl font-bold mt-6 font-mono"
            >
              Home
            </button>
          </header>

          {/* Main Content */}
          <main className="flex-grow flex items-end">
            <div className="w-full p-8">
              <h1 className="text-4xl md:text-6xl font-light leading-tight mr-[700px] max-w-3xl ml-auto">
                Geomagnetic storms, also known as magnetic storms, are caused by
                a disturbance in the Earth's magnetosphere due to solar wind.
              </h1>
            </div>
          </main>

          {/* Navigation Arrows */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <button className="text-4xl opacity-50 hover:opacity-100 transition-opacity">
              &#8592;
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black text-white min-h-screen font-sans">
        {/* Header */}

        {/* Main Content */}
        <main className="px-6 py-12 md:py-24 flex flex-col md:flex-row justify-between mt-[60px]">
          {/* Services Section */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h2 className="font-bold mb-4 font-[rejoy]">
              Source:{" "}
              <a
                className="text-orange-500 hover:text-orange-300 font-[rejoy]"
                href="https://www.nasa.gov/mission_pages/sunearth/spaceweather/geomagnetic-storms.html"
              >
                www.jpl.nasa.gov
              </a>
            </h2>
          </div>

          {/* Description Section */}
          <div className="md:w-2/3">
            <p className="text-lg mb-8">
              Geomagnetic storms, such as the one in May 2024, originate from
              solar activity, particularly when the Sun emits large bursts of
              energy in the form of solar flares or coronal mass ejections
              (CMEs). These disturbances are primarily driven by active sunspot
              regions on the Sun’s surface, which produce magnetic energy that
              is suddenly released.
            </p>
            <div className="text-2xl ">Scroll Down⬇️</div>
          </div>
        </main>
        <div className="bg-black text-white py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            {/* Image on the left */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="./sunorigin.jpg"
                alt="Geomagnetic Storm"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Text on the right */}
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">
                Understanding Geomagnetic Storms Origin
              </h2>
              <p className="text-lg mb-4">
                In May 2024, the storm was associated with a particularly large
                and complex sunspot group known as Active Region 13664. This
                region produced several intense X-class solar flares and
                multiple CMEs that traveled toward Earth. As these CMEs impacted
                Earth’s magnetosphere, they created significant geomagnetic
                disturbances. The arrival of these solar bursts compressed
                Earth's magnetosphere, causing a severe geomagnetic storm. This
                event reached a Dst (Disturbance Storm Time) index of -412 nT,
                making it the sixth largest storm since records began in 1957​(
                ar5iv )​( Annals of Geophysics ).
              </p>
              <p className="text-lg">
                This event underlined the importance of continuous space weather
                monitoring and forecasting, as geomagnetic storms can have broad
                impacts on technology and infrastructure here on Earth.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OriginPage;
