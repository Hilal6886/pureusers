import React from 'react';
import './main.scss'
import TourCard from '../../shared/TourCard';
import tourDATA from '../../assets/data/tours';





import {Col} from "reactstrap"


 const Main = () => {
  return (
    <section>
            <div  data-aos="fade-up"className='scIntro'>
                    <h2  data-aos="fade-up"className='secTite'>
             FEATURED TOURS
                    </h2>
                    <p>
                        TRAVEL WITH QUANTUM TOUR AND TRAVELS
                    </p>
                </div>
        <>
        <div data-aos="fade-up"className="continents grid">
      { tourDATA?.map(tour  => (
        <Col lg='3' className='mb-4' key={tour.id}><TourCard tour={tour}/></Col>
       ))}
       </div>
       </>
    </section>
  )
}



export default Main