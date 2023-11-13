import React from 'react'
import {Container,Col,Row} from "reactstrap";
import './testimonial.scss'


import maleTourist from '../Testimonial/yu.png'









const Testimonial = () => {
  
  return (
   <section className='newsletter'>
    
    <Container>
    <div className='tyu'>
        <Row>      
               <Col lg ='6'>
                
                <div className="newsletter_content">
                <h2  className="gradient__text">SUBSCRIBE NOW TO GET USEFUL INFORMATION.</h2>
              
                 <div className='newsletter_input'>
                 <input type="email" placeholder='Enter your Email'/>
                 <button className='btnk newsletter_btn'>Subscribe</button>
                </div>
                <p>The Pure Users Data Platform provides a comprehensive and dynamic source of information for companies. 
                  It offers real-time insights into company firmographics, technology usage, buying intent signals
                  , and a wide range of other valuable account attributes.<br/>
                
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