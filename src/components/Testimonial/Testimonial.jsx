import React from 'react'
import {Container,Col,Row} from "reactstrap";
import './testimonial.scss'


import maleTourist from '../Testimonial/My project (1).png'








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
                <p>Quantum Tour and Travels is a premier travel agency dedicated to providing exceptional travel experiences to its clients. <br/>
                With a team of experienced professionals and a wide network of travel partners,<br/>
                
                 </p>
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
      
    </div>
   </section>
    </Container>
   
  
   </section>
   
  )
}

export default Testimonial