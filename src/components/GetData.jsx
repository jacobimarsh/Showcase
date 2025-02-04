import { useState, useEffect } from 'react';
import { csv } from 'd3';

export const GetData = (csvUrl) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = d => {
      d.mean_pi = +d["mean_pi"]; // Parse from string to number
      d.distance = +d["start"];
      d.mean_H1 = d.mean_H1 !== "NA" ? +d["mean_H1"] : null;
      d.scaling = d["scaling"]
      return d
    }
    csv(csvUrl, row).then((loadedData) => {
      setData(loadedData);
    });
  }, [csvUrl]);

  return data;
};
