import React, { useRef } from "react";
import "./App.css";

const About = () => {
  const containerRef = useRef(null); // Create a ref for the scrollable div

  return (
    
    <div ref={containerRef} className="h-screen overflow-auto px-10">
<div className="w-full h-screen flex flex-col relative">
<img 
    src="/local_images/out_minimini.png"
    className="absolute top-[54px] left-0 w-1/3 opacity-45 filter grayscale contrast-125 brightness-75 invert-[18%] z-[-1] ml-3.5"
  />
  {/* Right Image (Mirrored, Always 70px from the top) */}
  <img 
    src="/local_images/out_minimini.png"
    className="absolute top-[54px] right-0 scale-x-[-1] w-1/3 opacity-45 filter grayscale contrast-125 brightness-75 invert-[18%] z-[-1] mr-3.5"
  />

  {/* Top Border Section */}
  <div className="relative flex items-center w-full h-[120px]">
    <div className="flex-1 border-t-2 border-[#3e3c38] border-dotted ml-7"></div>
    <img 
      src="../local_images/helix_leaves.svg" 
      className="w-[100px] mx-2 p-5"
    />
    <div className="flex-1 border-t-2 border-[#3e3c38] border-dotted mr-7"></div>
  </div>


  {/* Main Content */}
  <div className="flex-grow flex flex-col items-center justify-center text-[#3e3c3]">
    <h1 className="text-7xl font-bold Hero ml-9 mb-15">Jacob I Marsh</h1>
    <h3 className="text-4xl font-bold Hero ml-9 mt-15">
      Scroll down for a showcase of my bioinformatics/popgen research!
    </h3>
  </div>

  {/* Bottom Border Section */}
  <div className="relative flex items-center w-full h-[120px]">
    <div className="flex-1 border-t-2 border-[#3e3c38] border-dotted ml-7"></div>
    <img 
      src="../local_images/helix_leaves.svg" 
      className="w-[100px] mx-2 p-5"
    />
    <div className="flex-1 border-t-2 border-[#3e3c38] border-dotted mr-7"></div>
  </div>
</div>

<div className="fixed top-4 right-4 flex flex-col z-50">
  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/jacob-marsh-2822142b5" target="_blank" rel="noopener noreferrer">
    <img src="/local_images/linkedin_icon.svg" className="w-8 h-8 opacity-50 hover:opacity-100 m-2" alt="LinkedIn" />
  </a>

  {/* Email */}
  <a href="mailto:jake.marsh@live.com.au">
    <img src="/local_images/mail_icon.svg" className="w-8 h-8 opacity-50 hover:opacity-100 m-2" alt="Email" />
  </a>

  {/* GitHub */}
  <a href="https://github.com/jacobimarsh" target="_blank" rel="noopener noreferrer">
    <img src="/local_images/github_icon.svg" className="w-8 h-8 opacity-50 hover:opacity-100 m-2" alt="GitHub" />
  </a>
</div>

      <p className="flex flex-col items-center justify-center text-center whitespace-pre-line pb-4 mt-[-5px]">
  Made by me!
  {"\n"}Jacob I. Marsh
  {"\n"}Bioinformatics | Software
</p>
    </div>
  );
};

export default About;
