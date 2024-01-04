import { Link, useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const detailsData = useLoaderData();
  console.log(detailsData);
  const { id, name, email } = detailsData;

  return (
    <div>
      <h2>User {id}</h2>
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <nav>
        <Link to={"/users"}>Go to Users again</Link>
      </nav>
    </div>
  );
};

export default UserDetails;