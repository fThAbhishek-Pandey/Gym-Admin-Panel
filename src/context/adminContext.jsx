import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const adminContext = createContext();
import onLoginHandleAdmin from "../functions/Context/AdminContext/onhadelLogin";
import onLogoutHandel from "../functions/Context/AdminContext/onLogoutHandel";
const AdminContextProvider = (props) => {
  const [adminToken, setAdminToken] = useState(
    localStorage.getItem("adminToken") || ""
  );
  const backendURL = import.meta.env.VITE_BACKEND_URL
  const navigate = useNavigate();
  const handleLoginAdmin = async (email, password) => {
    await onLoginHandleAdmin( setAdminToken, backendURL, email, password, navigate );
  };
  const handelLogout = () => {
    onLogoutHandel(setAdminToken, navigate);
  };
  const value = {
    adminToken,
    navigate,
    handleLoginAdmin,
    handelLogout,
  };
  return (
    <adminContext.Provider value={value}>
      {props.children}
    </adminContext.Provider>
  );
};
export default AdminContextProvider;
