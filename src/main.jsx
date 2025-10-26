import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { FilterProvider } from "./context/FilterContext";
import { CarritoProvider } from "./context/CarritoContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <CarritoProvider>
          <App />
        </CarritoProvider>
      </FilterProvider>
    </BrowserRouter>
  </StrictMode>
);
