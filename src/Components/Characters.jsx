import React, { useState } from "react";
import { GET_CHARACTER } from "../GraphQLs/Querys/Queries";
import { useQuery } from "@apollo/client";

export default function Characters() {

    const [page, setPage]= useState(1);

    const { loading, error, data } = useQuery(GET_CHARACTER, {
        variables: { page: page }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '20px',
            padding: '20px'
        }}>
            {data?.characters?.results?.map((e) => (
                <div key={e.id} style={{
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    padding: '15px',
                    backgroundColor: 'white',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                    <img src={e.image} alt={e.name} style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        borderRadius: '4px'
                    }} />
                    <p style={{ fontWeight: 'bold', margin: '10px 0 5px 0' }}>{e.name}</p>
                    <p style={{ margin: '5px 0' }}>{e.status}</p>
                    <p style={{ margin: '5px 0' }}>{e.species}</p>
                </div>
            ))}

            <div style={{display:"flex", alignItems:"center", justifyContent:"center",columnGap:"10px", margin:"10px auto", width:"90vw"}}>
            <button
            style={{padding:"5px", width:"100px"}}
            onClick={()=>setPage(page-1)} disabled={page===1}
            >
            Prev Page
            </button>
            <button
            style={{padding:"5px", width:"100px"}}
            onClick={()=>setPage(page+1)}
            >
            Next Page
            </button>
            </div>

        </div>
    );
}