const Search = (searchTerm, data, setData) => {
    if (!data) return "DATA is NULL";
    const totalQuery = Object.keys(data[0]) ||[];
    console.log("total quiry : ",totalQuery)
    console.log("data : ",data)
    // Filter data based on searchTerm
    const filteredData = data.filter(item =>
        totalQuery.length > 0 && totalQuery.some(query => query.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setData(filteredData);
}
export default Search