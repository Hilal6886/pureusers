import React from 'react'
import { Col,Form,FormGroup } from 'reactstrap'
import './search.scss'

  export const SearchBar = () => {
  return <Col lg='12'>
    <div className='search_bar grid'>
        <Form className='d-flex align-items-center gap-4'>
            <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                <span><i className='ri-map-pin-line'></i></span>
                <div>
                    <h6>Location</h6>
                    <input type='text' placeholder='Where are you going'/>
                </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                <span><i className='ri-map-pin-time-line'></i></span>
                <div>
                    <h6>Distance</h6>
                    <input type='number' placeholder='Distance k/m'/>
                </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3 form_group form_group-last'>
                <span><i className='ri-group-line'></i></span>
                <div>
                    <h6>Max people</h6>
                    <input type='number' placeholder='Where are you going'/>
                </div>
            </FormGroup>
            <div className='search-icon'>
            <i className='ri-search-line'></i>
            </div>

        </Form>
    </div>
  </Col>
}
