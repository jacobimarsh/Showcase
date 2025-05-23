import React, { useRef } from "react";
import Description from "./components/Description.jsx";
import { FigureSection, FigureSectionReverse } from "./components/CvComponents/FigureSections.jsx";
import "./App.css";
import D3Viz from "./components/D3Viz.jsx";
import { Analytics } from "@vercel/analytics/react"

const Home = () => {
  const containerRef = useRef(null); // Create a ref for the scrollable div

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: "smooth" }); // Scroll the div, not window
    }
  };

  return (
    
    <div ref={containerRef} className="h-screen overflow-auto px-10">
      <Analytics />
      
<div className="w-full h-screen flex flex-col relative">
  {/* Image Behind Other Elements, Just Below the Top Border */}
  <img 
    src="/out_minimini.png"
    className="absolute top-[54px] left-0 w-1/3 opacity-45 filter grayscale contrast-125 brightness-75 invert-[18%] z-[-1] ml-3.5"
  />
  
  {/* Right Image (Mirrored, Always 70px from the top) */}
  <img 
    src="/out_minimini.png"
    className="absolute top-[54px] right-0 scale-x-[-1] w-1/3 opacity-45 filter grayscale contrast-125 brightness-75 invert-[18%] z-[-1] mr-3.5"
  />

  {/* Top Border Section */}
  <div className="relative flex items-center w-full h-[120px]">
    <div className="flex-1 border-t-2 border-[#3e3c38] border-dotted ml-7"></div>
    <img 
      src="../helix_leaves.svg" 
      className="w-[100px] mx-2 p-5"
    />
    <div className="flex-1 border-t-2 border-[#3e3c38] border-dotted mr-7"></div>
  </div>

  {/* Navigation Links */}
  <p className="Hero text-2xl flex items-center justify-center text-[#3e3c3] mt-14 space-x-4">
    <a href="/about" target="_blank" rel="noopener noreferrer" className="underline">
      About me
    </a>
    <span>|</span>
    <a href="/Jacob_Marsh_Resume5May.pdf" target="_blank" rel="noopener noreferrer" className="underline">
      CV
    </a>
    <span>|</span>
    <a href="mailto:jake.marsh@live.com.au" className="underline">
      Email
    </a>
    <span>|</span>
    <a href="https://www.linkedin.com/in/jacob-marsh-2822142b5" target="_blank" rel="noopener noreferrer" className="underline">
      LinkedIn
    </a>
    <span>|</span>
    <a href="https://github.com/jacobimarsh" target="_blank" rel="noopener noreferrer" className="underline">
      GitHub
    </a>
    <span>|</span>
    <a href="https://scholar.google.com/citations?user=hkTXBUMAAAAJ&hl=en" className="underline">
      Publications
    </a>
  </p>

  {/* Main Content */}
  <div className="flex-grow flex flex-col items-center justify-center text-[#3e3c3]">
    <h1 className="text-7xl font-bold Hero ml-9 mb-15">Jacob I Marsh</h1>
    <h3 className="text-4xl font-bold Hero ml-9 mt-15">
      Scroll down for a showcase of my bioinformatics research!
    </h3>
  </div>

  {/* Bottom Border Section */}
  <div className="relative flex items-center w-full h-[120px]">
    <div className="flex-1 border-t-2 border-[#3e3c38] border-dotted ml-7"></div>
    <img 
      src="../helix_leaves.svg" 
      className="w-[100px] mx-2 p-5"
    />
    <div className="flex-1 border-t-2 border-[#3e3c38] border-dotted mr-7"></div>
  </div>
</div>


      <div className="">
        <FigureSection
        figure={<D3Viz />}
        description={<Description 
          title={<>Rescaling simulations can massively increase computational efficiency while preserving dynamics of selective sweeps</>}
          author={<><a href="https://doi.org/10.1101/2025.04.24.650500" target="_blank" rel="noopener noreferrer" className="underline">
          (Marsh, Kaushik and Johri 2025)
        </a></>}
          text={<>Interactive plot of nucleotide diversity observed for 100 bp bins in a strictly neutral region as a function of distance from a single moderately strong beneficial mutation of strength <em>2Ns</em> = 100 that reaches fixation from simulations with different scaling factors. The line represents the expected diversity calculated post-fixation (see Eq. 6 in the paper).<em> Play around and explore the results for yourself!</em></>}
        />}
        style={{ marginBottom: "50px", marginTop: "30px" }}
      />
      <FigureSectionReverse 
        figure={<img src="/simrec_Figure1.png" className="w-[880px] h-auto max-w-none m-7" alt="ARG BGS Figure" />} 
        description={<Description 
          title={<>Pitfalls from excessive rescaling of population genetic simulations: reduced diversity at linked loci</>}
          author={<><a href="https://doi.org/10.1101/2025.04.24.650500" target="_blank" rel="noopener noreferrer" className="underline">
          (Marsh, Kaushik and Johri 2025)
        </a></>}
          text={<>Points and dashed lines reflect observed nucleotide diversity in simulations with selection of different parameters (colours) relative to expected diversity under neutrality. As rescaling increases (to the right), so do the genome-wide recombination and mutation rates. <em>Rescaling can cause diversity to drop well below theoretical expectations (solid lines) because multiple crossover events become prevalent (red bar at top), and both interference effects and progeny skew can become severe.</em></>}
        />}
        style={{ minHeight: `clamp(700px, calc(100vh - 150px), 900px)` }}
      />
      <FigureSection
        figure={<img src="/ARG_BGS_Figure2.png" className="w-[1020px] h-auto max-w-none" alt="ARG BGS Figure" />} 
        description={<Description 
          title={<>Selection can bias demographic inference using Ancestral Recombination Graph-based approaches</>}
          author={<><a href="https://doi.org/10.1093/molbev/msae118" target="_blank" rel="noopener noreferrer" className="underline">(Marsh and Johri 2024)</a></>}
          text={<>Historical population size (back-in-time) inferred by Relate for human parameters simulated under five demographic scenarios. Colours of lines for different selection parameters. <em>In humans, demographic inference appears effective with ARG-based approaches, though in species with more pervasive selection we show it can be highly biased</em>.</>}
          narrow={true}
        />}
        style={{ minHeight: `clamp(700px, calc(100vh), 500px)` }}
        narrow={true}
      />
      <FigureSectionReverse 
        figure={<img src="https://github.com/jacobimarsh/crosshapimages/blob/main/images/crosshap_jpg.jpg?raw=true" className="w-[780px] h-auto max-w-none m-3" alt="crosshap Figure" />} 
        description={<Description 
          title={<>crosshap R package for dashboard visualization of trait mining info in local genomic regions for GWAS</>}
          author={<><a href="https://doi.org/10.1093/bioinformatics/btad518" target="_blank" rel="noopener noreferrer" className="underline">(Marsh et al 2023)</a><a href="https://jacobimarsh.github.io/crosshap/" target="_blank" rel="noopener noreferrer" className="underline">(Documentation)</a></>}
          text={<>Visualization built by crosshap. Using a VCF, phenotype scores and metadata as input, the program performs local haplotyping of variants in a region of interest. Marker alleles defining haplotypes are displayed in the centre. Information about individuals in haplotype subpopulations are displayed vertically, genomic stats for linked marker groups and displayed horizontally. <em>crosshap is a tool that gives a snapshot of phenotypic diversity associated with linked markers in a region of interest to highlight subpopulations with adaptive haplotypes for a QTL. </em></>}
        />}
        style={{ minHeight: `clamp(600px, calc(100vh), 900px)` }}
      />
      <FigureSection 
        figure={<img src="/pdh1_figure2.jpg" className="w-[780px] h-auto max-w-none m-7" alt="pdh1 Figure" />} 
        description={<Description 
          title={<>Pod shatter QTL orthologs identified as breeding targets in cowpea and mung bean using comparative genomics and transcriptomics</>}
          author={<><a href="https://doi.org/10.1111/tpj.16209" target="_blank" rel="noopener noreferrer" className="underline">(Marsh et al 2023)</a></>}
          text={<>Phylogenetic relationship between predicted <em>PDH1</em> (pod shatter gene) orthologs and homologs. Significant motifs from multiple sequence alignment are presented on the right. <em>PDH1 is a known QTL in soybean and bean, but this analysis led to discoveries including massive tissue specific expression of VuPDH1 in developing cowpea pods.</em></>}
        />}
        style={{ minHeight: `clamp(700px, calc(100vh - 100px), 1000px)` }}
      />
      <FigureSectionReverse 
        figure={<img src="/cqprot3_figure.png" className="w-[780px] h-auto max-w-none m-7" alt="cqProt-003 figure" />} 
        description={<Description 
          title={<>High protein + high oil phenotype found in soy landraces with unique shared haplotypes at major QTL</>}
          author={<><a href="https://doi.org/10.1007/s00122-022-04045-8" target="_blank" rel="noopener noreferrer" className="underline">(Marsh et al 2022)</a></>}
          text={<>Phenotype associations of haplotype combinations (A-I) of variants at cqProt-003 soy protein QTL with population breakdown. Each dot is an individual possessing a given haplotype population (A-G), coloured by level of domestication. <em>Haplotype C is a landrace-specific haplotype with high oil and protein and may be useful germplasm for breeding.</em></>}
        />}
        style={{ minHeight: `clamp(700px, calc(100vh - 300px), 900px)` }}
      />
      </div>

      {/* Back to Top Button (Fixed Arrow) */}
      <button 
      onClick={scrollToTop} 
      className="fixed bottom-4 right-4 translate-x-[calc(50%-7.5px)] rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center mr-3 mb-1"
      title="Back to Top">
        <img src="/arrow-up-solid.svg" alt="Back to top" className="w-7 h-7" />
      </button>

<div className="fixed top-4 right-4 flex flex-col z-50">
  {/* Email */}
  <a href="mailto:jake.marsh@live.com.au">
    <img src="/mail_icon.svg" className="w-8 h-8 opacity-50 hover:opacity-100 m-2" alt="Email" />
  </a>
  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/jacob-marsh-2822142b5" target="_blank" rel="noopener noreferrer">
    <img src="/linkedin_icon.svg" className="w-8 h-8 opacity-50 hover:opacity-100 m-2" alt="LinkedIn" />
  </a>


  {/* GitHub */}
  <a href="https://github.com/jacobimarsh" target="_blank" rel="noopener noreferrer">
    <img src="/github_icon.svg" className="w-8 h-8 opacity-50 hover:opacity-100 m-2" alt="GitHub" />
  </a>
</div>

      <p className="flex flex-col items-center justify-center text-center whitespace-pre-line pb-4 mt-[-7px]">
  <a href="https://github.com/jacobimarsh/Showcase" target="_blank" rel="noopener noreferrer" className="underline">Made by me!</a>
  {"\n"}Jacob I. Marsh, Bioinformatics | Software
</p>
    </div>
  );
};

export default Home;
