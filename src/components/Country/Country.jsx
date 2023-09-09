import "./Country.css"

const Country = ({country}) => {
    console.log(country)
    const {name, flags, capital, population, area, maps, currencies, languages} = country
    return (
        <div className='country'>
            <div className="img">
                <img src={flags.png} alt="National Flag"/>
                <h3 className="name">{name?.common}</h3>
            </div>
            <h4>Informations</h4>
            <div className="info">
                <p>Capital : {capital}</p>
                <p>Populations : {population}</p>
                <p>Areas : {area}</p>
                {/* <p>Currency : {currencies}</p> */}
                {/* <p>Language : {languages}</p> */}
                <a href={maps.googleMaps}>On Maps</a>
            </div>
        </div>
    );
};

export default Country;