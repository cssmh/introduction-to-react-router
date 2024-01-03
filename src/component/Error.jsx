import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h2 style={{color: "red"}}>Sorry wrong url!!</h2>
    </div>
  );
}
