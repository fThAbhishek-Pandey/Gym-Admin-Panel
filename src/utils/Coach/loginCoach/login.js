import axios from "axios";
import { toast } from "react-toastify"
const loginCoach = async(backendURL,setCoachToken,email, password)=>{
    console.log(email, password)
    try {
        const {data} = await axios.post(backendURL+'/api/coach/login',{email, password} )
       if(data) {
        setCoachToken(data.token)
        localStorage.setItem('coachToken' , data.token)
        toast.success(data.message)
       }
    } catch (error) {
        console.log(error);
    }
}
export default loginCoach