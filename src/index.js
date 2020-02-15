import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import config from "./config";

config.load().then(settings => {
  console.log(`settings`, settings);
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
});
