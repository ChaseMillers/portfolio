import './AR.css'
import React, { useState } from "react";


const AR = () =>{

    return(
        <section id="personal" className="job-container" >
        
            <div className='title-container'>
              
                <h1 className="job-title">AR - iPhone</h1>
                <h2 className="job-title-sub">Jan 2022</h2>
              <div className='flex'>
                <div className='job-logo qr-code'>
                        <img src="https://qrcode.tec-it.com/API/QRCode?data=https%3a%2f%2fchase-miller.webflow.io%2fiphone&backcolor=%23ffffff" />
                    </div>
                    <div className='ar-container'>
                        <div className='phone-icon'>
                            <img src="/photos/personal/phoneIcon.png" />
                        </div>
                        <p >SCAN ME <br/> <span className='grey'>AR VIEW </span></p>  
                    </div>
              </div>
              
                
            </div>
          

            <div className='job-content'>
            <div className="job-img-container">
                <model-viewer 
                    src="photos/ar/iphone.glb"
                    ios-src="photos/ar/iphone.usdz"
                    ar 
                    camera-controls 
                    disable-zoom
                    auto-rotate
                    ar-modes="webxr scene-viewer quick-look"
                    camera-orbit="30deg auto auto" 
                    max-camera-orbit="auto 100deg auto" >
                </model-viewer>   
            </div>

           
                
                <p >
                    Leveraging Googles AR developer tools, I prepared an iPhone in their 3D editor to be viewed in VR.
                    Scan the QR to activate Google Play VR on your phone, then point the camera at 
                    your desk to view the product in VR.  

                </p>
             
            </div>

        </section>
    )
}


export default AR
