import React from 'react'
import './gallary.css'
import {Container,Col,Row} from "reactstrap"
import MasonryImagsGallery from '../image-gallery/MasonryImagsGallery';

const Gallary = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <h2 className='gallary_title'>
                        Visit our customers tour Gallary
                         </h2>


                </Col>
                <Col lg='12'>
                    <MasonryImagsGallery/>

                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Gallary