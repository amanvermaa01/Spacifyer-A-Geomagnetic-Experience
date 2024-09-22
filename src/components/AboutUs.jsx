import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  return (
    <div className="bg-black text-white min-h-screen font-sans relative">
      {/* Header */}
      <header className="flex justify-between items-start p-6 relative z-10">
        <div>
          <h1 className="text-3xl font-bold font-[Rejoy]">Spacifyer</h1>
          <h2 className="text-2xl mt-2 font-[rejoy]">We Built</h2>
          <h2 className="text-2xl font-[rejoy]">&amp; Differently</h2>
        </div>
        <button className="text-xl font-bold font-mono" onClick={handleHome}>
          Home
        </button>
      </header>

      {/* Main Content */}
      <main className="flex justify-between p-6 relative z-10">
        {/* Left side - empty for now */}
        <div className="w-1/2"></div>

        {/* Right side - Awards */}
        <div className="w-1/2">
          <ul className="space-y-6">
            <li className="font-[Rejoy]">
              <h3 className="text-lg mb-2">Aman Verma</h3>
              <ul className="list-disc list-inside">
                <li>Full Stack Developer</li>
                <li>akverma8121@gmail.com</li>
                <li>Ig: amanvermaa08</li>
              </ul>
            </li>
            <li className="font-[Rejoy]">
              <h3 className="text-lg mb-2">Yuvraj Dixit</h3>
              <ul className="list-disc list-inside">
                <li>Web Developer</li>
                <li>dixity718@gmail.com</li>
                <li>Ig: yuraj_2602</li>
              </ul>
            </li>
            <li className="font-[Rejoy]">
              <h3 className="text-lg mb-2">Anshuman Dubey</h3>
              <ul className="list-disc list-inside">
                <li>dubeyanshuman1233@gmail.com</li>
                <li>Ig: anshuman_dubey1233</li>
              </ul>
            </li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 p-6 z-10">
        <p className="text-sm">™️</p>
        <h2 className="text-6xl font-bold font-[Rejoy]">About Us</h2>
      </footer>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="./half blur.jpeg"
          alt="Laboratory background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
    </div>
  );
};

export default AboutUs;
