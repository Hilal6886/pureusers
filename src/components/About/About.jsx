import React from 'react';
import './about.scss'


import {GiMountains} from 'react-icons/gi'
import {FcCustomerSupport} from 'react-icons/fc'
import {GiHiking} from 'react-icons/gi'
const About = () => {
    return (
        <section className='abouts section'>
            <dev className='secCont'>
                <h2 className='tle'>
                    Why Hikings ?
                </h2>
                <div className='maincontentt container grid'>
                    <div className="singleIt">
                    <GiMountains className="icont"/>
                        
                        <h3>50+ Mountains</h3>
                        <p>
                            reseach shows that a chance to break away 
                            
                        </p>
                    </div>
                    <div className="singleIt">
                    <GiHiking className="icont"/> 
                        <h3>40+ Hikings</h3>
                        <p>
                            reseach shows that a chance to brea away from normal rhythms of 
                            daily life reduces stress and improves health and well being.
                        </p>
                    </div>
                    <div className="singleIt">
                    <FcCustomerSupport className="icont"/> 
                        <h3>1000+ customers</h3>
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
export default About