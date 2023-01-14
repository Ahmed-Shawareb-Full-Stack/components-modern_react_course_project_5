import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NavigationProvider from "./context/NavigationContext";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
