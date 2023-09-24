import React, { useState, Fragment } from 'react';
import "./MainPage.css"
import Intro from './intro/Intro.js'
import Layout from '../layout/Layout.js'
import TMobile from './t-mobile/T-Mobile.js';
import Rocket from './rocket/Rocket.js'
import Amazon from './amazon/Amazon.js'
import Eastside from './eastside/Eastside.js';
import Zed from './zed/Zed.js';
import AR from './ar/AR.js'

const MainPage = ({}) => {
       

        return (
            <Layout>
            <div className="center-layout">
              
              <Intro />

              <div>
                <div className='divider'></div>
                <h2 className='M mini-title'>WORK</h2>
                <TMobile />
                <Rocket />
                <Amazon />
                <Eastside />
                <h2 className='M mini-title'>PERSONAL PROJECTS</h2>
                <Zed />
                <AR />
              </div>
              
              
            </div>
      
          </Layout>
        );

    
}

export default MainPage;