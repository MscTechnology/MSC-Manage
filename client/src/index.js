import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import apolloClient from "./ApolloClient.ts";
import { ApolloProvider } from "@apollo/client";
import { Provider } from 'react-redux'
import {store} from './store/store.js'
import 'react-toastify/dist/ReactToastify.css';
import '../src/i18n/i18n';
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
  <ApolloProvider client={apolloClient}>
    <BrowserRouter basename="/">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);
