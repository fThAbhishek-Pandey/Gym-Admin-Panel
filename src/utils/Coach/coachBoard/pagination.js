
export const PrevPagination = (i)=>{
    let prev= i-10;
    if(prev<0) prev = 0;
    return prev;
}
export const NextPagination = (i)=>{
    const next = i+10;
    return next;
}