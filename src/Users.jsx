import {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function FetchUsers(){
    const [users, setUsers]=useState([]);

    async function fetchData(){
        const data=await fetch("https://jsonplaceholder.typicode.com/users");
        const res=await data.json();
        setUsers(res);
        console.log(res);
    }

useEffect(()=>{
    fetchData();
},[])
console.log(users);

return(
    <section>
        <h4 className="mb-3">JsonPlaceholder  Users API</h4>
      {  /*
<table className="table table-bordered border-primary">
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
        </tr>
    </thead>
    <tbody>
{
    users.map(elem=>(
        <tr key={elem.id}>
        <td>{elem.id}</td> 
        <td>{elem.name}</td>  
        <td>{elem.username}</td>
        <td>{elem.email}</td>
        <td>{elem.phone}</td>  
        <td>{elem.website}</td> 
        </tr>
    ))
}
    </tbody>
</table>*/}

<div className="row">
{
users.map(user=>(
<div  key={user.id} className="col-sm-6">

<div className="card mb-4">
<div className="card-header">
<h4 className="card-title">Name: {user.name}</h4>
    
    </div>

<div className="card-body">
    <img className="float-end" src="favicon.svg" alt={user.username} width={100}/>
    <h5 className="card-subtitle mb-2 text-body-secondary">username:  {user.username}</h5>
<p>Website: <a href={"http://".concat(user.website)}  target="_blank"  rel="noopener noreferred" className="card-link">{user.website}</a></p>

<p>Phone: <a href={"tel:".concat(user.phone)} className="card-link">{user.phone}</a></p>

<p>Email: <a href={"mailto:".concat(user.email)} className="card-link">{user.email}</a></p>

<p>Company: {user.company.name}</p>
    </div>

<div className="card-footer text-body-secondary">
<p>Address: {user.address.suite} , {user.address.street} , {user.address.city}</p>

<p>Pincode: {user.address.zipcode}</p>
<p>Latitude: {user.address.geo.lat} Longitude: {user.address.geo.lon} </p>
    </div>  
 


 </div>
 </div>    

))

}
</div>

    </section>
)


}