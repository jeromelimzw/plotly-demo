import React, { Component } from "react";
import Plot from "react-plotly.js";
import { findOne, findAllExcept, getCategories } from "./static/info";
import _ from "lodash";

class Scatter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radius: [],
      theta: [],
      names: [],
      searchField: "Nellie Melba",
      radiusOne: [],
      thetaOne: [],
      namesOne: []
    };
  }

  componentDidMount() {
    this.renderOthers();
    this.renderOne();
  }

  renderMarkers = searchterm => {
    const newRadius = [],
      newTheta = [],
      newNames = [];

    const array =
      searchterm === 1
        ? findAllExcept(this.state.searchField)
        : findOne(this.state.searchField);

    array.forEach(function(element) {
      _.times(8, () => newNames.push(searchterm === 1 ? element.name : "You"));

      element.categories.forEach(function(element) {
        newRadius.push(
          element.level === 1
            ? _.random(0.7, 1.8)
            : element.level === 2
            ? _.random(2.3, 3.2)
            : element.level === 3
            ? _.random(3.5, 4.5)
            : element.level === 4
            ? _.random(5, 5.8)
            : undefined
        );
        newTheta.push(
          _.random(
            element.category.sector[0] + 10,
            element.category.sector[1] - 10
          )
        );
      });
    });
    return [newRadius, newTheta, newNames];
  };

  renderOthers = () => {
    const markers = this.renderMarkers(1);
    this.setState({ radius: markers[0], theta: markers[1], names: markers[2] });
  };

  renderOne = () => {
    const markers = this.renderMarkers();
    this.setState({
      radiusOne: markers[0],
      thetaOne: markers[1],
      namesOne: markers[2]
    });
  };

  handleSearchField = async event => {
    await this.setState({ searchField: event.target.value });
    await this.renderOthers();
    await this.renderOne();
  };

  render() {
    const { radius, theta, names, radiusOne, thetaOne, namesOne } = this.state;
    return (
      <React.Fragment>
        <div>
          <span> Who are you? </span>
          <select onChange={this.handleSearchField}>
            <option value="James Salisbury">James Salisbury</option>
            <option value="Anna Pavlova">Anna Pavlova</option>
            <option value="John Dory">John Dory</option>
            <option value="Nellie Melba">Nellie Melba</option>
          </select>
        </div>
        <div>
          <h1>{this.state.searchField}</h1>
        </div>
        <Plot
          useResizeHandler={true}
          style={{ width: "100%", height: "100%" }}
          data={[
            ...[0, 45, 90, 135, 180, 225, 270, 315].map(a => ({
              r: [0, 6.2],
              theta: [0, a],
              type: "scatterpolar",
              line: { dash: "dash", color: "gray", width: 1 },
              hoverinfo: "text"
            })),

            {
              r: [1, 2.6, 4.0, 5.5],
              theta: [
                this.props.label,
                this.props.label,
                this.props.label,
                this.props.label
              ],
              text: ["open", "informed", "engaged", "activated"],
              mode: "text",
              type: "scatterpolar",
              hoverinfo: "none",
              textfont: { size: 15 }
            },
            ...[
              [radius, theta, names, "rgb(138, 42, 226)"],
              [radiusOne, thetaOne, namesOne, "rgb(50, 200, 50)"]
            ].map(a => ({
              r: a[0],
              theta: a[1],
              text: a[2],
              hoverinfo: "text",

              hoverlabel: {
                bgcolor: "black",
                bordercolor: "black",
                font: { family: "calibri", color: "white", size: 20 }
              },
              mode: "markers",

              marker: {
                symbol: "circle",
                color: a[3],
                size: 13,
                opacity: 0.5
              },
              type: "scatterpolar"
            }))
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
                  (a, index) => (index + 1) * 45 - 22.5
                ),
                ticks: "",
                ticktext: getCategories().map(a => a.name),
                tickfont: {
                  size: 20,
                  color: "gray"
                },
                visible: true
              }
            }
          }}
        />
      </React.Fragment>
    );
  }
}

export default Scatter;
