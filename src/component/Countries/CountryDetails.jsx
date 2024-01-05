import { useLoaderData } from "react-router-dom";

const CountryDetails = () => {
  const soloCountryData = useLoaderData();
  const { flags, altSpellings, name, population, region, startOfWeek, area, maps, subregion } = soloCountryData[0];

  return (
    <div>
      <h2>{name.common} as {altSpellings[0]}</h2>
      <img src={flags.png} alt="" />
      <div style={{ display: "flex", gap: "8px", textAlign: "left", justifyContent: "space-between" }}>
        <div>
          <p>Region: {region}</p>
          <p>Population: {population}</p>
          <p>Start Of the Week is: {startOfWeek}</p>
        </div>
        <div>
            <p>Area: {area}</p>
            <p>Map link: <a style={{backgroundColor: "purple", borderRadius: "5px", padding: "4px"}} href={maps.googleMaps}> Click Here!</a></p>
            <p>Subregion: {subregion}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
