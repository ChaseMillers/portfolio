import './T-Mobile.css'
import React, { useState } from "react";


const TMobile = () =>{

    return(
        <section id="t-mobile" className="job-container" >
        
            <div className='title-container'>
                <div className='job-logo'>
                    <img src='/photos/tmobile/T-Mobile.png'/>
                </div>
                <h1 className="job-title">Backend Engineer</h1>
                <h2 className="job-title-sub">Apr 2022 - Present</h2>
            </div>
          

            <div className='job-content'>
                <div className="job-img-container">
                    <img className='job-img' src="/photos/tmobile/maxresdefault.jpg"/>    
                </div>
                
                <p >
                Joined The ML/OPs Team within the Billing Data and Intelligence Org. 
                Developed multiple Microservices, data pipelines, Databases, and cloud deployment projects. 
                Notable accomplishments include:
                </p>
                <ul>
                    <li>
                        <span className='bold'>Leading Automation - </span>
                        <ul>
                        <li>Lead multiple APIs and microservices projects with CI/CD pipelines for automating processes, 
                            tracking procedures, data flow and data quality reporting. Provided data insights and gave transparency to my org. 
                            Sought out customer pain points and needs, conducting interviews with our clients when needed</li>

                        <li>Automated tasks such as identifying missing data, tables, attributes, broken views, 
                        bad data entries, database to database consistency, and errors in LDMs given to clients.</li> 
                        </ul>
                    </li>
                    <li>
                        <span className='bold'>Leading Development – </span>
                        <ul>
                            <li>
                                Lead microservice development from conception to production launch. The API was built for 
                                tracking and reporting Data quality metrics as well as automating developer tasks within our org.
                            </li>
                            <li>
                                Leveraged and maintained applications such as Gitlab pipelines, Aqua Scan, Kubernetes, Azure, Jenkins,  
                                and Cloud databases to ensure smooth, reliable operations of my applications. 
                            </li>
                
                        </ul>
                    </li>
                
                </ul>
                     
             
            </div>

        </section>
    )
}


export default TMobile
