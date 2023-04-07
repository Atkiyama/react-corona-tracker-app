import Card from "../components/Card";
import Title from "../components/Title";
import Header from "../components/Header";
import { WorldPageType } from "../types";
const WorldPage = ({allCountriesData}:WorldPageType) => {
    //console.log("TopPageのprops:",props)
    return(
        <div className="world-page-container">
            <Header/>
            <Title />
           <Card allCountriesData={allCountriesData}/>
        </div>
    );
};

export default WorldPage; 