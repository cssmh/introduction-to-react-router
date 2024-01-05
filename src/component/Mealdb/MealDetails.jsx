import { useLoaderData, useNavigate } from "react-router-dom";

const MealDetails = () => {

    const detailsMealsLoader = useLoaderData()
    // console.log(detailsMealsLoader.meals[0]);
    const { strArea, strCategory, strInstructions, strMealThumb } = detailsMealsLoader.meals[0];

    const navigation = useNavigate()
    const handleButton = () => {
        navigation(-1)
    }

    return (
        <div>
            <h3>{strArea} {strCategory}</h3>
            <img style={{width: "13%"}} src={strMealThumb} alt="" />
            <p>{strInstructions}</p>
            <button onClick={handleButton} style={{padding: "13px", backgroundColor: "red"}}>Back to Meal</button>
        </div>
    );
};

export default MealDetails;