import React from "react";
import { GetData } from "./components/UtilsScripts/GetData.jsx";
import GetProps from "./components/UtilsScripts/GetProps.jsx";
import Controls from "./components/Controls.jsx";
import Legend from "./components/Legend.jsx";
import Chart from "./components/Chart.jsx";
import "./App.css";
import Description from "./components/Description.jsx";

const App = () => {
  // const csvUrl = "/processed_sweepdata.csv"; // Old data pre-mirror
  const csvUrl = `${import.meta.env.BASE_URL}mirrored_data.csv`; // Mirrored so that negative distances shown too
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
      <div className="flex items-center [@media(min-height:955px)]:h-full justify-center flex-row max-[1340px]:flex-col">
        <div className="Figure">
          <Legend {...legendProps} />
          <Chart axesProps={chartAxesProps} marksProps={chartMarksProps} lineProps={chartLineProps} />
          <Controls {...controlsProps} />
        </div>
        {/* When the screen is less than 1340px, move Description 100px to the right */}
        <div className="max-[1340px]:ml-[95px]">
          <Description />
        </div>
      </div>
    </div>
  );
};

export default App;
