import { createContext, useState } from "react";
import loginCoach from "../utils/Coach/loginCoach/login";
import { useNavigate } from "react-router-dom";
import onlogoutCoach from "../utils/Coach/loginCoach/logout";
import CoachBoard from "../utils/Context/CoachContext/coachProfile";

export  const coachContext = createContext()

const CoachContextProvider = (props)=>{
    const [coachToken, setCoachToken] = useState(localStorage.getItem('coachToken')|| false)
    const backendURL = import.meta.env.VITE_BACKEND_URL
    const [coachData,setCoachData]= useState(false)
    const navigate = useNavigate();
const handleLoginCoach= async(email, password )=>{
    await loginCoach(backendURL,setCoachToken,email, password)
}
const handleLogoutCoach = ()=>{
    onlogoutCoach (setCoachToken,navigate);
}
const handelCoachboard = async ()=>{
    await CoachBoard(backendURL,coachToken, setCoachData)
    console.log("higk : ",coachData)
}

const value = {
  coachToken, 
  setCoachToken,
  handleLoginCoach,
  handleLogoutCoach,
  handelCoachboard,
  coachData
}

    return (
        <coachContext.Provider value={value}>
          {props.children}
        </coachContext.Provider>
      );

}
export default CoachContextProvider