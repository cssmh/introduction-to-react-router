import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1 style={{color: 'yellow'}}>Welcome Home!</h1>
            <h3>This is nested routes, not gonna changed</h3>
            <button><a href="/">Home</a></button>
            <button><a href="/about">About</a></button>
            <button><a href="/blog">Blog</a></button>
            <button><a href="/contact">Contact Us</a></button>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;