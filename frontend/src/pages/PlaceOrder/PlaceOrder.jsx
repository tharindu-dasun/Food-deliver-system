import react, {useContext, useState} from "react";
import './PlaceOrder.css'
import {StoreContext} from "../../components/Context/StoreContext.jsx";

const PlaceOrder = () => {

    const {getTotalCartAmount} = useContext(StoreContext)

  return(
      <form className='place-order'>
        <div className="place-order-left">
            <p className="title"> Delivery Information </p>
            <div className="multi-fields">
                <input type="text" placeholder='First Name'/>
                <input type="text" placeholder='Last Name'/>
            </div>
            <input type="email" placeholder='Email Address'/>
            <input type="text" placeholder='Street'/>
            <div className="multi-field">
                <input type="text" placeholder='City'/>
                <input type="text" placeholder='State'/>
            </div>
            <input type="text" placeholder="Contact Number"/>
        </div>
          <div className="place-order-right">
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
                  <button>Proceed To Payment</button>
              </div>
          </div>
      </form>
  )
}

export default PlaceOrder
