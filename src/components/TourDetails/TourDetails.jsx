import React, { useRef, useState, useEffect } from 'react'
import './tourdetails.scss'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'

import calculateAvgRating from '../../utils/avgRating';
import avatar from '../../assets/images/avatar.jpg'
import Booking from '../Booking/Booking';
import Testimonial from "../../components/Testimonial/Testimonial.jsx"
import { getAllTours } from '../../services/TourService';

const TourDetails = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getAllTours();
      setTours(result);
    }
    fetchData();
  }, []);
  const { id } = useParams();
  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating] = useState(null)
  //this is static data, crescent will later  call our api and load our data from database

  const tour = tours.find(tour => tour.id === id)
  if (!tour) {
    return <div>Tour not found</div>;
  }

  const { imgUrl, title, description, price, address, reviews, city, distance, maxGroupSize } = tour

  const { totalRating, avgRating } = calculateAvgRating(reviews);
  const options = { day: 'numeric', month: 'long', year: 'numeric' }
 
  const submitHandler = e => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value

  }
  return (<>
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <div className="tour_content">
              <img src={imgUrl} alt='' />
              <div className="tour_info">
                <h2>{title}</h2>
                <div className="d-flex align-items-center gap-5">
                 {/*} <span className="tour_ratings d-flex align-items center justify-content gap-1 ">
                    <i className="ri-star-line"></i>
                    {avgRating === 0 ? null :
                      avgRating}
                    {totalRating === 0 ? (
                      'Not Rated'
                    ) : (
                      <span> ({reviews?.length})</span>
                    )}

                  </span>*/}

                </div>
                <div className="tour_extra-details">
                  <div className="amenities flex">
                    <div className="singleAmenities flex">

                      <i className="ri-map-pin-2-line"></i> {city}

                    </div>

                    <div className="singleAmenities flex">

                      <i class="ri-price-tag-line"></i> <small>₹</small> {price}

                    </div>

                    <div className="singleAmenities flex">


                      <i class="ri-time-line"></i>  <small>Duration</small>{distance}
                    </div>

                  </div>






                </div>

                <h5>Description</h5>
                <p>{description}</p>
              </div>
              <div className="tour_reviews mt-4">
                <h4> Reviws ({reviews?.length} reviews)</h4>

                <Form onSubmit={submitHandler}>
                  <div className="d-flex align-itms-center gap-3 mb-4 
                rating_group">
                    <span onClick={() => setTourRating(1)}>
                      1 <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(2)}>
                      2 <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(3)}>
                      3 <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(4)}>
                      4 <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(5)}>
                      5 <i className="ri-star-s-fill"></i>
                    </span>

                  </div>
                  <div className="review_input">
                    <input type='text' ref={reviewMsgRef} placeholder='Share Your Thoughts' />
                    <button className='btnt primary_btn text-white' type='submit'>
                      Submit
                    </button>
                  </div>
                </Form>
                <ListGroup className='user_reviews'>
                  {
                    reviews?.map(reviews => (
                      <div className="review_item">
                        <img src={avatar} alt='' />
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5> Hilal </h5>
                              <p>{new Date('02-01-2023').toLocaleDateString(
                                'en-US', options
                              )}
                              </p>
                            </div>
                            <span className='d-flex align-items-center'>
                              5 <i className="ri-star-s-fill"></i>
                            </span>
                          </div>
                          <h6> Amazing tour</h6>
                        </div>
                      </div>
                    ))
                  }

                </ListGroup>
              </div>
            </div>
          </Col>

          <Col lg='4'>
            <Booking tour={tour} avgRating={avgRating} />

          </Col>
        </Row>
      </Container>

    </section>
    <Testimonial />
  </>

  );

}

export default TourDetails