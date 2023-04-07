export type CountryDataType = {
    date: string,
    newConfirmed: number,
    totalConfirmed: number,
    newRecovered: number,
    totalRecovered: number,
}



export type CountriesJsonType = {
    Country: string,
    Slug: string,
}[]


export type TopPageType = {
    countriesJson: CountriesJsonType
    setCountry: React.Dispatch<React.SetStateAction<string>>,
    countryData: CountryDataType,
    loading: boolean,
}

export type SelectorType = {
    setCountry: React.Dispatch<React.SetStateAction<string>>,
    countriesJson: CountriesJsonType,
}

export type ResultType = {
    countryData: CountryDataType,
    loading: boolean,
}

export interface SingleCountriesDataType {
    Country: string,
    NewConfirmed: number,
    TotalConfirmed: number,
}

export interface AllCountriesDataType extends Array<SingleCountriesDataType> { }

export interface SingleCountriesDataType {
    Country: string,
    NewConfirmed: number,
    TotalConfirmed: number,
}

export interface WorldPageType {
    allCountriesData: Array<SingleCountriesDataType>,
}




export interface CardType {
    allCountriesData: Array<SingleCountriesDataType>,
}