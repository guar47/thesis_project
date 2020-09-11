import React from "react";
import BarChart from "react-bar-chart";
import "./BarChartComponent.css";

const margin = { top: 20, right: 20, bottom: 30, left: 70 };

function BarChartComponent(props) {
  const data = props.words.slice(0, 10).map((word) => {
    return { text: word[0], value: word[1] };
  });

  return (
    <div>
      <BarChart
        ylabel="Frequency"
        data={data}
        width={700}
        height={500}
        margin={margin}
      />
    </div>
  );
}

export default BarChartComponent;
