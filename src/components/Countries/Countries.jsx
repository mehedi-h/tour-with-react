import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then (res => res.json())
        .then (data => setCountries(data))
    }, [])

    const handleVisitedCountries = country => {
            console.log('nepal visited')
        console.log(country)
    }
    
    return (
        <div>
            <h2>Countries : {countries.length}</h2>
            <div>
                <h4>Visited Country :</h4>
                <ul>

                </ul>
            </div>
            <div className="country-container">
            {
                countries.map(country => <Country key={country.cca3} visitHandlers={handleVisitedCountries} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;