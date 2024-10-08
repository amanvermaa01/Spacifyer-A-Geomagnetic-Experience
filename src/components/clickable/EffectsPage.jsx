import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const EffectsPage = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="relative h-screen bg-gray-900 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <video
            className="h-screen opacity-0.85 w-full absolute object-cover"
            autoPlay
            loop
            muted
            src="./auoraeffect.mp4"
          ></video>
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
          <main className="flex-grow flex items-end md:items-center">
            <div className="w-full p-8">
              <h1 className="text-4xl md:text-6xl font-light leading-tight max-w-3xl mx-auto">
                An aurora also commonly known as the northern lights or southern
                lights, is a natural light display in Earth's sky, predominantly
                seen in high-latitude regions.
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
          {/* Description Section */}
          <div className="md:w-2/3 mx-auto">
            <p className="text-lg mb-8 text-[30px] space-y-10 font-[rejoy] text-left leading-normal">
              The geomagnetic storm of May 2024, one of the most intense in two
              decades, created spectacular visual effects, particularly through
              widespread auroras. This storm, driven by multiple solar flares
              and coronal mass ejections (CMEs) between May 7 and 11, reached a
              G5 rating—the highest on the geomagnetic storm scale. Auroras were
              visible in regions far from the poles, with sightings as far south
              as the U.S. states of Texas and Arizona, and in northern India​(
              NASA Science )​( NASA Earth Observatory ).
            </p>
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="font-bold mb-4 font-[rejoy]">
                Source:{" "}
                <a
                  className="text-orange-500 hover:text-orange-300 font-[rejoy]"
                  href="https://en.wikipedia.org/wiki/Aurora"
                >
                  en.wikipedia.org
                </a>
              </h2>
            </div>
            <div className="text-2xl ">Scroll Down For More ⬇️</div>
          </div>
        </main>
        <div className="bg-black text-white py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            {/* Image on the left */}
            <div className="md:w-1/2 mb-8 md:mb-0 mx-auto">
              <img
                src="./auoraeffect.webp"
                alt="Geomagnetic Storm"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Text on the right */}
            <div className="md:w-1/2 md:pl-8 mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                1.Formation Of Auroras
              </h2>
              <p className="text-lg mb-4 ">
                Auroras during this event were particularly vivid, displaying
                colors from green to purple and red, depending on altitude and
                atmospheric composition. These natural light shows were reported
                from many unusual locations, thanks to citizen scientists
                contributing photos to platforms like NASA's Aurorasaurus
                project, helping scientists refine their models for predicting
                aurora visibility​( NASA Earth Observatory ).
              </p>
            </div>
          </div>
        </div>
        <div className="bg-black text-white py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            {/* Image on the left */}

            {/* Text on the right */}
            <div className="flex flex-row-reverse items-center">
              <div className="md:w-1/2 md:pl-8 mx-auto">
                <img
                  src="https://scitechdaily.com/images/Geomagnetic-Storm-Satellite-Communications-Art-Concept-777x518.jpg"
                  alt="Geomagnetic Storm"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">
                  2.Satellite Disruption
                </h2>
                <p className="text-lg mb-4">
                  Geomagnetic storms can increase atmospheric drag on
                  satellites, particularly those in low Earth orbit, making it
                  difficult to maintain their trajectories. The increased drag
                  requires satellites to perform more frequent adjustments to
                  avoid collisions with space debris​( European Space Agency ).
                  Additionally, high-energy particles can damage sensitive
                  satellite electronics and degrade their solar panels​( NASA
                  Earth Observatory ).
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black text-white py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            {/* Image on the left */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://images.fastcompany.com/image/upload/f_webp,c_fit,w_750,q_auto/wp-cms/uploads/2022/03/p-1-how-a-solar-storm-could-knock-out-the-power-grid-and-the-internet.jpg"
                alt="Geomagnetic Storm"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Text on the right */}
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">
                3.Power Grid Disturbances
              </h2>
              <p className="text-lg mb-4 ">
                Geomagnetic storms can induce electric currents in long power
                lines, potentially leading to voltage instability and even
                large-scale blackouts. For example, a 1989 storm knocked out
                power in Quebec, Canada. Operators now receive warnings to
                protect grids by rerouting power or disconnecting vulnerable
                components​( European Space Agency ).
              </p>
            </div>
          </div>
        </div>
        <div className="bg-black text-white py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            {/* Image on the left */}

            {/* Text on the right */}
            <div className="flex flex-row-reverse items-center">
              <div className="md:w-1/2 md:pl-8">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5612AQGu0zdK07iObg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1715678390568?e=1732147200&v=beta&t=ky8Wu_IYN7evMQoxN_jltAS2k5CCSB1t3XS7jLOlGjs"
                  alt="Geomagnetic Storm"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pr-8">
                <h2 className="text-3xl font-bold mb-4">
                  4.Communication and Navigation Disruptions
                </h2>
                <p className="text-lg mb-4">
                  Radio communications, especially those using high frequencies,
                  can be severely impacted during geomagnetic storms. The storms
                  can interfere with GPS signals, affecting aviation and
                  shipping that rely on satellite navigation. This disruption
                  occurs because solar flares and CMEs can disturb Earth's
                  ionosphere, where radio waves propagate​( European Space
                  Agency ).
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black text-white py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            {/* Image on the left */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://images.ladbible.com/resize?type=webp&quality=70&width=1920&fit=contain&gravity=auto&url=https://images.ladbiblegroup.com/v3/assets/bltcd74acc1d0a99f3a/bltcf400f518df6bcb5/6643bf4b42a63247ce184c44/uk-radiation-storm.png"
                alt="Geomagnetic Storm"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Text on the right */}
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">5.Radiation Hazards</h2>
              <p className="text-lg mb-4 ">
                Astronauts and high-altitude flights are at risk of increased
                radiation exposure during geomagnetic storms. Energetic
                particles from the Sun can penetrate spacecraft and aircraft at
                high latitudes, prompting rerouting of flights to safer
                altitudes and latitudes during severe storms​( European Space
                Agency ).
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EffectsPage;
