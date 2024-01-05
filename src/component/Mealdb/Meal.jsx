import PropTypes from 'prop-types';
const Meal = ({getMeal}) => {
    console.log(getMeal);
    const { strMealThumb, strArea, strCategory } = getMeal;

    const mealStyle = {
        borderRadius: "7px",
        paddingBottom: "20px"
    }

    return (
        <div style={mealStyle}>
            <img style={{width: "90%", borderRadius: "7px" }} src={strMealThumb} alt="" />
            <h3 style={{marginTop: "0" }}>{strCategory} from {strArea}</h3>
        </div>
    );
};

Meal.propTypes = {
    getMeal: PropTypes.object
}

export default Meal;