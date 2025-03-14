import React from "react";
import Description from "./components/Description.jsx";
import { FigureSection, FigureSectionReverse } from "./components/CvComponents/FigureSections.jsx";
import "./App.css";
import D3Viz from "./components/D3Viz.jsx";

const App = () => {

  return (
    <div className="h-screen overflow-auto p-10">
      <FigureSection
        figure={
          <D3Viz />
        }
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
          text={<>Historical population size (back-in-time) inferred by Relate for human parameters simulated under five demographic scenarios. Colours of lines for  different selection parameters. <em>In humans, demographic inference appears effective with ARG-based approaches, though in species with more pervasive selection we show it can be highly biased</em>.</>}
        />}
        style={{ minHeight: "calc(100vh - 300px)" }}
      />
      <FigureSectionReverse 
        figure={<img src="/local_images/crosshap_image.jpeg" className="w-[820px] h-auto max-w-none m-7" alt="crosshap Figure" />} 
        description={<Description 
          title={<>`crosshap` R package for dashboard visualization of trait mining info in local genomic regions for GWAS</>}
          author={<>[Marsh et al 2023][Documentation]</>}
          text={<>Overview of the local haplotype analysis pipeline performed by the three core `crosshap` functions. Preprocessing steps (a-c). Marker alleles defining haplotypes (d). Results related to individuals are visualized vertically (e-g), results related to SNPs are visualized horizontally (h-j). <em>`crosshap` is a tool that gives a snapshot of phenotypic diversity associated with linked groups of markers in a region of interest, as well as groups of genetically similar individuals. </em></>}
        />}
        style={{ minHeight: "calc(100vh + 100px)" }}
      />
      <FigureSection 
        figure={<img src="/local_images/pdh1_figure2.jpg" className="w-[780px] h-auto max-w-none m-7" alt="pdh1 Figure" />} 
        description={<Description 
          title={<>Comparative analysis of domestication QTL led to discovery of orthologs as breeding targets in new species</>}
          author={<>[Marsh et al 2023]</>}
          text={<>Phylogenetic relationship between predicted <em>PDH1</em> (pod shatter domestication QTL) orthologs and homologs. Significant motifs from multiple sequence alignment are presented on the right. <em>This analysis led to the discovery of VuPDH1 (cowpea) and VrPDH1 (mung bean) as targets for breeding and editing.</em></>}
          />}
          style={{ minHeight: "calc(100vh - 100px)" }}
      />
      <FigureSectionReverse 
        figure={<img src="/local_images/cqprot3_figure.png" className="w-[780px] h-auto max-w-none m-7" alt="cqProt-003 figure" />} 
        description={<Description 
          title={<>High protein + high oil phenotype found in soy landraces with unique shared haplotypes at major QTL</>}
          author={<>[Marsh et al 2022]</>}
          text={<>Phenotype associations of haplotype combinations (A-I) of variants at cqProt-003 soy protein QTL with population breakdown. Each dot is an individual possessing a given haplotype population (A-G), coloured by level of domestication. <em>Haplotype C is a landrace-specific haplotype with high oil and protein.</em></>}
        />}
        style={{ minHeight: "calc(100vh - 300px)" }}
      />
    </div>
  );
};

export default App;