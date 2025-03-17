import React, { useRef } from "react";
import "./App.css";

const About = () => {
  const containerRef = useRef(null); // Create a ref for the scrollable div

  return (
    
    <div ref={containerRef} className="h-screen overflow-auto px-10">
<div className="w-full h-screen flex flex-col relative">
{/* <img 
    src="/local_images/out_minimini.png"
    className="absolute top-[54px] left-0 w-1/3 opacity-45 filter grayscale contrast-125 brightness-75 invert-[18%] z-[-1] ml-3.5"
  /> */}
  {/* Right Image (Mirrored, Always 70px from the top) */}


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
  <div className="flex-grow flex flex-col items-left text-[#3e3c3] w-[65%]">
    <h1 className="text-7xl font-bold Hero ml-9">About me!</h1>
    <h3 className="text-[19.2px] font-bold Hero ml-9 mt-12">
      Hi, my name's Jacob, I'm a bioinformatics software dev and genetics researcher from Australia currently based in North Carolina!
    </h3>
    <h3 className="text-[19.2px] font-bold Hero ml-9 mt-5">
      I have a PhD in applied bioinformatics, which focused on developing and applying software to identify legume crop QTLs from genomics data.
      After my PhD, I moved from my hometown in Perth over to the Chapel Hill, NC to do a postdoc with Parul Johri (link) which has given me a 
      deep appreciation for the value of population genetics theory to inform effective inference software and analysis. During my time in academia 
      I've dipped my toes (or been completely submerged) in all sorts of research including transcriptomics (scRNA-seq), epigenetics,
      metagenomics, pangenomics, clustering algorithms and population simulations.
    </h3>
    <h3 className="text-[19.2px] font-bold Hero ml-9 mt-5">
      I love developing programs that can accelerate analysis and give non-technical users the tools to 
      better understand, explore, and apply their sequencing data.
    </h3>
    <h3 className="text-[19.2px] font-bold Hero ml-9 mt-5">
    If you have any shared interests feel free to get in touch :)
    </h3>
    <p></p>
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


<div className="grid grid-cols-2 grid-rows-2 gap-4 w-114 absolute top-[64px] right-0 opacity-100 z-[-1] mr-6.5"> {/* Use gap-1 for 4px spacing */}
  {/* Top Left (First Image) */}
  <div className="w-55 h-70 overflow-hidden">
    <img src="/local_images/PicAus.jpeg" className="w-full h-auto object-cover object-top" alt="Aus pic"/>
  </div>

  {/* Top Right (Second Image) */}
  <div className="w-55 h-70 overflow-hidden">
    <img src="/local_images/PicCharleston.jpeg" className="w-full h-full object-cover object-center" alt="Charleston pic"/>
  </div>

  {/* Bottom Left (Empty Space) */}

  {/* <div className="whitespace-pre-line justify-center text-center">
    Southwest Australia
  </div> */}
<div className="w-55 h-70 mt-[-15px] ml-3.5">
  <img 
    src="/local_images/soy1.jpeg" 
    className="w-auto h-[105%] object-cover object-right-top relative" 
    alt="Soy pic"
  />
</div>



  


  {/* Bottom Right (Third Image) */}
  <div className="w-55 h-70 overflow-hidden">
    <img src="/local_images/PicCH.jpeg" className="w-full h-auto object-cover object-top" alt="CH pic"/>
  </div>
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




<p className="flex flex-col items-center justify-center text-center whitespace-pre-line pb-4 pt-2 mt-[-7px]">
  <a href="https://github.com/jacobimarsh/Showcase" target="_blank" rel="noopener noreferrer" className="underline">Made by me!</a>
  {"\n"}Jacob I. Marsh, Bioinformatics | Software
</p>


    </div>
  );
};

export default About;
