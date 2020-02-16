import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import config from "./config";

config.load().then(() => {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
});
