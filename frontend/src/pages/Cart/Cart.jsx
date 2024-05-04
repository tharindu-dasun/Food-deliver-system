import react, {useContext} from "react";
import './Cart.css'
import {StoreContext} from "../../components/Context/StoreContext.jsx";
import {useNavigate} from "react-router-dom";
const Cart = () => {

    const {cartItems , food_list , removeFromCart , getTotalCartAmount} = useContext(StoreContext);
    const navigate = useNavigate();

  return(
      <div className='cart'>
        <div className="cart-items">
            <div className="cart-items-title">
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <br/>
            <hr/>
            {food_list.map((item,index)=>{
                if(cartItems[item._id]>0)
                {
                    return(
                        <div>
                            <div className='cart-items-title cart-items-item'>
                                <img src={item.image} alt=""/>
                                <p>{item.name}</p>
                                <p>LKR . {item.price}</p>
                                <p>{cartItems[item._id]}</p>
                                <p>LKR . {item.price*cartItems[item._id]}</p>
                                <p onClick={()=> removeFromCart(item._id)} className='cross'>X</p>
                            </div>
                            <hr/>
                        </div>
                    )
                }
            })}
        </div>
          <div className="cart-bottom">
              <div className="cart-total">
                  <h2>Cart Total</h2>
                  <div>
                      <div className="cart-total-details">
                          <p>Sub Total</p>
                          <p>LKR . {getTotalCartAmount()}</p>
                      </div>
                      <hr/>
                      <div className="cart-total-details">
                          <p>Delivery Fee</p>
                          <p>LKR . {getTotalCartAmount()===0?0:50}</p>
                      </div>
                      <hr/>
                      <div className="cart-total-details">
                          <h4>Total</h4>
                          <p>LKR . {getTotalCartAmount()===0?0:getTotalCartAmount()+50}</p>
                      </div>
                    </div>
                  <button onClick={()=>navigate('./order')}>Proceed To Checkout</button>
              </div>
              <div className="cart-promocode">
                  <div>
                      <p>If you have a promo code, Enter it here !</p>
                      <div className='cart-promocode-input'>
                          <input type="text" placeholder="Promo Code"/>
                          <button>Submit</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Cart
