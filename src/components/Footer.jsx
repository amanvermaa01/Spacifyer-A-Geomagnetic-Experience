import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black p-8">
      <div className="container mx-auto flex flex-wrap justify-between items-end">
        <div className="w-full md:w-auto mb-4 md:mb-0 text-3xl font-[Rejoy]">
          <p>Lucknow</p>
          <p>Uttar Pradesh-India</p>
        </div>
        <div className="w-full md:w-auto text-3xl mb-4 md:mb-0 font-[Rejoy]">
          <p>spacifyer@gmail.com</p>
        </div>
        <div className="w-full text-3xl md:w-auto font-[Rejoy]">
          <p>©2024 legal</p>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-8xl font-bold font-[rejoy] tracking-wider">
          spacifyer
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
