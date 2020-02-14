import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import config from "./classes/Config";

config.load().then(settings => {
  console.log(`settings`, settings);
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
});
