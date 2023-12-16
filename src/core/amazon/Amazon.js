import './Amazon.css'
import React, { useState } from "react";


const Amazon = () =>{

    return(
        <section id="amazon" className="job-container" >
        
            <div className='title-container'>
                <div className='job-logo'>
                <img src='/photos/amazon/amazon.png'/>
                </div>
                <h1 className="job-title">Tech Artist</h1>
                <h2 className="job-title-sub">Oct 2018 - Feb 2022</h2>
            </div>
          

            <div className='job-content'>
                <div className="job-img-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/77ZJ3jw6EkA?si=NnH5AVjqC1LcEXSS&amp;start=6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                
                <p >
                    Amazon Marketplace lets customers view special products in AR using their phone. 
                    My job was to help enhance the VR product development pipeline.
                    My responsibilities included pioneering new ways to improve efficiency, 
                    upkeeping legacy application scripts, and testing new ways  
                    to automate pipelines through research, and ML capability testing. 
                </p>
                <ul>
                  <li>
                    <span className='bold'>Leading Automation -</span> 
                    Developed python scripts that synced in with developer tools to automate tasks. 
                    This automation involved taking a ML generated 3D package, setting it up within a 
                    3D editing application, and automating the package prep work for it to be uploaded 
                    to QA testing. This automation saved around 3 hours of work per 3D Artist each week 
                    </li>  
                    
                </ul>     
             
            </div>

        </section>
    )
}


export default Amazon
