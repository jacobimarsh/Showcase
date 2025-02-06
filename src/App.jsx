import React from 'react';
import Controls from './components/Controls.jsx';
import Chart from './components/Chart.jsx'
import Axes from './components/ChartScripts/Axes.jsx';
import { Marks } from './components/ChartScripts/Marks.jsx';
import Line from './components/ChartScripts/Line.jsx';
import GetProps from './components/UtilsScripts/GetProps.jsx';
import { GetData } from './components/UtilsScripts/GetData.jsx';

const App = () => {

  const csvUrl = '/all_meansdats.csv'; const data = GetData(csvUrl) || [];
  const {chartControlsProps,chartAxesProps,chartMarksProps,chartLineProps,} = GetProps(data);
  if (!data || data.length === 0) {return <div>Loading or no data found...</div>;}

  return (
    <div>
      <Controls {...chartControlsProps} />
      <Chart axesProps={chartAxesProps} marksProps={chartMarksProps} lineProps={chartLineProps}  />
    </div>
  );
};

export default App;
