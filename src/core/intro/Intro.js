import React, { useState, Fragment } from 'react';
import './intro.css'

const Intro = () => {
       

        return (
          <section id="intro" >
              
              <h1 className='M title'>PORTFOLIO</h1>
              <div className='compass-container '>
            
                <div className='compass'>
                  <div className='hot-box '></div>
                  {/* <img className='background-ring img-eighty ' src='/photos/compass/backgroundCompass.png' />  */}
                  <img className='outer-ring img-eighty ' src='/photos/compass/outerCompass.png' />
                  <img className='inner-ring img-eighty ' src='/photos/compass/innerCompass.png' />
                  <img className='no-rotate img-eighty ' src='/photos/compass/noRotateCompass.png' />
                  <img className='logo-compass img-eighty ' src='/photos/compass/logoCompass.png' />
                  <img className='words-compass img-eighty ' src='/photos/compass/wordsCompass.png' />
                  
                </div>
              </div>
              
              <div className='about-container'>
                <h2 className='M mini-title'>ABOUT</h2>
                <p>
                Software Engineer who specializes in solving problems. I strive to lead, staying customer obsessed, 
                building creative solutions and driving results.  
                Grew up in the Seattle area, working alongside talented people, striving for a common goal of making amazing applications. 
                </p>
              </div>
              
            </section>
        );

    
}

export default Intro;