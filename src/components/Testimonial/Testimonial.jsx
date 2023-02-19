import React from 'react'
import './testimonial.scss'
import {Container,Col,Row} from "reactstrap";


import maleTourist from '../Testimonial/male-tourist.png'
import CBlog from '../../pages/CBlog';







const Testimonial = () => {
  
  return (
   <section className='newsletter'>
    
    <Container>
    <div className='tyu'>
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
        </div>
        <section className='ngft'>
     <div>
        <CBlog/>
    </div>
   </section>
    </Container>
   
  
   </section>
   
  )
}

export default Testimonial