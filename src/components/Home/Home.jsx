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
// const hilal="https://drive.google.com/file/d/1GTJbqjaNpoQNA-CWVFH7jteNEzsFBegJ/view?usp=share_link"
// const hilal="https://drive.google.com/drive/u/0/folders/1OJx8sq-2A-SyXIeM_9mwCAVMEa6oFBrA"
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
    return (
        <section className='homes'>
            <div className="overlays"></div>
            <video src={hilal} muted autoPlay loop type="video/mp4" playbackRate="0.1" defaultPlaybackRate="0.1"></video>
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
                <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                <span><i class='ri-map-pin-line'></i></span>
                <div>
                    <h6>Location</h6>
                    <input type='text' placeholder=' Enter Where are you going' ref={locationRef}/>
                </div>
            </FormGroup>

                    <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                <span><i class='ri-map-pin-time-line'></i></span>
                <div>
                    <h6>Distance</h6>
                    <input type='number' placeholder=' Enter Distance k/m' ref={distanceRef}/>
                </div>
            </FormGroup>
                    <FormGroup className='d-flex gap-3 form_group form_group-last'>
                        <span><i class='ri-group-line'></i></span>
                        <div>
                            <h6>Max people</h6>
                            <input type='number' placeholder=' Enter number of people' ref={maxGroupSizeRef} />
                        </div>
                    </FormGroup>
                   
                    <span className='search-icon' type='submit' onClick={searchHandler}>
            <i class='ri-search-line'></i>
            </span>
                    
           


                </div>



                <div className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className='icon' />
                        <AiOutlineInstagram className='icon' />
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