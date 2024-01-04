import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1 style={{ color: "yellow", marginTop: "0px" }}>React Router</h1>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/users"}>Users</Link>
        <Link to={"/posts"}>Posts</Link>
        <Link to={"/phones"}>Phones</Link>
        <Link to={"/blog"}>Blog</Link>
        <Link to={"/contact"}>Contact Us</Link>
      </nav>
    </div>
  );
};

export default Header;
