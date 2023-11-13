import React,{useState,useEffect} from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';








 const Main = () => {
  
  return (
    <section>
            <h2 className='gth'>Renowned and highly regarded by a multitude of Sales and Marketing professionals worldwide</h2>
           
           <div className="continents grid section__padding   ">
    <div>
      <img src={google} alt='p'/>
    </div>
    <div>
      <img src={slack} alt='p' />
    </div>
    <div>
      <img src={atlassian} alt='p'/>
    </div>
  
    <div>
      <img src={shopify} alt='p' />
    </div>
  </div>


    </section>
  )
}



export default Main