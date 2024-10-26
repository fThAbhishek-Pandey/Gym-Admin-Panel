export const  findDate = (createdAt)=>{
    const date = new Date(createdAt)
    const strDate = date.toLocaleDateString()
    console.log("i am called : ",strDate)
    return strDate
}