import React, {useState, useEffect} from 'react'
import CommonSection from '../../shared/CommonSection'
import './Tour.scss'
import tourData from '../../assets/data/tours';
import TourCard from '../../shared/TourCard'
import { Col, Container, Row } from 'reactstrap'
import  Testimonial from "../../components/Testimonial/Testimonial.jsx"
import { getAllTours } from '../../services/TourService';

const Tours = () => {
  const [pageCount, setPageCount] =useState(0)
  const [page,setpage] = useState(0)
  const [tour, setTours] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getAllTours();
      setTours(result);
    }
    fetchData();
  }, []);

  useEffect(()=>{


const pages = Math.ceil(5/4) //later we will use backend data count
setPageCount(pages)


  },[page])
  return (
    <>
    <CommonSection title={'All Tours'} />

    <section className='pt-0'>
      <Container>
        <Row>
          {
            <div data-aos="fade-up"className="continents grid">
            { tour?.map(tour  => (
              <Col lg='3' className='mb-4' key={tour.id}><TourCard tour={tour}/></Col>
             ))}
             <Col lg='12'>
             <div className="pagination d-flex align-items-center 
             justify-content-center mt-4 gap-3">
              {[...Array(pageCount).keys()].map(number=> (
                <span key={number} onClick={() => setpage(number)}
                className={page === number ? 'active_page' : ''}
                >
                  {number+1}
                </span>
              ))}


             </div>
             </Col>
             </div>
          }
        </Row>
      </Container>
    </section>
    <Testimonial />
    </>
  )
}

export default Tours
