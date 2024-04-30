import react from "react";
import './AppDownload.css'
import {assets} from "../../assets/assets.js";

const AppDownload = () => {
  return(
      <div className='app-download' id='app-download'>
          <p>Download Our Mobile App</p>
          <div className="app-download-platforms">
            <img src={assets.play_store} alt=""/>
            <img src={assets.app_store} alt=""/>
          </div>
      </div>
  )
}

export default AppDownload
