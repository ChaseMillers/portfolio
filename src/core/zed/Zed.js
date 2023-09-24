import './Zed.css'
import React, { useState } from "react";


const Zed = () =>{

    return(
        <section id="personal" className="job-container" >
        
            <div className='title-container'>
              
                <h1 className="job-title">WebGL Laboratory</h1>
                <h2 className="job-title-sub">Feb 2022</h2>
                <a href="https://zed-laboratory.netlify.app/" target="_blank" rel="noreferrer">
                    Website Link
                </a>
            </div>
          

            <div className='job-content'>
                <div className="job-img-container">
                    <img className='job-img' src="/photos/personal/zedOrange.png"/>    
                </div>
                
                <p >
                Pushing the boundaries of WebGL. 
                I built this project with React, utilizing mouse tracking, engineered shaders, performant rendering methods, 
                reflections, and animations. All of this achieved with the Three.js library. 
                When testing, to complete a sequence, activate the lasers and point them at the 
                battery for a system overload. 
                Concept was loosely based off Zed Run, one of the most successful WebGL games in the market.

                </p>
             
            </div>

        </section>
    )
}


export default Zed
