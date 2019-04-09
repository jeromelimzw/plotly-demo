import React, { Component } from "react";
import Plot from "react-plotly.js";
import { findOne, findAllExcept } from "./static/info";
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
      namesOne: [],
      isGridOn: true
    };
  }

  componentDidMount() {
    this.renderOthers();
    this.renderOne();
  }

  renderOthers = () => {
    const newRadius = [],
      newTheta = [],
      newNames = [];
    findAllExcept(this.state.searchField).forEach(function(element) {
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
        newNames.push(element.name);
      });
    });
    this.setState({ radius: newRadius, theta: newTheta, names: newNames });
  };
  renderOne = () => {
    const newRadius = [],
      newTheta = [],
      newNames = [];
    findOne(this.state.searchField).forEach(function(element) {
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
        newNames.push(element.name);
      });
    });
    this.setState({
      radiusOne: newRadius,
      thetaOne: newTheta,
      namesOne: newNames
    });
  };

  handleSearchField = async event => {
    await this.setState({ searchField: event.target.value });
    await this.renderOthers();
    await this.renderOne();
  };
  toggleGrid = async () => {
    await this.setState({ isGridOn: !this.state.isGridOn });
  };

  render() {
    return (
      <React.Fragment>
        <input type="button" value="toggle grid" onClick={this.toggleGrid} />
        <div>
          <span> Who are you? </span>
          <input
            type="button"
            onClick={this.handleSearchField}
            value="James Salisbury"
          />
          <input
            type="button"
            onClick={this.handleSearchField}
            value="Anna Pavlova"
          />
          <input
            type="button"
            onClick={this.handleSearchField}
            value="John Dory"
          />
          <input
            type="button"
            onClick={this.handleSearchField}
            value="Nellie Melba"
          />
        </div>
        <div>
          <h1>{this.state.searchField}</h1>
        </div>
        <Plot
          data={[
            {
              selected: {
                marker: {
                  color: "blue"
                }
              },
              unselected: {
                marker: {
                  color: "red"
                }
              },

              r: this.state.radius,
              theta: this.state.theta,
              text: this.state.names,
              hoverinfo: "text",

              hoverlabel: {
                bgcolor: "black",
                bordercolor: "black",
                font: { family: "calibri", color: "white", size: 20 }
              },
              mode: "markers",

              marker: {
                symbol: "circle",
                color: "rgb(138,43,226)",
                size: 13,
                opacity: 0.5
              },
              type: "scatterpolar",
              subplot: "polar",
              hoveron: "points"
            }
            // {
            //   r: this.state.radiusOne,
            //   theta: this.state.thetaOne,
            //   text: this.state.namesOne,
            //   hoverinfo: "text",
            //   hoverlabel: {
            //     bgcolor: "black",
            //     bordercolor: "black",
            //     font: { family: "calibri", color: "white", size: 20 }
            //   },
            //   mode: "markers",

            //   marker: {
            //     symbol: "circle",
            //     color: "rgb(50,200,50)",
            //     size: 13,
            //     opacity: 0.5
            //   },
            //   type: "scatterpolar",
            //   subplot: "polar1"
            // }
          ]}
          layout={{
            dragmode: "pan",
            paper_bgcolor: "rgba(0,0,0,0)",
            plot_bgcolor: "rgba(0,0,0,0)",
            margin: { r: 150, l: 150 },
            width: 1000,
            height: 1000,
            showlegend: false,
            // images: [
            //   {
            //     source: `img/${this.props.background}.png`,
            //     xref: "paper",
            //     yref: "paper",
            //     xanchor: "center",
            //     x: this.props.bgposition[0],
            //     y: this.props.bgposition[1],
            //     sizex: this.props.bgposition[2],
            //     sizey: this.props.bgposition[2],
            //     opacity: 0.8,
            //     layer: "above"
            //   }
            // ],

            polar: {
              sector: this.props.sector,
              opacity: 1,
              layer: "above traces",
              radialaxis: {
                line: { dash: "dot", width: 4 },
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
                ticktext: [
                  "open".padStart(29),
                  "informed".padStart(22),
                  "engaged".padStart(21),
                  "activated".padStart(23),
                  ""
                ],
                range: [0, 6.2]
              },
              angularaxis: {
                tickmode: "array",

                tickvals: [
                  0,
                  22.5,
                  45,
                  67.5,
                  90,
                  112.5,
                  135,
                  180,
                  225,
                  270,
                  315
                ],

                ticks: "outside",
                ticktext: [
                  "",
                  "Diversity & Inclusion",
                  "",
                  "Religious Minorities",
                  "",
                  "Economic Justice",
                  "",
                  "Equitable Tech"
                ],
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
