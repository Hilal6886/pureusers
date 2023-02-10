import React from 'react'
import Slider from 'react-slick'
import ava01 from '../Testimonial/ava-1.jpg'
import ava02 from '../Testimonial/ava-2.jpg'
import ava03 from '../Testimonial/ava-3.jpg'

const Testimonials = () => {

  return     <Slider>
  <div className="testinonial py-4 px-3">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
           Impedit pariatur officia dignissimos aliquid doloremque <br/>
           debitis nemo? Laboriosain commodi iusto autem, magnam <br/>
           dignissimos consequuntur corrupti voluptatem fuga esse <br/>
           dolore earum?</p>
          <div className="d-flex align-items-center gap-4 mt-3">
              <img src={ava01} className='w-25 h-25 rounded-2' alt=''/>
              <div>
                <h5 className='mb-0 mt-3'>crescent</h5>
                <p>Customer</p>
              </div>
          </div>
         

  </div>
  <div className="testinonial py-4 px-3">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
           Impedit pariatur officia dignissimos aliquid doloremque <br/>
           debitis nemo? Laboriosain commodi iusto autem, magnam <br/>
           dignissimos consequuntur corrupti voluptatem fuga esse <br/>
           dolore earum?</p>
          <div className="d-flex align-items-center gap-4 mt-3">
              <img src={ava02} className='w-25 h-25 rounded-2' alt=''/>
              <div>
                <h5 className='mb-0 mt-3'>crescent</h5>
                <p>Customer</p>
              </div>
          </div>
         

  </div>
  <div className="testinonial py-4 px-3">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
           Impedit pariatur officia dignissimos aliquid doloremque <br/>
           debitis nemo? Laboriosain commodi iusto autem, magnam <br/>
           dignissimos consequuntur corrupti voluptatem fuga esse <br/>
           dolore earum?</p>
          <div className="d-flex align-items-center gap-4 mt-3">
              <img src={ava03} className='w-25 h-25 rounded-2' alt=''/>
              <div>
                <h5 className='mb-0 mt-3'>crescent</h5>
                <p>Customer</p>
              </div>
          </div>
         

  </div>
 
</Slider>
}

export default Testimonials