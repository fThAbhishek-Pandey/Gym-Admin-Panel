import { useState, useContext } from "react";
import Home from "./pages/Admin/home";
import Login from "./pages/login";
import { adminContext } from "./context/adminContext";
import { coachContext } from "./context/coachContext";
import { ToastContainer } from "react-toastify";
import CoachHome from "./pages/Coatch/coachHome";
function App() {
  const { adminToken } = useContext(adminContext);
  const { coachToken } = useContext(coachContext);
  return (
    <>
      {!(adminToken || coachToken) ? (
        <Login />
      ) : (
        <div>
       { adminToken &&  <Home />}
       { coachToken && <CoachHome/> }
        </div>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
