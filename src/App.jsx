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
        description={<Description />}
      />
      <FigureSection 
        figure={<div>Figure 1</div>} 
        description={<Description />}
      />
      <FigureSection 
        figure={<div>Figure 2</div>} 
        description={<Description />}
      />
    </div>
  );
};

export default App;
