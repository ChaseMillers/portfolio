import './Rocket.css'
import React, { useState } from "react";


const Rocket = () =>{

    return(
        <section id="rocket" className="job-container" >
        
            <div className='title-container'>
                <div className='job-logo'>
                <img src='/photos/rocket/rocket.png'/>
                </div>
                <h1 className="job-title">Frontend Engineer</h1>
                <h2 className="job-title-sub">Feb 2022 - Apr 2022</h2>
            </div>
          

            <div className='job-content'>
                <div className="job-img-container">
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7092131462149206016?compact=1" height="399" width="710" frameBorder="0" allowFullScreen="" title="Embedded post"></iframe>   
                </div>
                
                <p >
                Coming from my 3D WebGL experience at Amazon, Rocket Communications brought me on as a Frontend 
                Developer to assist with their upcoming project, Space ACME, a 3D visualization tool. This tool was 
                being developed for the US and UK Space Force to be used for tracking XGEO objects.
                </p>
                <ul>
                    <li>
                        <span className='bold'>Leading Performance Improvements -</span> With various 3D visuals and effects in place, 
                        the application was bogged down with heavy processing. I figuring out 
                        how to remove the need for post-processing, while also implementing a less taxing method for bloom special effects.
                        This reduced application start time and reduced demand on the users GPU from 10% - 30%. 
                    </li>
                    <li>
                        <span className='bold'>Performance Benchmarking -</span> It was difficult to showcase WebGL performance improvements 
                        to shareholders. So I developed and implemented tools that allowed developers to snapshot and compare performance numbers during any task. 
                        When the tool was turned on, it would show you rendered frames per second and allow snapshots and result comparisons. 
                        This allowed us to showcase hard numbers to our shareholders.
                    </li>
                </ul>
               
            </div>

        </section>
    )
}


export default Rocket
