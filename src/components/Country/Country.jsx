import { useState } from "react";
import "./Country.css"

const Country = ({country, visitHandlers}) => {
    console.log(country)
    console.log(visitHandlers)
    const {name, flags, capital, population, area, maps, cioc, cca3, currencies, languages} = country
    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        setVisited(!visited)
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <div className="img">
                <img src={flags.png} alt="National Flag"/>
                <h3 className="name">{name?.common}</h3>
            </div>
            <h4>Informations</h4>
            <div className="info">
                <p>Code : {cioc}, {cca3}</p>
                <p>Capital : {capital}</p>
                <p>Populations : {population}</p>
                <p>Areas : {area}</p>
                {/* <p>Currency : {currencies}</p> */}
                {/* <p>Language : {languages}</p> */}
                {/* <a href={maps.googleMaps}>On Maps</a> */}
                <button onClick={handleVisited}>{visited ? 'Visited' : 'Going...'}</button>
                <br />
                <button style={{margin: '10px 0'}}>Mark Visited</button>
            </div>
        </div>
    );
};

export default Country;