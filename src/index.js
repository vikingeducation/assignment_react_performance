import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import AppContainer from "./AppContainer";
import PerfProfiler from "./components/PerfProfiler";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <div>
    <PerfProfiler />
    <AppContainer />
  </div>,
  document.getElementById("root")
);
registerServiceWorker();
