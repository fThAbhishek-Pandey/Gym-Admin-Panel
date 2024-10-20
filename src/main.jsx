import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AdminContextProvider from "./context/adminContext.jsx";
import AppContextProvider from "./context/appContext.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AdminContextProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </AdminContextProvider>
  </BrowserRouter>
);
