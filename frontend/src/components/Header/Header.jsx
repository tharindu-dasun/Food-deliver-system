import react from "react";
import './Header.css'
const Header = () => {
  return(
      <div className='header'>
        <div className="header-contents">
            <h2>Order Your Favourite Foods !</h2>
            <p>"Welcome to [App Name], your go-to destination for delicious food delivered right to your doorstep! Browse our extensive menu of mouth-watering dishes, from savory pizzas to exotic sushi, and place your order with just a few taps. With easy payment options and speedy delivery, satisfying your cravings has never been easier. Join the food revolution with [App Name] today!"</p>
            <button>View Menu</button>
        </div>
      </div>
  )
}

export default Header
