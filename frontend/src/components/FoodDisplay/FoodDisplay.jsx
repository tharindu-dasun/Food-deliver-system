import react, {useContext} from "react";
import './FoodDisplay.css'
import {StoreContext} from "../Context/StoreContext.jsx";
import FoodItem from "../FoodItem/FoodItem.jsx";

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return(
      <div className='food-display' id='food-display'>
          <h2>Our Best Dishes For You</h2>
          <div className="food-display-list">
              {food_list.map(()=>{
                  return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
              })}
          </div>
      </div>
  )
}

export default FoodDisplay
