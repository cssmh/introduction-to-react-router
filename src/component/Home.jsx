import { Link, Outlet } from "react-router-dom";
import './Home.css'

const Home = () => {
  return (
    <div>
      <h1 style={{ color: "yellow" }}>Welcome Home!</h1>
      <h3>This is nested routes, not gonna changed</h3>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/blog"}>Blog</Link>
        <Link to={"/contact"}>Contact Us</Link>
        <Link to={"/root"}>Route</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
