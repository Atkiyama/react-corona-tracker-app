const Selector = (props) => {
  //console.log("Selectorのprops:",props)
  return (
    <div>
      <select onChange={(e) => props.setCountry(e.target.value)}>
        {props.countriesJson.map((country, index) => (
          <option key={index} value={country.Slug}>
            {country.Country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
