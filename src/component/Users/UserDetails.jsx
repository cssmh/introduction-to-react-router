import { Link, useLoaderData } from "react-router-dom";
import "./../../index.css";

const UserDetails = () => {
  const detailsData = useLoaderData();
  const { id, name, email } = detailsData;

  return (
    <div>
      <h2>User id {id}</h2>
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <nav>
        <Link to={"/users"}>Back to all Users</Link>
      </nav>
    </div>
  );
};

export default UserDetails;
