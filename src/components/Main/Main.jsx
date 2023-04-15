import React,{useState,useEffect} from 'react';
import './main.scss'
import TourCard from '../../shared/TourCard';

import { getAllTours } from '../../services/TourService';
import Aos from 'aos';
import 'aos/dist/aos.css';




import {Col} from "reactstrap"


 const Main = () => {
  const [tour, setTours] = useState([]);
  useEffect(() => {
    Aos.init({ duration: 2000 });
   
    });
  

  useEffect(() => {
    async function fetchData() {
      const result = await getAllTours();
      setTours(result);
    }
    fetchData();
  }, []);
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
      { tour?.map(tour  => (
        <Col lg='3' className='mb-4' key={tour.id}><TourCard tour={tour}/></Col>
       ))}
       </div>
       </>
    </section>
  )
}



export default Main