
const onlogoutCoach = (setCoachToken,navigate)=>{
    setCoachToken('')
    localStorage.removeItem('coachToken')
    navigate('/')
}
export default onlogoutCoach