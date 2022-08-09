import React from 'react'
import App from './App'
import { HashRouter } from "react-router-dom"
import { hydrate, render } from "react-dom"

const APP = (
  <HashRouter>
    <App />
  </HashRouter>
)

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
}
else {
  render(APP, rootElement);
}