import React from 'react'

import {  Container,Row,Col} from 'reactstrap'
import {Link} from "react-router-dom"
import './thanku.scss'

const ThankYou = () => {
  return <section>
    <Container>
      <Row>
        <Col lg='12' className='pt-5 text-center'>
           <div className="thank-you">
            <span><i class='ri-checkbox-circle-line'></i></span>
            <h1 className="mb-3 fw-samibold"> Thank You</h1>
            <h3 className='mb-4'> Your tour is Booked.</h3>

            <button className='btn primary_btn thanku_ntn'>
              <Link to='/home'>Back To Home</Link>
              </button>

           </div>
        </Col>
      </Row>
    </Container>
  </section>
}

export default ThankYou