import React from "react";
import { GetData } from "./components/UtilsScripts/GetData.jsx";
import GetConstants from "./components/UtilsScripts/GetConstants.jsx";
import Controls from "./components/Controls.jsx";
import Legend from "./components/Legend.jsx";
import Chart from "./components/Chart.jsx";
import "./app.css";

const App = () => {
  const csvUrl = "/all_meansdats.csv";
  const data = GetData(csvUrl) || [];
  const {
    controlsProps,
    legendProps,
    chartAxesProps,
    chartMarksProps,
    chartLineProps,
  } = GetConstants(data);
  if (!data || data.length === 0) {
    return <div>Loading or no data found...</div>;
  }

  return (
    <div>
      <Legend {...legendProps} />
      <Chart
        axesProps={chartAxesProps}
        marksProps={chartMarksProps}
        lineProps={chartLineProps}
      />
      <Controls {...controlsProps} />
    </div>
  );
};

export default App;
