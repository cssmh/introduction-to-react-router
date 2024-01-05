import { Outlet, useNavigation } from "react-router-dom";
import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ColorRing } from "react-loader-spinner";

const Home = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Header></Header>
      {navigation.state === "loading" ? (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      ) : (
        <Outlet></Outlet>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Home;
