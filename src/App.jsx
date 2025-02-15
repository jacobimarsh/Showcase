import React from "react";
import { GetData } from "./components/UtilsScripts/GetData.jsx";
import GetProps from "./components/UtilsScripts/GetProps.jsx";
import Controls from "./components/Controls.jsx";
import Legend from "./components/Legend.jsx";
import Chart from "./components/Chart.jsx";
import "./app.css";

const App = () => {
  // const csvUrl = "/processed_sweepdata.csv"; // Old data pre-mirror
  const csvUrl = "/mirrored_data.csv"; // Mirrored so that negative distances shown too
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
