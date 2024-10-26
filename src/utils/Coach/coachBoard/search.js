import { findDate } from "./findDate";
const SearchOrder = (searchTerm,filterdByDate, data, setSearchData) => {
    if (!data){
        setSearchData([]);
        return;
    } 
    // Filter data based on searchTerm
    const filteredData =data.filter(item =>
        (item.price.toString().includes(searchTerm)||
        item.userId.name.toLowerCase().includes(searchTerm.toLowerCase()))&&
        ( filterdByDate === "" || findDate(item.createdAt)===filterdByDate )
    );
    setSearchData(filteredData);
}
export default SearchOrder
