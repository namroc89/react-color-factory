import React, { useState } from "react";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter,
  useParams
} from "react-router-dom";

import Colors from "./Colors";
import Color from "./Color";
import ColorForm from "./ColorForm";

function Routes() {
  const [colors, addColor] = useState({
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
  });

  function handleAdd(newColor) {
    addColor((prevColors) => ({ ...prevColors, ...newColor }));
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors">
          <Colors colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <ColorForm addColor={handleAdd} />
        </Route>
        <Route path="/colors/:name">
          <Color colors={colors} />
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
