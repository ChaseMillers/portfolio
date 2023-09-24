import React, { Fragment, Suspense, lazy} from "react";
import Menu from "../menu/Menu"
import "./Layout.css"
import "./FormsLayout.css"
import BurgerMenu from '../menu/BurgerMenu.js'

const Layout = ({
    children
}) => (
        <Fragment>  
            <header className="App-header">
            </header>
            <span className="body-container"> 
                {/* <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/> */}
                <BurgerMenu />
               
                    {children}
                
            </span>
        </Fragment>
    );

export default Layout;