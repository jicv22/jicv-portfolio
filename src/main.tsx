import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { DrawerProvider, ModalProvider } from "./context/index.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DrawerProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </DrawerProvider>
  </StrictMode>
);
