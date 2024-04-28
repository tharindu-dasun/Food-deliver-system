import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {StaticRouterProvider} from "react-router-dom/server.js";
import StorecontextProvider from "./components/Context/StoreContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StorecontextProvider>
            <App />
        </StorecontextProvider>
    </BrowserRouter>
)
