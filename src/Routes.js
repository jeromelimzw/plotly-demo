import React from "react";
import { Route, Switch } from "react-router-dom";

import Scatter from "./Scatter";
import PieChart from "./PieChart";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Scatter sector={[0, 360]} label={90} />}
        />
        <Route
          path="/diversityandinclusion"
          render={() => <Scatter sector={[0, 45]} label={22.5} />}
        />
        <Route
          path="/religiousminorities"
          render={() => <Scatter sector={[45, 90]} label={67.5} />}
        />
        <Route
          path="/societyandprivilege"
          render={() => <Scatter sector={[90, 135]} label={112.5} />}
        />
        <Route
          path="/climateinjustice"
          render={() => <Scatter sector={[135, 180]} label={157.5} />}
        />
        <Route
          path="/equitabletech"
          render={() => <Scatter sector={[180, 225]} label={202.5} />}
        />
        <Route
          path="/sexualorientationidentity"
          render={() => <Scatter sector={[225, 270]} label={247.5} />}
        />
        <Route
          path="/racialminorities"
          render={() => <Scatter sector={[270, 315]} label={292.5} />}
        />
        <Route
          path="/economicjustice"
          render={() => <Scatter sector={[315, 360]} label={337.5} />}
        />
        <Route path="/piechart" component={PieChart} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
