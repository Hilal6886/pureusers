import React from 'react';
import './Home.scss'
import {GrLocation} from 'react-icons/gr'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {CiTwitter} from 'react-icons/ci'
import {BsListTask } from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'
import {TiSocialPinterestCircular} from 'react-icons/ti'

const { getImageUrl } = require('../../services/media.service.js')
const hilal = getImageUrl('hilal.mp4')
const Home = () => {
    return (
     <section className='homes'>
        <div className="overlays"></div>
            <video src={hilal} muted autoPlay loop type="video/mp4"></video>
            <div className="homeCont container">
                <div className="txtDev">
                    <span className="smalltext">
                        Make Your Favorite Trip With Quantum Tour & Travels
                    </span>
                    <h1 className="homeTtle">
                        SEARCH YOUR DISTINATION
                    </h1>
                    
                    
                </div>
                
                    
                <div className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search  you Destination</label>
                        <div className="input flex">
                            <input type="text" placeholder='EnterName here......' />
                            <GrLocation className='icon'/>
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="city">Slect your date</label>
                        <div className="input flex">
                            <input type="date"/>
                            
                        </div>
                    </div>
                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max price:</label>
                            <h3 className='total'>$6000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="6000" min="1000" />
                        </div>
                        
                        
                       
                
                    </div>
                   
                   
                    </div>  
                    
                
                   
   <div className="homeFooterIcons flex">
    <div className="rightIcons">
        <FiFacebook className='icon'/>
        <AiOutlineInstagram className='icon'/>
        <CiTwitter className='icon'/>

    </div>
    <div className="leftIcons">
    <BsListTask className='icon'/>
    <TbApps className='icon'/>
    <TiSocialPinterestCircular className='icon'/>
        
    </div>
   </div>
   </div>
        
     </section>
    )
}
export default Home