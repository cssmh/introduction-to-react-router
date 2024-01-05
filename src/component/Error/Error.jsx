import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const btnHandler = useNavigate();

  const handleGoBAckButton = () => {
    btnHandler(-1);
  };

  return (
    <div id="error-page">
      <h2 style={{ color: "red" }}>Sorry wrong url!!</h2>
      <div>
        <h2>Go back where you are from!</h2>
        <button onClick={handleGoBAckButton}>Go back</button>
      </div>
    </div>
  );
}
