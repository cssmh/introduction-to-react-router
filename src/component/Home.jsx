import { Outlet } from "react-router-dom";
import './Home.css'
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
