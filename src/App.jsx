import React from "react";
import { GetData } from "./components/UtilsScripts/GetData.jsx";
import GetProps from "./components/UtilsScripts/GetProps.jsx";
import Controls from "./components/Controls.jsx";
import Legend from "./components/Legend.jsx";
import Chart from "./components/Chart.jsx";
import Description from "./components/Description.jsx";
import "./App.css";

const FigureSection = ({ figure, description }) => {
  return (
    <div className="flex items-center [@media(min-height:955px)]:h-full [@media(max-width:980px)]:items-start justify-center flex-row max-[1340px]:flex-col"> 
      <div>
        {figure}
      </div>
      <div className="max-[1340px]:ml-[95px]">
        {description}
      </div>
    </div>
  );
};

const App = () => {
  const csvUrl = `${import.meta.env.BASE_URL}mirrored_data.csv`;
  const data = GetData(csvUrl) || [];
  const {
    controlsProps,
    legendProps,
    chartAxesProps,
    chartMarksProps,
    chartLineProps,
  } = GetProps(data);

  if (!data || data.length === 0) {
    return <div>Loading or no data found...</div>;
  }

  return (
    <div className="h-screen overflow-auto p-10">
      <FigureSection
        figure={
          <div className="Figure">
            <Legend {...legendProps} />
            <Chart 
              axesProps={chartAxesProps} 
              marksProps={chartMarksProps} 
              lineProps={chartLineProps} 
            />
            <Controls {...controlsProps} />
          </div>
        }
        description={<Description 
          title="Rescaling simulations can massively increase computational efficiency while preserving dynamics of selective sweeps"
          author="[Marsh, Kaushik and Johri 2025]"
          text="<flag>Interactive plot</flag> of nucleotide diversity observed for 100 bp bins in a strictly neutral region as a function of distance from a single moderately strong beneficial mutation of strength 2Ns = 100 that reaches fixation from simulations with different scaling factors. The line represents the expected diversity calculated post-fixation (see Eq. 6)."
        />}
      />
      <FigureSection 
        figure={<img src="/local_images/simrec_Figure1.png" className="w-[920px] h-auto max-w-none m-7" alt="ARG BGS Figure" />} 
        description={<Description 
          title="Pitfalls when excessive rescaling of population genetic simulations: reduced diversity at linked loci"
          author="[Marsh, Kaushik and Johri 2025]"
          text="Points and dashed lines reflect observed nucleotide diversity in simulations with selection of different parameters (colours) relative to expected diversity under neutrality. As rescaling increases (to the right), so do the genome-wide recombination and mutation rates. Rescaling can cause diversity to drop well below theoretical expectations (solid lines) because multiple crossover events become prevalent (red bar at top), and both interference effects and progeny skew can become severe."
        />}
      />
      <FigureSection 
        figure={<img src="/ARG_BGS_Figure2.png" className="w-[920px] h-auto max-w-none m-7" alt="ARG BGS Figure" />} 
        description={<Description 
          title="Selection biases demographic inference using Ancestral Recombination Graph-based approaches"
          author="[Marsh and Johri 2024]"
          text="Historical population size (back-in-time) inferred by Relate for human parameters simulated under five demographic scenarios. Colours of lines for  different selection parameters. In humans, demographic inference appears effective with ARG-based approaches, though in species with more pervasive selection we show it can be highly biased."
        />}
      />
      <FigureSection 
        figure={<div>crosshap</div>} 
        description={<Description 
          title="`crosshap` R package for dashboard visualization of trait mining info in local genomic regions for GWAS"
          author="[Marsh et al 2023][Documentation]"
          text="Overview of the local haplotype analysis pipeline performed by the three core `crosshap` functions. Preprocessing steps (a-c). Marker alleles defining haplotypes (d). Results related to individuals are visualized vertically (e-g), results related to SNPs are visualized horizontally (h-j). <em>`crosshap` is a tool that gives a snapshot of phenotypic diversity associated with linked groups of markers in a region of interest, as well as groups of genetically similar individuals. </em>"
        />}
      />
      <FigureSection 
        figure={<div>Pdh1</div>} 
        description={<Description 
          title="Comparative analysis of domestication QTL led to discovery of orthologs as breeding targets in new species"
          author="[Marsh et al 2023]"
          text="Phylogenetic relationship between predicted <em>PDH1</em> (pod shatter domestication QTL) orthologs and homologs. Significant motifs from multiple sequence alignment are presented on the right. This analysis led to the discovery of VuPDH1 (cowpea) and VrPDH1 (mung bean) as targets for breeding and editing."
        />}
      />
      <FigureSection 
        figure={<div>cqProt-003</div>} 
        description={<Description 
          title="High protein + high oil phenotype found in soy landraces with unique shared haplotypes at major QTL"
          author="[Marsh et al 2022]"
          text="Phenotype associations of haplotype combinations (A-I) of variants at cqProt-003 soy protein QTL with population breakdown. Each dot is an individual possessing a given haplotype population (A-G), coloured by level of domestication. <em>Haplotype C is a landrace-specific haplotype with high oil and protein.</em>"
        />}
      />
    </div>
  );
};

export default App;