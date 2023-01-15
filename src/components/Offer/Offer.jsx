import React, {useEffect} from 'react';
import './offer.scss'
import {MdKingBed} from 'react-icons/md'
import {MdBathtub} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {MdAirportShuttle} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
import Aos from 'aos'
import 'aos/dist/aos.css'

const { getImageUrl } = require('../../services/media.service.js')
const img2= getImageUrl('img2.jpg')
const img5= getImageUrl('img5.jpg')
const img6= getImageUrl('img6.jpg')
const img20= getImageUrl('img20.jpg')
const img8= getImageUrl('img8.jpg')
const img21= getImageUrl('img21.jpg')
const Offers = [
    {
        id:1,
        imgSrc: img2,
        destTitle:'Dal lake',
        location: 'Kashmir',
        price: '$800',
        
    },

    
    {
        id:2,
        imgSrc: img5,
        destTitle:'Dal lake',
        location: 'Kashmir',
         price: '$800',

    },
    {
        id:3,
        imgSrc: img6,
        destTitle:'Dal lake',
        location: 'Kashmir',
        price: '$800',
    },
    {
        id:4,
        imgSrc: img8,
        destTitle:'Srinagar',
        location: 'Jammu and Kashmir',
        price: '$800',
    },
    {
        id:5,
        imgSrc: img20,
        destTitle:'Srinagar',
        location: 'Jammu and Kashmir',
        price: '$800',
    },
    {
        id:6,
        imgSrc: img21,
        destTitle:'Srinagar',
        location: 'Jammu and Kashmir',
        price: '$800',
    },
        
]
const Offer = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
        }, [])
    return(
        <section data-aos="fade-up"className='offer container section'>
            <div data-aos="fade-up"className='secContainer'>
                <div className='seIntro'>
                    <h2 data-aos="fade-up"className='secTtle'>
             OUR BEST HOTELS
                    </h2>
                    <p>
                        from historical cities to natural spectecular, come see the best of the world!
                    </p>
                </div>
                <div data-aos="fade-up"className="ghft grid">
                {
                    Offers.map(({id, imgSrc, stTdeitle, location, 
                       price })=>{
                        
                            return(
                                <div className='singleoffer'>
                                <div className='destImage'>
                                    <img src={imgSrc} alt={stTdeitle} />
        
                                    <span className='discount'>
                                        20% off
                                    </span>
                                </div>
                                <div className='offerBody'>
                                    <div className="price flex">
                                        <h6>
                                            {price}
                                        </h6>
                                        <span className="status">
                                            For Rent
                                        </span>
                                    </div>
                                    <div className="amenities flex">
                                        <div  className="singleAmenities flex">
                                            <MdKingBed className='icons'/>
                                            <small>2 Beds</small>
        
                                        </div>
                                        <div  className="singleAmenities flex">
                                            <MdBathtub className='icons'/>
                                            <small>1 Bath</small>
        
                                        </div>
                                        <div  className="singleAmenities flex">
                                            <FaWifi className='icons'/>
                                            <small> wi-fi</small>
        
                                        </div>
                                        <div  className="singleAmenities flex">
                                            <MdAirportShuttle className='icons'/>
                                            <small>shuttle</small>
        
                                        </div>
                                    </div>
                                    <div className="location flex">
                                        <MdLocationOn className='icons'/>
                                        <small>450 vine 310, {location}</small>
                                    </div>
                                    <button className="btnn flex">
                                         Details
                                    </button>
                                </div>
        
                            </div>
                            )

                    })
                }
                
                   
                        
                </div>
            </div>

        </section>
    )
    
}

export default Offer