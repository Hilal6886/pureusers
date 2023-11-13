import React, { useEffect } from 'react';
import './experience.scss';
import { Container, Col, Row } from 'reactstrap';
import experience from './gd.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='hilal'>
      <Container>
        <Row>
          <Col lg='6'>
            <div data-aos='fade-right' className='experience_card'>
              <div  className='experience_img'>
                <img src={experience} alt='' />
              </div>
              

              {/* "if" Content */}
              {/* ... Add your "if" content here ... */}

              {/* Experience Content */}
              <div className='experience_content'>
                <h2 data-aos='fade-up' className='gradient__text'>
                  REAL-TIME, RELIABLE DATA
                </h2>
                <p>
                  The Pure Users Data Platform provides a comprehensive and dynamic source of information for companies.
                  It offers real-time insights into company firmographics, technology usage, buying intent signals,
                  and a wide range of other valuable account attributes. With this platform,
                  businesses gain access to up-to-date and detailed data, allowing them to make informed decisions and take strategic actions.
                </p>
              </div>

              {/* Counters */}
              <div  className='counter_wrapper d-flex align-items-center gap-5 '>
                <div className='counter_box '>
                  <span>52</span>
                  <h6>Million Companies</h6>
                </div>
                <div className='counter_box'>
                  <span>32</span>
                  <h6>Thousand Technologies</h6>
                </div>
                <div className='counter_box'>
                  <span>23</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
