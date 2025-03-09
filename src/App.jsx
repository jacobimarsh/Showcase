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
          title="Selective sweep dynamics for simulated populations with rescaling"
          author="[Marsh, Kaushik and Johri 2025]"
          text="Interactive plot of nucleotide diversity observed for 100 bp bins in a strictly neutral region as a function of distance from a single moderately strong beneficial mutation of strength 2Ns = 100 that reaches fixation from simulations with different scaling factors. The line represents the expected diversity calculated post-fixation (see Eq. 6)."
        />}
      />
      <FigureSection 
        figure={<div>Figure 1</div>} 
        description={<Description 
          title="Selection biases demographic inference using Ancestral Recombination Graph-based approaches"
          author="[Marsh and Johri 2024]"
          text="Historical population size (back-in-time) inferred by Relate for human-like parameters simulated under five demographic scenarios. Colours of lines for  different selection parameters. In humans, demographic inference appears effective with ARG-based approaches, though in species with more pervasive selection we show it can be highly biased."
        />}
      />
      <FigureSection 
        figure={<div>Figure 2</div>} 
        description={<Description 
          title="`crosshap` R package for dashboard visualization of trait mining info in local genomic regions for GWAS"
          author="[Marsh et al 2023][Documentation]"
          text="Overview of the local haplotype analysis pipeline performed by the three core `crosshap` functions. Preprocessing steps (a-c). Marker alleles defining haplotypes (d). Results related to individuals are visualized vertically (e-g), results related to SNPs are visualized horizontally (h-j). `crosshap` is a tool that gives a snapshot of phenotypic diversity associated with linked groups of markers in a region of interest, as well as groups of genetically similar individuals."
        />}
      />
    </div>
  );
};

export default App;