import { useState, useContext } from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import { adminContext } from "./context/adminContext";
function App() {
  const { adminToken } = useContext(adminContext);
  return <>{adminToken ? <Home /> : <Login />}</>;
}

export default App;
