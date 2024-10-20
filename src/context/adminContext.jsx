import { createContext, useState } from "react";

export  const adminContext = createContext()

const AdminContextProvider = (props)=>{
    const [adminToken, setAdminToken] = useState(1)
    const value = {
        adminToken
    }
    return (
        <adminContext.Provider value={value}>
          {props.children}
        </adminContext.Provider>
      );

}
export default AdminContextProvider