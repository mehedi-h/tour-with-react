import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlag] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then (res => res.json())
        .then (data => setCountries(data))
    }, [])

    const handleVisitedCountries = country => {
            console.log('nepal visited')
        const newVisited = [...visitedCountries, country]
        setVisitedCountries(newVisited)
    }
    const handleVisitedFlags = flags => {
        console.log('flags')
        const newVisitedFlags = [...visitedFlags, flags]
        setVisitedFlag(newVisitedFlags)
    }

    return (
        <div>
            <h2>Countries : {countries.length}</h2>
            <div style={{ textAlign:"justify"}}>
                <h4>Visited Country : {visitedCountries.length}</h4>
                <ul>
                {
                    visitedCountries.map((country, cca3) => <li key={cca3}>{country.name.common} <br /> <img style={{width: '100px'}} src={country.flags.png} alt="" /></li>)
                }
                </ul>
                {/* <div className="flags-container">
                    {
                        visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                    }
                </div> */}
            </div>
            <div className="country-container">
            {
                countries.map(country => <Country key={country.cca3} visitHandlers={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;