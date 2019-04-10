import React, { Component } from "react";
import Scatter from "./Scatter";

class FullChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Scatter sector={[0, 360]} />;
  }
}

export default FullChart;
