import { useLoaderData, useNavigate } from "react-router-dom";

const PhoneDetails = () => {
  const phoneDetailsHere = useLoaderData();
//   console.log(phoneDetailsHere.data);

  const { name, image, releaseDate, mainFeatures } = phoneDetailsHere.data;

  const backNav = useNavigate()
  const backButton = () => {
    backNav(-1)
  }

  return (
    <div>
      <h2>Your {name} Details here</h2>
      <img style={{ borderRadius: "7px", width: "15%" }} src={image} alt="" />
      <p>{releaseDate}</p>
      <p>Storage: {mainFeatures.storage}</p>
      <div style={{ display: "flex", gap: "10px", border: "1px solid yellow", padding: "0 10px", borderRadius: "10px" }}>
      Sensors are:
        {mainFeatures?.sensors?.map((sens, idx) => (
          <p key={idx}>{sens}</p>
        ))}
      </div>
      <p>Chip: {mainFeatures?.chipSet}</p>
      <p>DisplaySize: {mainFeatures.displaySize}</p>
      <button onClick={backButton}>Back to allPhone</button>
    </div>
  );
};

export default PhoneDetails;
