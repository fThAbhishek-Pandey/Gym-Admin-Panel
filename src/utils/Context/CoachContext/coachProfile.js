import axios from "axios";
import { toast } from "react-toastify"
const CoachBoard = async(backendURL,coachToken, setCoachData)=>{
    console.log("utils : ",coachToken);
    try {
        const {data} = await axios.get(backendURL+'/api/coach/dashboard',{headers:{'authorization': `Bearer ${coachToken}`}} )
        console.log(data);
        if(data.data){ 
        setCoachData(data.data)
        toast.success(data.message)
    }
    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }
}
export default CoachBoard