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
    <div className="flex items-center [@media(min-height:955px)]:h-full justify-center flex-row max-[1340px]:flex-col">
      <div>
        {figure}
      </div>
      <div>
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
          title="Figure 4. Selective sweep dynamics for simulated populations with rescaling"
          author="[Marsh, Kaushik and Johri 2025]"
          text="Interactive plot of nucleotide diversity observed for 100 bp bins in a strictly neutral region as a function of distance from a single moderately strong beneficial mutation of strength 2Ns = 100 that reaches fixation from simulations with different scaling factors. The line represents the expected diversity calculated post-fixation (see Eq. 6)."
        />}
      />
      <FigureSection 
        figure={<div>Figure 1</div>} 
        description={<Description 
          title="Figure 1. Example Analysis"
          author="[Author et al. 2025]"
          text="This is a description for Figure 1, providing insights into the analysis performed and the conclusions drawn from the data."
        />}
      />
      <FigureSection 
        figure={<div>Figure 2</div>} 
        description={<Description 
          title="Figure 2. Comparative Results"
          author="[Author et al. 2025]"
          text="Figure 2 compares different datasets and highlights the significant patterns observed across the samples."
        />}
      />
    </div>
  );
};

export default App;