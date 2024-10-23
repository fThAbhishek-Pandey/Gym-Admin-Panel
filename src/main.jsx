import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AdminContextProvider from "./context/adminContext.jsx";
import AppContextProvider from "./context/appContext.jsx";
import CoachContextProvider from "./context/coachContext.jsx";
import 'react-toastify/dist/ReactToastify.css';
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AdminContextProvider>
    <CoachContextProvider>
    <AppContextProvider>
        <App />
      </AppContextProvider>
    </CoachContextProvider>
    </AdminContextProvider>
  </BrowserRouter>
);
