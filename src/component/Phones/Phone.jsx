import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Phone = ({getPhones}) => {
    console.log(getPhones);

    const { brand, image, phone_name } = getPhones;

    const phoneStyle = {
        border: '1px solid yellow',
        borderRadius: '10px',
        padding: '0px 30px 15px 30px'
    }

    return (
        <div style={phoneStyle}>
            <h3>Brand: {brand}</h3>
            <p>{phone_name}</p>
            <img src={image} alt="" />
            <nav><Link>Details</Link></nav>
        </div>
    );
};

Phone.propTypes = {
    getPhones: PropTypes.object,
  };

export default Phone;