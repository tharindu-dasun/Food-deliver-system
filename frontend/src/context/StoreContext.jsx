import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{
    const [cartItems, setCartItems] = useState({});
    const url = "http:/localhost:4000"
    const [token,setToken] = useState("");
    const [food_List,setFoodList] = useState([])

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
        let totalAmount = 0;
        for (const item in cartItems){
            if (cartItems[item] > 0){
                let itemInfo = food_list.find((product._id === i));
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async ()=> {
        const response = await axios.get(url+"/api/food/list");
        setFoodList(response.data.data)
    }

    useEffect(()=>{

        async function loadData(){
            await fetchFoodList();
            if (localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartamount,
        url,
        token,
        setToken
    }

    return(
        <StoreContext.Provider value={contextValue}>

        </StoreContext.Provider>
    )
}
