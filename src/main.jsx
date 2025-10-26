import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { AppContext } from "./context/AppContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppContext>
        <App />
      </AppContext>
    </BrowserRouter>
  </StrictMode>
);
