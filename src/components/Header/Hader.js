import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container, Row } from 'react-bootstrap'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import logo from '../../tesla-icon-2.jpg'
import './Hader.css';
import { Link } from 'react-router-dom'

const Hader = () => {
    return (
        <>
            <div className="top-bar">
                <Container>
                        <Row>
                        <Col md={6}>
                            <div className="info">
                                <ul>
                                    <li>01777382007 </li>
                                    <li>|</li>
                                    <li> shohan@gmail.com</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="socaial">
                                <ul>
                                    <li href="#"><FontAwesomeIcon icon={ faFacebook }></FontAwesomeIcon></li>
                                    <li href="#"><FontAwesomeIcon icon={ faTwitter }></FontAwesomeIcon></li>
                                    <li href="#"><FontAwesomeIcon icon={ faInstagram }></FontAwesomeIcon></li>
                                
                                </ul>
                            </div>
                        </Col>
                        </Row>
                </Container>
            </div>
            <header className='header'>
                <Container>
                    <Row>
                        <Col md={3}>
                            <div className="logo">
                                <Link to='/'><img src={logo} alt="" width={150}/></Link>
                                
                            </div>
                        </Col>
                        <Col md={9}>
                            <nav className='menu'>
                                <ul>
                                    <li><Link to="/">Home</Link> </li>
                                    <li><Link to="/about">About</Link> </li>
                                    <li><a href="#">Blog</a> </li>
                                    <li><a href="#">Gallery</a> </li>
                                    <li><a href="#">About</a> </li>
                                </ul>
                            </nav>
                        </Col>
                    </Row>
                </Container>

            </header>

        </>
    )
}

export default Hader
