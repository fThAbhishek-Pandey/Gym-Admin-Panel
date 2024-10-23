import axios from "axios";
import { toast } from "react-toastify"
const RegisterCoach = async(backendURL,setCoachToken,email, password)=>{

    try {
        const {data} = await axios.post()
       if(data.success) {
         
       }
       else{
        toast.error(data.message)
       }
    } catch (error) {
        console.log(error);
    }
}
export default RegisterCoach