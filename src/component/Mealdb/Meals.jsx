import { useLoaderData } from "react-router-dom";
import Meal from "./Meal";
import "./Meals.css"

const Meals = () => {
  const dataLoad = useLoaderData();
  const { meals } = dataLoad;

  return (
    <div>
      <h2>Latest Meals: {meals.length}</h2>
      <div className="meals">
      {
        meals.map(soloMeal => <Meal key={soloMeal.idMeal} getMeal={soloMeal}></Meal>)
      }
      </div>
    </div>
  );
};

export default Meals;
