import { useLoaderData } from "react-router-dom";
import User from "./User";
import "./Users.css"

const Users = () => {
    
    const usersData = useLoaderData()
    console.log(usersData);

    return (
        <div>
            <h2>Total users: {usersData.length}</h2>
            <div className="users">
            {
                usersData.map(soloUser => <User key={soloUser.id} getUsers={soloUser}></User>)
            }
            </div>
        </div>
    );
};

export default Users;