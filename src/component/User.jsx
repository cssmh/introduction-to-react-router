import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const User = ({getUsers}) => {
    const { id, name, website, phone, email } = getUsers
    const userStyle = {
        border: '1px solid yellow',
        borderRadius: '10px',
        paddingBottom: '10px'
    }
    return (
        <div style={userStyle}>
            <h3>Name: {name}</h3>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
            <nav>
               <Link to={`/users/${id}`}>Show Details</Link>
            </nav>
        </div>
    );
};

User.propTypes = {
    getUsers: PropTypes.object
}

export default User;