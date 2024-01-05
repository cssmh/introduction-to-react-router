import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./Country";
import './Countries.css'

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((data) => setCountries(data.data));
  }, []);

  return (
    <div>
      <h2>{countries.length}</h2>
      <div className="countries">
      {
        countries.slice(166, 190).map(soloCountry => <Country key={soloCountry.cca3} getCountry={soloCountry}></Country>)
      }
      </div>
    </div>
  );
};

export default Countries;
