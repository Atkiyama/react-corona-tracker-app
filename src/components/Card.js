const Card = (props) => {
  //console.log("TopPageのprops:",props)

  return (
    <div>
      <h2>Card</h2>

      {props.allCountriesData.map((singleData, index) => (
        <div key={index} className="card">
          <h2>{singleData.Country}</h2>
          <p>新規感染者数:{singleData.NewConfirmed.toLocaleString()}</p>
          <p>感染者総数:{singleData.TotalConfirmed.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
