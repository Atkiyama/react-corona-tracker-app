import Card from "../components/Card";
import Title from "../components/Title";
import Header from "../components/Header";
const WorldPage = (props) => {
    //console.log("TopPageのprops:",props)
    return(
        <div className="world-page-container">
            <Header/>
            <Title />
           <Card allCountriesData={props.allCountriesData}/>
        </div>
    );
};

export default WorldPage; 