import {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function FetchUsers1(){
    const [users, setUsers]=useState([]);

    async function fetchData(){
        const data=await fetch("https://api.github.com/users");
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
        <h3 className="mb-3">Github Users API</h3>

<table className="table table-bordered border-primary">
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Git Reference</th>
            <th>Type</th>
            <th>Node id</th>
            <th>Users</th>
        </tr>
    </thead>
    <tbody>
{
    users.map(elem=>(
        <tr key={elem.id}>
        <td>{elem.id}</td> 
        <td>{elem.login}</td>
        <td><a href={elem.url}>{elem.login} Git Reference</a></td>
        <td>{elem.type}</td>
        <td>{elem.node_id}</td>
         <td><img className="float-center" src={elem.avatar_url} alt={elem.username} width={100}/></td>
        </tr>
    ))
}
    </tbody>
</table>


    </section>
)


}