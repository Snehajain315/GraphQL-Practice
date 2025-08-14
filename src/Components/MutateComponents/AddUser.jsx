import React,{useState} from "react";
import { ADD_USER } from "../../GraphQLs/Mutations/AddUser";
import { useMutation, useQuery } from "@apollo/client";


export function AddUser(){

    const [formData, setFormData]= useState({name:"", email:"", password:""})

    const [register, {loading, error, data}]= useMutation(ADD_USER)

    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value 
        })
        //console.log(formData)
    }

    const handleSubmit= async(e)=>{
      e.preventDefault();
      try{
       await register({
        variables:{
        name: formData.name,
        email: formData.email,
        password:formData.password
        }
       })
      }
      catch(error){
        console.log(error);
      }
console.log(formData);  
}


   return(
    <div>
       <form onSubmit={handleSubmit}>
       <input type="text" placeholder="Enter Your Name" value={formData.name} name="name" onChange={handleChange}/>
       <input type="text" placeholder="Enter Your Email" value={formData.email} name="email" onChange={handleChange}/>
       <input type="text" placeholder="Enter Your Password" value={formData.password} name="password" onChange={handleChange}/>
       <button>Submit</button>
       </form>
    </div>
   )
}