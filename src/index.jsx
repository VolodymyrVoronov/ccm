import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import store from "./redux/store";

import reportWebVitals from "./reportWebVitals";

import { getCoinsData } from "./redux/reducers/app";

import App from "./components/App/App";

import "./styles/reset.scss";
import "./styles/global.scss";
import "./styles/variables.scss";

store.dispatch(getCoinsData(100));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
