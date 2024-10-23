import { createContext, useState } from "react";
import loginCoach from "../utils/Coach/loginCoach/login";
import { useNavigate } from "react-router-dom";
import onlogoutCoach from "../utils/Coach/loginCoach/logout";


export  const coachContext = createContext()

const CoachContextProvider = (props)=>{
    const [coachToken, setCoachToken] = useState(localStorage.getItem('coachToken')|| false)
    const backendURL = import.meta.env.VITE_BACKEND_URL
    const navigate = useNavigate('/');
const handleLoginCoach= async(email, password )=>{
    await loginCoach(backendURL,setCoachToken,email, password)
}
const handleLogoutCoach = ()=>{
    onlogoutCoach (setCoachToken,navigate);
}


const value = {
  coachToken, 
  setCoachToken,
  handleLoginCoach,
  handleLogoutCoach
}

    return (
        <coachContext.Provider value={value}>
          {props.children}
        </coachContext.Provider>
      );

}
export default CoachContextProvider