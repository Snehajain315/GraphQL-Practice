import React,{useState} from "react";
import { GET_USER } from "../GraphQLs/Querys/Queries";
import { useQuery } from "@apollo/client";
import './Countries.css'
import { AddUser } from "./MutateComponents/AddUser";

export default function UserList(){

    const [page, setPage]= useState("1");

    const {loading, error, data}= useQuery(GET_USER,{
        variables: {
            page: "1",
            size: "9"
        }
    },[])

     if(loading) return <p>Loading...</p>
     if(error) return <p>{error.message}</p>
     console.log(data.users);
     //console.log(page);

    //  let num;
    //  const handlePage= ()=>{
    //    num= parseInt(page) 
        
    //  }
    // console.log(num)

    return(
        <div className="countries-container">
            <AddUser/>
            <h3 className="countries-title">Countries List</h3>
            <div className="cards-grid">
          {data.users.data.map((user)=>(
             <div key={user.id} className="country-card">
                        <h4 className="country-name">{user.name}</h4>
                        <div className="country-details">
                            <p className="currency">
                                <span className="label">Email:</span> {user.email}
                            </p>
                        </div>
                    </div>
          ))}
          <button>Show More</button>
          </div>
        </div>
    )
}