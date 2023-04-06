import TopPage from "./pages/Toppage";
import './App.css';
import countriesJson from "./countries.json"
import {useState} from "react";
import {Route,Routes,BrowserRouter} from "react-router-dom"
import WorldPage  from "./pages/WorldPage";


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
        date:data[data.length-1].Date.slice(0,10),
        newConfirmed: data[data.length-1].Confirmed-data[data.length-2].Confirmed,
        totalConfirmed:data[data.length-1].Confirmed,
        newRecovered: data[data.length-1].Recovered-data[data.length-2].Recovered,
        totalRecovered: data[data.length-1].Recovered
      });
    })
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <TopPage countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData} countryData={countryData}/>} />
        <Route path="/world" element={<WorldPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
