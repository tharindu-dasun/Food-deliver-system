import {createContext, useEffect, useState} from "react";
import {food_list} from "../assets/assets.js";

export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{
    const [cartItems, setCartItems] = useState({});
    const url = "http:/localhost:4000"

    const addToCart = (itemId) => {
        if (!cartItems[itemId]){
            setCartItems((prev) => ({...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartamount = () => {
        let TotalAmount = 0;
        for (const item in cartItems){
            if (cartItems[item] > 0){
                let itemInfo = food_list.find((product._id === i))
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartamount,
        url
    }

    return(
        <StoreContext.Provider value={contextValue}>

        </StoreContext.Provider>
    )
}