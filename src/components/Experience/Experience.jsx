import React from 'react'
import './experience.scss'
import {Container,Col,Row} from "reactstrap"
import experience from "./experience.png"


const Experience = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="experience_content">
                        
                        <h2>With our all experience <br/> we will serve you</h2>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <br/>
                             Est aliquam architecto nulla eius ex amet illum, omnis a sed,
                             <br/>
                              saepe ipsa odit nemo cum aut modi obcaecati itaque adipisci quod!</p>
                    </div>
                    <div className="counter_wrapper d-flex align-items-center gap-5">
                        <div className="counter_box">
                            <span>12k+</span>
                            <h6>Successful Trips</h6>
                        </div>
                        <div className="counter_box">
                            <span>2k+</span>
                            <h6>Regular clients</h6>
                        </div>
                        <div className="counter_box">
                            <span>3</span>
                            <h6>Years experience</h6>
                        </div>
                    </div>
                

                </Col>
                <Col lg='6'>
                    <div className="experience_img">
                        <img src={experience} alt=''/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
export default Experience;