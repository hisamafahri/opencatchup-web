import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import "~/index.css";
import Routes from "~/routes.tsx";
import Providers from "./providers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Providers>
        <Routes />
      </Providers>
    </BrowserRouter>
  </StrictMode>,
);
