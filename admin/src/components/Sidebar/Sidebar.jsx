import React from "react";
import './Sidebar.css'
import {assets} from "../../assets/assets.js";
const Sidebar = () => {
  return (
      <div className='sidebar'>
        <div className="sidebar-options">
            <div className="sidebar-options">
                <img src={assets.add_icon} alt=""/>
                <p>Add Items</p>
            </div>
            <div className="sidebar-options">
                <img src={assets.order_icon} alt=""/>
                <p>List Items</p>
            </div>
            <div className="sidebar-options">
                <img src={assets.order_icon} alt=""/>
                <p>Orders</p>
            </div>
        </div>
      </div>
  )
}

export default Sidebar
