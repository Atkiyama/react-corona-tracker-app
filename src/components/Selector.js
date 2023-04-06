const Selector = (props) => {
    //console.log("Selectorのprops:",props)
    return(
        <div>
            <select onChange={(e) => props.setCountry(e.target.value)}>
                <option>Select A Country</option>
            {props.countriesJson.map((country,index) =>
                <option key={index} value={country.Slug}>{country.Country}</option>
            )}
           
           </select>
           <button onClick={props.egetCountryData}>Get Data</button>
        </div>
    );
};

export default Selector;