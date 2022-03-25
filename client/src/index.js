import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import apolloClient from "./ApolloClient.ts";
import { ApolloProvider } from "@apollo/client";
import 'antd/dist/antd.css';
import { Provider } from 'react-redux'
import {store} from './store/store.js'


ReactDOM.render(
  <Provider store={store}>
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);
