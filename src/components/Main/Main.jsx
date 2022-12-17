import React, {useEffect} from 'react';
import './main.css'

import img17 from '../../Assets/img17.jpg'
import img1 from '../../Assets/img1.jpg'
import img15 from '../../Assets/img15.jpg'
import img18 from '../../Assets/img18.jpg'
import img19 from '../../Assets/img19.jpg'
import img16 from '../../Assets/img16.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Data = [
    {
        id:1,
        imgSrc: img1,
        destTitle:'Dal Lakh',
        location: 'Kashmir',
        grade:'CULTURAL RELAX',
        fees: '$800',
        description: 'Dal is a lake in Srinagar Dal Lake is a misnomer as Dal in Kashmiri means lake, the summer capital of Jammu and Kashmir. The urban lake, is integral to tourism and recreation in Kashmir and is named the “Jewel in the crown of Kashmir',
    },



    
    {
        id:2,
        imgSrc: img15,
        destTitle:'Gulmarg',
        location: 'Kashmir',
        grade:'CULTURAL RELAX',
        fees: '$800',
        description: 'Gulmarg is a town nestled in the Pir Panjal range of the Western Himalayas at an altitude of 8,690 feet above sea level. Literally translated as ‘Meadow of Flowers’ it is encased by glimmering snow peaked alps, verdant green pastures, colorful meadows, deep valleys and pine covered slopes.', 
    },

    {
        id:3,
        imgSrc: img17,
        destTitle:'pehalagam',
        location: 'Jammu and Kashmir',
        grade:'CULTURAL RELAX',
        fees: '$800',
        description: 'Gulmarg is a town nestled in the Pir Panjal range of the Western Himalayas at an altitude of 8,690 feet above sea level. Literally translated as ‘Meadow of Flowers’ it is encased by glimmering snow peaked alps, verdant green pastures, colorful meadows, deep valleys and pine covered slopes.', 
    },

    {
        id:4,
        imgSrc: img18,
        destTitle:'sonmarg',
        location: 'jammu and Kashmir',
        grade:'CULTURAL RELAX',
        fees: '$800',
        description: 'Gulmarg is a town nestled in the Pir Panjal range of the Western Himalayas at an altitude of 8,690 feet above sea level. Literally translated as ‘Meadow of Flowers’ it is encased by glimmering snow peaked alps, verdant green pastures, colorful meadows, deep valleys and pine covered slopes.', 
    },
    {
        id:5,
        imgSrc: img19,
        destTitle:'sonmarg',
        location: 'jammu and Kashmir',
        grade:'CULTURAL RELAX',
        fees: '$800',
        description: 'Gulmarg is a town nestled in the Pir Panjal range of the Western Himalayas at an altitude of 8,690 feet above sea level. Literally translated as ‘Meadow of Flowers’ it is encased by glimmering snow peaked alps, verdant green pastures, colorful meadows, deep valleys and pine covered slopes.', 
    },
    {
        id:6,
        imgSrc: img16,
        destTitle:'Ladakh',
        location: 'jammu and Kashmir',
        grade:'CULTURAL RELAX',
        fees: '$800',
        description: 'Gulmarg is a town nestled in the Pir Panjal range of the Western Himalayas at an altitude of 8,690 feet above sea level. Literally translated as ‘Meadow of Flowers’ it is encased by glimmering snow peaked alps, verdant green pastures, colorful meadows, deep valleys and pine covered slopes.', 
    },
];

const Main = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
        }, [])
    return (
        <section data-aos="fade-up"className="main ">

<div  data-aos="fade-up" className='secContainer'>
                <div  data-aos="fade-up"className='scIntro'>
                    <h2  data-aos="fade-up"className='secTite'>
             FEATURED TOURS
                    </h2>
                    <p>
                        TRAVEL WITH QUANTUM TOUR AND TREVELS
                    </p>
                </div>
            <div data-aos="fade-up"className="continents grid">
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, 
                        description})=>{
                            return(
                                <div key={id} className="singlefr">
                                    <div className="imageDev">
                                        <img src={imgSrc} alt={destTitle}/>
                                    </div>
                                    <div className="cardInfo">
                                        <h4 className="destTitle">{destTitle}</h4>
                                        <span className="continent-flex">
                                            
                                            <span className="name">{location}</span>

                                        </span>
                                        <div className="fees flex">
                                            <div  className="grade">
                                                <span>{grade}<small>+1</small></span>
                                            </div>
                                            <div  className="price">
                                                <h5>{fees}</h5>
                                                 </div>
                                                 </div>
                                                 <div  className="desc">
                                                    <p>{description}</p>
                                                 </div>
                                                 
                                                 <button  className="btn flex">
                                                    DETAILS 
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
export default Main