import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const Country = ({ getCountry }) => {
//   console.log(getCountry);
  const { flags, name } = getCountry;

  const styleCountry = {
    border: "1px solid gray",
    borderRadius: "7px",
    padding: "0 17px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  };

  const btnNavigate = useNavigate()
  const btnDetailsHandler = () => {
    btnNavigate(`/countries/${name.common}`)
  }

  return (
    <div style={styleCountry}>
      <div>
        <h3>{name.common}</h3>
        <img src={flags.png} alt="" />
      </div>
      <button onClick={btnDetailsHandler} style={{ margin: "10px 0", backgroundColor: "rgb(174, 28, 28)" }}>More about {name.common}</button>
    </div>
  );
};

Country.propTypes = {
  getCountry: PropTypes.object,
};

export default Country;
