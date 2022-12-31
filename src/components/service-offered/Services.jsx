import React from 'react';
import './services.scss'

import {MdPayment} from 'react-icons/md'
import {RiSecurePaymentFill} from 'react-icons/ri'
import {MdOutlineEmojiTransportation} from 'react-icons/md'
import {FaSearchLocation} from 'react-icons/fa'
import {SiCodechef} from 'react-icons/si'
import {FaPersonBooth} from 'react-icons/fa'

const Services = () => {
    return (
        <section className='abouts section'>
            <dev className='secCont'>
                <h2 className='tle'>
                    OUR SERVICES
                </h2>
                <div className='maincontentt container grid'>
                    
                    
                    <div className="singleIt">
                    <RiSecurePaymentFill className="icont"/>
                        
                        <h3>secure payments</h3>
                        <p>
                            reseach shows that a chance to break away 
                            
                        </p>
                    </div>
                    <div className="singleIt">
                    <MdPayment className="icont"/>
                        
                        <h3>Flexlble Payment</h3>
                        <p>
                        Enjoy the Flexlble Payment Through Our App And Get Rewards On Every Payment.
                        </p>
                    </div>
                    <div className="singleIt">
                    <FaSearchLocation className="icont"/> 
                        <h3>Find The Best Near you</h3>
                        <p>
                            Find athe best hotels and places to visit near you in a single click
                        </p>
                    </div>
                    <div className="singleIt">
                    <MdOutlineEmojiTransportation className="icont"/> 
                        <h3> 24hours transport </h3>
                        <p>
                            reseach shows that a chance to brea away from normal rhythms of 
                            daily life reduces stress and improves health and well being.
                        </p>
                    </div>
                    <div className="singleIt">
                    <SiCodechef className="icont"/> 
                        <h3> Best food services </h3>
                        <p>
                            reseach shows that a chance to brea away from normal rhythms of 
                            daily life reduces stress and improves health and well being.
                        </p>
                    </div>
                    <div className="singleIt">
                    <FaPersonBooth className="icont"/> 
                        <h3> Best tour guides</h3>
                        <p>
                            reseach shows that a chance to brea away from normal rhythms of 
                            daily life reduces stress and improves health and well being.
                        </p>
                    </div>
                  

                </div>
            </dev>
        </section>
    )
}
export default Services