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
                        <span className='bold'>Leading Automation - </span>Data quality issues was our top complaint from clients. So, I built data scans for source tables to notified the dev’s  
                        when the data was flawed and where. I also built data scans on target tables that detected  
                        an overlooked issue of leading and trailing spaces on all our tables throughout various columns.  
                        The amount of tables and data we manage is massive, so developers decided to add trim on all Varchar and Char columns to the views as a bandaid solution. My API was able to pinpoint the columns for us to take care of  
                        the problem at the transformer level instead. Thus, saving a massive amount of time, money and processing on all our client queries.  
                        This was all done through an API  

                        I developed that allowed me to be Architect, Lead Developer, and Product Owner. 
                    </li>
                    <li>
                        <span className='bold'>Leading Security – </span>One of the API projects was receiving F 
                        security ratings during an Aqua Scan which uses the National Vulnerabilities Database for 
                        reference. The lead developer was gone, so I was put in charge just a week before the API 
                        went live to our clients. 
                        Worked around the clock to fix all critical vulnerabilities including: 
                            <ul>
                                <li>CVE-2023-20873: Cloud Foundry security bypass susceptibility.</li>
                                <li>CVE-2022-1471:  Remote code execution susceptibility.</li>
                                <li>CVE-2016-1000027: Remote code execution susceptibility.</li>
                            </ul>
                    </li>
                    <li>
                        <span className='bold'>Leading Test Coverage from 0 to 100% - </span> 
                        I was brought onto an API project with 0% test coverage. The engineers were unsure how to 
                        implement new TMO standard test coverage and I was largely involved in that initiative 
                        as I wrote the Test Driven Development book for my org. After I implemented 
                        test coverage and modularizing spaghetti code we were able to deploy to our production 
                        enviroment with 100% test coverage.
                    </li>

                </ul>
                     
             
            </div>

        </section>
    )
}


export default TMobile
