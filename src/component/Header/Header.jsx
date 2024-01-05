import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <div>
      <h1 style={{ color: "yellow", marginTop: "0px" }}>React Router</h1>
      <nav>
        <NavLink to={""}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/users"}>Users</NavLink>
        <NavLink to={"/posts"}>Posts</NavLink>
        <NavLink to={"/phones"}>Phones</NavLink>
        <NavLink to={"/meals"}>Meals</NavLink>
        <NavLink to={"/countries"}>Countries</NavLink>
        <NavLink to={"/blog"}>Blog</NavLink>
        <NavLink to={"/contact"}>Contact Us</NavLink>
      </nav>
    </div>
  );
};

export default Header;
