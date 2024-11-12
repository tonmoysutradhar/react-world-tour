// import CountryData from "../CountryData/CountryData";


// const CountryDetail = ({country, handleVisitedCountries, handleVisitedFlags}) => {
//     return (
//         <div>
//             <h4>Country Details</h4>
//             <hr />
//             <CountryData
//                 country={country}
//                 handleVisitedCountries={handleVisitedCountries}
//                 handleVisitedFlags={handleVisitedFlags}
//             ></CountryData>
//         </div>
//     );
// };

// export default CountryDetail;


import CountryData from "../CountryData/CountryData";


const CountryDetail = (props) => {
    const {country, handleVisitedCountries, handleVisitedFlags} = props ;

    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            {/* <CountryData
                country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryData> */}

            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetail;