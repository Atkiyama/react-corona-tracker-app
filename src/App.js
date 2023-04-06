import TopPage from "./pages/Toppage";
import './App.css';
import countriesJson from "./countries.json"
import {useState} from "react";


function App() {

  const [country,setCountry] = useState("");
  const [countryData,setCountryData] = useState({
    date: "",
    newConfirmed: "",
    totalConfirmed: "",
    newRecovered: "",
    totalRecovered: "",
  });
  const getCountryData = () => {
    fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
    .then(res => res.json())
    .then(data =>{
      setCountryData({
        date:data[data.length-1].Date,
        newConfirmed: data[data.length-1].Confirmed-data[data.length-2].Confirmed,
        totalConfirmed:data[data.length-1].Confirmed,
        newRecovered: data[data.length-1].Recovered-data[data.length-2].Recovered,
        totalRecovered: data[data.length-1].Recovered
      });
    })
  }
  return (
    <div>
      {console.log(countryData)}
      <TopPage countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData}/>
    </div>
  );
}

export default App;
