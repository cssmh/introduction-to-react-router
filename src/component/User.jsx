import PropTypes from 'prop-types';
const User = ({getUsers}) => {
    const { name, website, phone, email } = getUsers
    const userStyle = {
        border: '1px solid yellow',
        borderRadius: '10px'
    }
    return (
        <div style={userStyle}>
            <h3>Name: {name}</h3>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
        </div>
    );
};

User.propTypes = {
    getUsers: PropTypes.object
}

export default User;