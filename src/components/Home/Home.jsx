import React ,{useRef} from 'react';
import './Home.scss'
import { GrLocation } from 'react-icons/gr'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { CiTwitter } from 'react-icons/ci'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'
import { TiSocialPinterestCircular } from 'react-icons/ti'
import { Col, Form, FormGroup } from 'reactstrap'



const { getImageUrl } = require('../../services/media.service.js')
const hilal = getImageUrl('hilal_Trim.mp4')

const Home = (props) => {
    const locationRef = useRef('')
    const distanceRef = useRef('0')
    const maxGroupSizeRef = useRef('0')

    const searchHandler = ()=>{
        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const maxGroupsize = maxGroupSizeRef.current.value

        if(location===''|| distance===''|| maxGroupsize==='' ){
           return alert('All feilds are required to fill! ')
        }

       
    }
    const portfolioLink = "https://www.facebook.com/profile.php?id=100087155440871&mibextid=ZbWKwL";
    const instagram = "https://instagram.com/quantumtourandtravels?igshid=ZDdkNTZiNTM=";
    return (
        <section className='homes'>
            <div className="overlays"></div>
           
            <video src={hilal} muted autoPlay loop type="video/mp4" ></video>
            <div className="homeCont container">
                <div className="txtDev">
                    <span className="smalltext">
                        Make Your Favorite Trip With Quantum Tour & Travels 
                    </span>
                    <h1  className="homeTtle">
                        SEARCH YOUR DISTINATION
                    </h1>

                </div>


                <div className="cardDiv grid">
                <FormGroup className='d-flex gap-3 form_group form_group-'>
               
                <div>
                   
                    <input type='text' placeholder=' Enter Where are you going' ref={locationRef}/>
                </div>
            </FormGroup>

                  
                   
                    <span className='search-icon' type='submit' onClick={searchHandler}>
            <i className='ri-search-line'></i>
            </span>
                    
           


                </div>



                <div className="homeFooterIcons flex">
                    <div className="rightIcons">
                    <a href={portfolioLink} target="_blank" rel="noopener noreferrer">  <FiFacebook className='icon' /></a>
                    <a href={instagram} target="_blank" rel="noopener noreferrer">   <AiOutlineInstagram className='icon' /></a>
                      
                      
                        <CiTwitter className='icon' />

                    </div>
                    <div className="leftIcons">
                        <BsListTask className='icon' />
                        <TbApps className='icon' />
                        <TiSocialPinterestCircular className='icon' />

                    </div>
                </div>
            </div>

        </section>
    )
}
export default Home