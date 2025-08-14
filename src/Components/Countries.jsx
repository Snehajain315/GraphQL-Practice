import { useQuery } from "@apollo/client";
import GET_COUNTRIES from "../GraphQLs/Querys/Queries";
import './Countries.css';

export default function Countries(){
    const {loading, error, data} = useQuery(GET_COUNTRIES
        // variables:{
        //     offSet: 0,
        //     limit: 10
        // }
    );
    console.log(data);
         
    if(loading) return <p className="loading">Loading....</p>;
    if(error) return <p className="error">Error: {error.message}</p>;
                 
    return(
        <div className="countries-container">
            <h3 className="countries-title">Countries List</h3>
            <div className="cards-grid">
                {data?.countries?.map((country) => (
                    <div key={country.id} className="country-card">
                        <h4 className="country-name">{country.name}</h4>
                        <div className="country-details">
                            <p className="currency">
                                <span className="label">Currency:</span> {country.currency}
                            </p>
                            <p className="currency-symbol">
                                <span className="label">Symbol:</span> {country.currencySymbol}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}