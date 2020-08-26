import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { carReducer } from "./reducers/carReducer";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(
  carReducer,
  applyMiddleware(thunk));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
