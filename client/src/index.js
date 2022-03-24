import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import apolloClient from "./apolloClient.tsx";
import { ApolloProvider } from "@apollo/client";
import 'antd/dist/antd.css';
ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
