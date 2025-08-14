import React,{useState} from "react";
import { GET_CITIES } from "../GraphQLs/Querys/Queries";
import { useQuery } from "@apollo/client";

export default function Cities(){

    let [cityId, setCityId]= useState(0);
    const {loading, error, data, refetch}= useQuery(GET_CITIES,{
        variables: {citiesId: cityId},
        pollInterval: 5000
    })

    if(loading) return <p>Loading...</p>
    if(error) return <p>{error.message}</p>
    console.log(data);
   //console.log(cityId);
    
    return(
        <div>
             <input type="number" onChange={(e)=>setCityId(e.target.value)} value={cityId}/>
           {data.cities.map((e, i)=>(
            <div key={i}>
                {e.name}
            </div>
           ))}
           <button onClick={()=>refetch({citiesId:'1'})}>click</button>
        </div>
    )
}