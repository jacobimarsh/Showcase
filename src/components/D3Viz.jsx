import React from 'react'
import { GetData } from "./UtilsScripts/GetData.jsx";
import GetProps from "./UtilsScripts/GetProps.jsx";
import Controls from "./Controls.jsx";
import Legend from "./Legend.jsx";
import Chart from "./Chart.jsx";

const D3Viz = () => {
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
    
    
    return (<><div className="Figure">
    <Legend {...legendProps} />
    <Chart 
      axesProps={chartAxesProps} 
      marksProps={chartMarksProps} 
      lineProps={chartLineProps} 
    />
    <Controls {...controlsProps} />
    </div></>)
}

export default D3Viz

