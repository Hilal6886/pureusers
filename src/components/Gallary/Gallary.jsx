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
          <h2 data-aos="fade-up" className="gradient__text">
            Testomonial
          </h2>
          <p>what clients say about us</p>
        </div>
    <Container>
        <Row>
        <Col lg='12'>
    <div data-aos="fade-up" className="wrapperR section padding">
      <div data-aos="fade-up" className="box">
      <i class="ri-double-quotes-l"></i>
       
        <p>
          Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat
          thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.
        </p>
        <div className="content">
          <div className="info">
            <div className="namet">Alex Smith</div>
            <div className="jobt">Designer | Developer</div>
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
          Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat
          thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.
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
          Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat
          thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.
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