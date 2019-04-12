import React, { Component } from "react";
import Plot from "react-plotly.js";

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Plot
          data={[
            {
              values: [30, 20, 40, 20],
              text: ["Open", "Informed", "Engaged", "Activated"],
              showlegend: false,
              hole: 0.4,
              type: "pie",
              hoverinfo: "none",
              direction: "clockwise",
              pull: 0.015,
              rotation: -145
            }
          ]}
          layout={{
            width: 500,
            height: 500,
            title: "Diversity and Inclusion",
            font: { size: 15 }
          }}
        />
      </React.Fragment>
    );
  }
}

export default PieChart;
