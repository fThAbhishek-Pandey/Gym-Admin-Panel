import { createContext, useState } from "react";

export  const appContext = createContext()

const AppContextProvider = (props)=>{
    const [count, setCount] = useState(1)
    const value = {
      count
    }
    return (
        <appContext.Provider value={value}>
          {props.children}
        </appContext.Provider>
      );

}
export default AppContextProvider