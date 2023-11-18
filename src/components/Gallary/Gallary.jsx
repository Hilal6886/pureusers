import React, {useEffect} from 'react';
import './gallary.scss';
import { Container, Col, Row } from "reactstrap"
import t1 from "./ava1.jpg"
import t2 from "./ava2.jpg"
import t3 from "./ava3.jpg"
import Aos from 'aos';
import 'aos/dist/aos.css';


const Gallary = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    
  }, []);
  return (
    <section>
        <div className="seIntroy">
          <h2 className="gradient__text">
            Testomonial
    
          </h2>
         
        </div>
    <Container>
        <Row>
        <Col lg='12'>
    <div data-aos="fade-up" className="wrapperR section padding">
      <div data-aos="fade-up" className="box">
      <i class="ri-double-quotes-l"></i>
       
        <p>
        Game-changer for our sales team! Pure Users helps us pinpoint and connect with high-potential leads,
         skyrocketing our conversion rates."
        </p>
        <div className="content">
          <div className="info">
            <div className="namet">Alex Smith</div>
            <div className="jobt">Founder | CEO</div>
            <div className="stars">
            <i class="ri-star-s-line"></i>
            <i class="ri-star-s-line"></i>
            <i class="ri-star-s-line"></i>
            <i class="ri-star-s-line"></i>
            <i class="ri-star-s-line"></i>
            </div>
          </div>
          <div className="image">
          <img src={t1} alt='' />
          </div>
        </div>
      </div>
      <div data-aos="fade-up"  className="box">
     
      <i class="ri-double-quotes-l"></i>
       
        <p>
        Incredible results with Pure Users! Sales prospecting has never been this efficient. 
        Highly recommended for businesses looking to accelerate growth."








        </p>
        <div className="content">
          <div className="info">
            <div className="namet">Steven Chris</div>
            <div className="jobt">YouTuber | Blogger</div>
            <div className="stars">
            <i class="ri-star-s-line"></i>
            <i class="ri-star-s-line"></i>
            <i class="ri-star-s-line"></i>
            <i class="ri-star-s-line"></i>
            <i class="ri-star-s-line"></i>
            
            </div>
          </div>
          <div className="image">
          <img src={t2} alt='' />
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="box">
      <i class="ri-double-quotes-l"></i>
        <p>
        Thanks to Pure Users, we've seen a significant uptick in sales.
 Their solution makes it easy to identify and engage with prospects,
  giving our business a competitive edge.
        </p>
        <div className="content">
          <div className="info">
            <div className="namet">Kristina Bellis</div>
            <div className="jobt">Freelancer | Advertiser</div>
            <div className="stars">
            <i class="ri-star-s-line"></i>
            <i class="ri-star-s-line"></i>
            <i class="ri-star-s-line"></i>
            <i class="ri-star-s-line"></i>
            <i class="ri-star-s-line"></i>
            </div>
          </div>
          <div className="image">
          <img src={t3} alt='' />
          </div>
        </div>
      </div>
    </div>
    </Col>

</Row>
</Container>
</section>
  );
};


export default Gallary;