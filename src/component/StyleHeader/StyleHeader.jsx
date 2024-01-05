import welcome from "../../../public/welcome.png";
const StyleHeader = () => {

    const myHeader = {
        marginTop: "15px",
    }

  return (
    <div style={myHeader}>
      <img style={{width: "55%", borderRadius: "5px"}} src={welcome} alt="" />
    </div>
  );
};

export default StyleHeader;
