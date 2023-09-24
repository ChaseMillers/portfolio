import React, { useState, useRef } from "react";
import { NavHashLink } from 'react-router-hash-link';

import './Menu.css';
import items from "./items.js"

const Menu = () => {
   
  return (
    <div id="menu-container">
        
        <ul className="nav">
         
            {items.map((item, i)=> (
                <NavHashLink className='menu-item'
                    smooth 
                    to={item.path}
                    key={i}
                >
                    {item.text}
                </NavHashLink>
            ))}
         
          
        </ul>
      </div>
  );
};

export default Menu;