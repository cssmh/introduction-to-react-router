import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Meal = ({getMeal}) => {
    // console.log(getMeal);
    const { idMeal, strMealThumb, strArea, strCategory, strMeal } = getMeal;

    const mealStyle = {
        borderRadius: "7px",
        paddingBottom: "20px"
    }

    return (
        <div style={mealStyle}>
            <Link to={`/meals/${idMeal}`}><img style={{width: "90%", borderRadius: "7px" }} src={strMealThumb} alt="" /></Link>
            <h3 style={{marginTop: "0" }}>{strCategory} from {strArea}</h3>
            <p>{strMeal}</p>
        </div>
    );
};

Meal.propTypes = {
    getMeal: PropTypes.object
}

export default Meal;