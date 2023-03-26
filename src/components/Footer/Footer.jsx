import React, { useEffect } from 'react';
import './footer.scss'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { Col, Row, Container,  ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom';
import logo from '../../components/Navbar/qw.png'

const quick_links = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/Tourss',
        display: 'Tours'
    },
];
const quick_links2 = [
    {
        path: '/gallery',
        display: 'Gallery'
    }
];


const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const year =  new Date().getFullYear() 
    const portfolioLink = "https://crescent-ar8.netlify.app/";
    return <footer className='footer'>
        <Container>
            <Row>
                <Col lg='3'>
                    <div className="logot">
                        <h5>Quantum Tour & Travels</h5>
                        <p>Quantum Tour and Travels is a premier travel agency dedicated to providing exceptional travel experiences to its clients. <br/>
                With a team of experienced professionals and a wide network of travel partners,<br/>
                
                 </p>
                        <div className="social_links d-flex align-items-center gap-4">
                            <span>
                                <Link to='/'><i class='ri-youtube-line'></i></Link>
                            </span>
                            <span>
                                <Link to='/'><i class='ri-twitter-line'></i></Link>
                            </span>
                            <span>
                                <Link to='/'><i class='ri-facebook-circle-line'></i></Link>
                            </span>
                            <span>
                                <Link to='/'><i class='ri-instagram-line'></i></Link>
                            </span>

                        </div>

                    </div>

                </Col>
                <Col lg='3' >
                    <h5 className="footer_links-title">Discover</h5>
                    <ListGroup className='footer_quick-links'>
                        {
                            quick_links.map((item, index) => (
                                <ListGroupItem key={index} className='ps-0 border-0'>
                                    <Link to={item.path}>{item.display}</Link>

                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>
                <Col lg='3'>
                    <h5 className="footer_links-title">Quick Links</h5>
                    <ListGroup className='footer_quick-links'>
                        {
                            quick_links2.map((item, index) => (
                                <ListGroupItem key={index} className='ps-0 border-0'>
                                    <Link to={item.path}>{item.display}</Link>

                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>
                <Col lg='3'>
                <h5 className="footer_links-title">Contact</h5>
                    <ListGroup className='footer_quick-links'>
                       
                                <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                                        <span><i class='ri-map-pin-line'></i></span>
                                        Address:
                                    </h6>
                                    <p className='mb-0'>New Colony, Mangloora,193404</p>

                                </ListGroupItem>
                                <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                                        <span><i class='ri-mail-line'></i></span>
                                        Email:
                                    </h6>
                                    <p className='mb-0'>quantumtourandtravels@gmail.com</p>

                                </ListGroupItem>
                                <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                                        <span><i class='ri-phone-fill'></i></span>
                                        Phone:
                                    </h6>
                                    <p className='mb-0'>+91 7780957235</p>

                                </ListGroupItem>
                            
                    </ListGroup>
                </Col>
               
                <Col lg='12'className='text-center pt-5'>
                 <p className="copyright">Copyright {year}, Design and developed by Hilal Ahmad Rather.
                 All rights reserved, <a href={portfolioLink} target="_blank" rel="noopener noreferrer">Hire Me</a></p>
                
                    </Col>
                
            </Row>
        </Container>
    </footer>


}
export default Footer