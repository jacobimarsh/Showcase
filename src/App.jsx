import React, { useRef } from "react";
import Description from "./components/Description.jsx";
import { FigureSection, FigureSectionReverse } from "./components/CvComponents/FigureSections.jsx";
import "./App.css";
import D3Viz from "./components/D3Viz.jsx";

const App = () => {
  const containerRef = useRef(null); // Create a ref for the scrollable div

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: "smooth" }); // Scroll the div, not window
    }
  };

  return (
    <div ref={containerRef} className="h-screen overflow-auto p-10">
      <FigureSection
        figure={<D3Viz />}
        description={<Description 
          title={<>Rescaling simulations can massively increase computational efficiency while preserving dynamics of selective sweeps</>}
          author={<>[Marsh, Kaushik and Johri 2025]</>}
          text={<>Interactive plot of nucleotide diversity observed for 100 bp bins in a strictly neutral region as a function of distance from a single moderately strong beneficial mutation of strength <em>2Ns</em> = 100 that reaches fixation from simulations with different scaling factors. The line represents the expected diversity calculated post-fixation (see Eq. 6).<em> Play around and explore the results for yourself!</em></>}
        />}
        style={{ marginBottom: "50px", marginTop: "50px" }}
      />
      <FigureSectionReverse 
        figure={<img src="/local_images/simrec_Figure1.png" className="w-[880px] h-auto max-w-none m-7" alt="ARG BGS Figure" />} 
        description={<Description 
          title={<>Pitfalls from excessive rescaling of population genetic simulations: reduced diversity at linked loci</>}
          author={<>[Marsh, Kaushik and Johri 2025]</>}
          text={<>Points and dashed lines reflect observed nucleotide diversity in simulations with selection of different parameters (colours) relative to expected diversity under neutrality. As rescaling increases (to the right), so do the genome-wide recombination and mutation rates. <em>Rescaling can cause diversity to drop well below theoretical expectations (solid lines) because multiple crossover events become prevalent (red bar at top), and both interference effects and progeny skew can become severe.</em></>}
        />}
        style={{ minHeight: "calc(100vh - 150px)" }}
      />
      <FigureSection 
        figure={<img src="/ARG_BGS_Figure2.png" className="w-[920px] h-auto max-w-none m-7" alt="ARG BGS Figure" />} 
        description={<Description 
          title={<>Selection biases demographic inference using Ancestral Recombination Graph-based approaches</>}
          author={<>[Marsh and Johri 2024]</>}
          text={<>Historical population size (back-in-time) inferred by Relate for human parameters simulated under five demographic scenarios. Colours of lines for different selection parameters. <em>In humans, demographic inference appears effective with ARG-based approaches, though in species with more pervasive selection we show it can be highly biased</em>.</>}
        />}
        style={{ minHeight: "calc(100vh - 300px)" }}
      />
      
      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop} 
        className="fixed bottom-4 right-[50%] translate-x-[calc(50%-7.5px)] rounded-full opacity-35 hover:opacity-100 transition-opacity duration-300 shadow-lg flex items-center justify-center"
        title="Back to Top"
      >
        <img src="/local_images/arrow-up-solid.svg" alt="Back to top" className="w-6 h-6" />
      </button>

    </div>
  );
};

export default App;
