import React, { Component } from "react";
import Scatter from "./Scatter";

class ClimateInjustice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Scatter
        sector={[0, 45]}
        background={"0-45-nocolor-annote"}
        bgposition={[0.51, 0.775, 1.03]}
      />
    );
  }
}

export default ClimateInjustice;
