import React, { Component } from "react";
import Plot from "react-plotly.js";
import {
  nameArray,
  categoriesAngleArray,
  getCategories,
  levelArrayRandomized,
  thetaArray,
  oneAngle
} from "./utils/extractData";

class Scatter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radius: [],
      theta: [],
      names: []
    };
  }

  async componentDidMount() {
    await this.renderMarkers();
  }

  renderMarkers = async () => {
    await this.setState({
      radius: levelArrayRandomized(),
      theta: thetaArray(),
      names: nameArray()
    });
  };

  render() {
    const { radius, theta, names } = this.state;
    return (
      <Plot
        className="animated bounceInLeft"
        useResizeHandler={true}
        style={{ width: "100%", height: "100%" }}
        data={[
          ...categoriesAngleArray().map(a => ({
            r: [0, 6.2],
            theta: [0, a],
            type: "scatterpolar",
            line: { dash: "dash", color: "gray", width: 1 },
            hoverinfo: "text"
          })),

          {
            r: [1, 2.6, 4.0, 5.5],
            theta: [90, 90, 90, 90],
            text: ["open", "informed", "engaged", "activated"],
            mode: "text",
            type: "scatterpolar",
            hoverinfo: "none",
            textfont: { size: 15 }
          },
          {
            r: radius,
            theta: theta,
            text: names,
            hoverinfo: "text",

            hoverlabel: {
              bgcolor: "black",
              bordercolor: "black",
              font: { family: "calibri", color: "white", size: 20 }
            },
            mode: "markers",

            marker: {
              symbol: "circle",
              color: "rgb(138, 42, 226)",
              size: 13,
              opacity: 0.5
            },
            type: "scatterpolar"
          }
        ]}
        layout={{
          dragmode: "pan",
          paper_bgcolor: "rgba(0,0,0,0)",
          plot_bgcolor: "rgba(0,0,0,0)",
          margin: { r: 150, l: 150 },
          width: 1000,
          height: 1000,
          showlegend: false,
          polar: {
            sector: this.props.sector,
            opacity: 1,
            layer: "above traces",
            radialaxis: {
              showline: false,
              ticks: "",
              angle: 0,
              tickangle: 0,
              visible: true,
              tickfont: {
                size: 17,
                color: "gray"
              },
              tickmode: "array",
              tickvals: [0, 1.9, 3.35, 4.8, 6.2],
              showticklabels: false,
              range: [0, 6.5]
            },
            angularaxis: {
              showgrid: false,
              tickmode: "array",
              showline: false,
              tickvals: getCategories().map(
                (a, index) => (index + 1) * oneAngle() - oneAngle() / 2
              ),
              ticks: "",
              ticktext: getCategories(),
              tickfont: {
                size: 20,
                color: "gray"
              },
              visible: true
            }
          }
        }}
      />
    );
  }
}

export default Scatter;
