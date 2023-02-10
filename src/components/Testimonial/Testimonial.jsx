import React from 'react'
import './testimonial.css'
import {Container,Col,Row} from "reactstrap";

import Slider from 'react-slick'
import maleTourist from '../Testimonial/male-tourist.png'
import ava02 from '../Testimonial/ava-2.jpg'
import ava03 from '../Testimonial/ava-3.jpg'



const Testimonial = () => {
  
  return (
   <section className='newsletter'>
    <Container>
        <Row>
            <Col lg ='6'>
                
                <div className="newsletter_content">
                <h3>Subscribe now to get useful traveling information.</h3>
              
                 <div className='newsletter_input'>
                 <input type="email" placeholder='Enter your Email'/>
                 <button className='btnk newsletter_btn'>Subscribe</button>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                 Quisquam voluptates voluptas minima quae harum doloremque assumenda similique expedita ducimus numquam neque,<br/>
                 nesciunt aperiam beatae mollitia tenetur molestias ea possimus nam.</p>
                </div>  
                
            
            </Col>
            <Col lg='6'>
            <div className="newsletter_imgu">
                        <img src={maleTourist} alt=''/>
                    </div>
 
            </Col>
            
        </Row>
    </Container>
   </section>
  )
}

export default Testimonial