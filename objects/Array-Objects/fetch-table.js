import React from "react";
function App() {
    const[users,setUsers]=useState([])
    const[loading,setLoading]=useState(false)
    const[error,setError]=useState("")
   async function fetchData() {
    try{
    setLoading(true)
     const response=await fetch('https://jsonplaceholder.typicode.com/users')
     const data=await response.json()
     setUsers(data)
     console.log(data,"data")
    }
    catch{
        setError(error)
    }
    finally{
        setLoading(false)
    }

}
   useEffect(()=>{
    fetchData()
   },[])
   if(loading)return<p>Loading....</p>
   if(error)return<p>Error:{error}</p>
  return (
    <div>
      <table>
        <thead>
          <th>ID:</th>
          <th>Name:</th>
          <th>Email:</th>
          <th>Address:</th>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  );
}
export default App;
