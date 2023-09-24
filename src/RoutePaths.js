import React, {useEffect} from 'react';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./core/MainPage.js"


const RoutePaths = () => {
  

    return(
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} /> 
                
            </Routes>
        </Router>
    )
}
export default RoutePaths; 