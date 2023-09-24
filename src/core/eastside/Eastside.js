import './Eastside.css'
import React, { useState } from "react";


const Freelance = () =>{

    return(
        <section id="freelance" className="job-container" >
        
            <div className='title-container'>
                
                <div className='job-logo'>
                    <img src='/photos/freelance/east.jpg'/>
                </div>
                <h1 className="job-title">Frontend Engineer - Freelance</h1>
                <h2 className="job-title-sub">Nov 2021 - Feb 2022</h2>
                <a href="https://www.eastsideweddingvideography.com/" target="_blank" rel="noreferrer">
                    Website Link
                </a>
            </div>
          

            <div className='job-content'>
                <div className="job-img-container">
                    <img className='job-img' src="/photos/freelance/sofia.jpg"/>    
                </div>
                <p >
                Eastside Wedding Videography needed greater flexibility for their content and a website they could be proud of. I was the lead developer. 
                </p>
                <ul>
                    <li>
                    <span className='bold'>Leading Development - </span> 
                        Built the website in React to achieve custom interactions. Synced it to Google analytics so they could gather insights 
                        on their traffic and customer visit rates. Connected the website to an automated email service that allowed them 
                        manual customization on all email marketing with the convenience of a third-party interface. I conducted user interview testing 
                        with the final product and designed the application to appeal to the target audience.  
                    </li>
                </ul>
               
               
            
             
            </div>

        </section>
    )
}


export default Freelance
