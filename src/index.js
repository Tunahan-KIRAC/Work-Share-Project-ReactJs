import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter } from 'react-router-dom';
import { WorkProvider } from "./context/WorkContext";
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WorkProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </WorkProvider>
  </React.StrictMode>
);
