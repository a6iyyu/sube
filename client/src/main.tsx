import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./router/router";
import { createGlobalStyle } from "styled-components";
import "@splidejs/splide/css";

const GlobalStyles = createGlobalStyle`
  @media screen and (max-width: 8192px) {
    * {
      opacity: 0;
    }
  }
  @media screen and (max-width: 3120px) {
    * {
      box-sizing: border-box;
      font-family: "Plus Jakarta Sans", Times, sans-serif, serif;
      margin: 0;
      padding: 0;
      opacity: 1;
    }
    ::-webkit-scrollbar {
      display: none !important;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: #fff !important;
    }
  }
  @media screen and (max-width: 324px) {
    * {
      display: none;
    }
  }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <Router />
  </React.StrictMode>,
);