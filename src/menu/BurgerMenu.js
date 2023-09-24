import { slide as Menu } from 'react-burger-menu'
import "./BurgerMenu.css"
import items from "./items.js"
import { NavHashLink } from 'react-router-hash-link';

export default props => {
    return (
      <Menu>
        {items.map((item, i)=> (
               
               <NavHashLink className='menu-item'
                   smooth 
                   to={item.path}
                   key={i}
               >
                   {item.text}
               </NavHashLink> 
       ))}
      </Menu>
    );
  };