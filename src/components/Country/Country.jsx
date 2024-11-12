import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {

    const {name, flags , population , area, cca3} = country ;
    
    const [visited, setVisited] = useState(false);

    const handleVisited = ()=> {
        setVisited(!visited);
    }
    

    return (
        <div className={`country ${visited && "visited"}`}>
            <h3 style={{color: visited ? 'red ' : 'black'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p><small>Code: {cca3}</small></p>

            <button onClick={handleVisitedCountries}>Mark Visited</button>
            <br />
            <button onClick={()=> handleVisitedFlags(country.flags.png)}>Add Visited Flag</button>
            <br />

            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'i have visited this country.' : 'i want to visit'}
            <hr />
            <CountryDetail
                country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default Country;