import {useEffect, useState} from "react";
export default function FetchCars(){
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(true);
    const[error, setError]=useState(null);
    const[sort,setSort]=useState({key:null, direction:"asc"});
    console.log(sort);

    async function fetchData(){
        try{
            setLoading(true);
            const res=await fetch("https://www.techaltum.com/node/api");
            if(!res.ok){throw new Error('error: ${res.status}');}
            const data=await res.json();
           console.log(data);
            setData(data);
           setError(null);
        }
        catch(err){
            console.warn(err.message);
            setError(err);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);

   // console.log(data);

function handleSort(key){
    //console.log(key);
    let direction='asc';
if(sort.key === key && sort.direction === 'asc'){
    direction = 'desc';

}
setSort({key, direction});

const sortedData = [...data].sort((a, b) => {
               if (a[key] < b[key]) {
                    return direction === 'asc' ? -1 : 1;
               }
               if (a[key] > b[key]) {
                    return direction === 'asc' ? 1 : -1;
               }
               return 0;
          });
          setData(sortedData);
 
}

    if(loading) return<div><h3>Loading Data...</h3></div>;
    if(error) return<div>Error : {error.message}</div>;
    
    return(
        <section>
            <h3>Cars Data</h3>
            <table className="table table-bordered fetchcars">
                <thead>
                    <tr><th>S No</th>
                    <th>Name <button className="btn btn-outline-primary float-end" onClick={()=>handleSort("name")}>{sort.key==='name' ? (sort.direction === 'asc' ? '↑' : '↓' ) : '↑↓'}</button></th>
                    <th>Type <button className="btn btn-outline-primary float-end" onClick={()=>handleSort("type")}>{sort.key==='type' ? (sort.direction === 'asc' ? '↑' : '↓' ) : '↑↓'}</button></th>
                    <th>Price <button className="btn btn-outline-primary float-end" onClick={()=>handleSort("price")}>{sort.key==='price' ? (sort.direction === 'asc' ? '↑' : '↓' ) : '↑↓'}</button></th></tr>
                    </thead>
                    <tbody>
                        {
       data.map((elem , ind)=>(
<tr key={ind}><td>{++ind}</td><td>{elem.name}</td><td>{elem.type}</td><td>{(elem.price).toLocaleString('en-in')}</td></tr>                       
       ))
                        }
                    </tbody>
            
            </table>
        </section>
    )

}