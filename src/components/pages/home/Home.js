import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import './Home.css'
import mouse from '../home/img/scroll.gif'

const Home = () => {
  return (
    <>
      <section className='slider'>
              <Carousel>
                  <Carousel.Item>
                      <img src="https://thenextavenue.com/wp-content/uploads/2020/02/5e31ff995bc79c264d68e4d2.jpg" alt="" />
                      <Carousel.Caption>

                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/75e7c386-b632-47bb-a28d-908f8b46ff2e/bvlatuR/std/2880x1800/Model-Y-RHD-Interior-Hero-Desktop" alt="" />
                      <Carousel.Caption>

                      </Carousel.Caption>
                  </Carousel.Item>
                  
              </Carousel>   
          </section>
          <div className="mouse-scrol">
              <img src={mouse} alt="" />
          </div>
          <section className='services'>
              <Container>
                  <Row>
                      <div className="service-title">
                        <h3>Our Services</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, sit!</p>
                      </div>
                  </Row>
                  <Row>
                      <Col md={3}>
                          <div className="service-item">
                              <div className="service-logo">
                                  <img src="https://i.pinimg.com/originals/e2/1d/8b/e21d8b67fdc8a90c74427fe00f7dc5ab.jpg" alt="" width={100} />
                              </div>
                              <div className="service-content">
                                  <h4>Tesla Motors</h4>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi inventore dolorum tempore quam sed dolorem eligendi, numquam voluptates rem laboriosam.</p>
                              </div>
                          </div>
                      </Col>
                      <Col md={3}>
                          <div className="service-item">
                              <div className="service-logo">
                                  <img src="https://i.pinimg.com/originals/e2/1d/8b/e21d8b67fdc8a90c74427fe00f7dc5ab.jpg" alt="" width={100} />
                              </div>
                              <div className="service-content">
                                  <h4>Space X</h4>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi inventore dolorum tempore quam sed dolorem eligendi, numquam voluptates rem laboriosam.</p>
                              </div>
                          </div>
                      </Col>
                      <Col md={3}>
                          <div className="service-item">
                              <div className="service-logo">
                                  <img src="https://i.pinimg.com/originals/e2/1d/8b/e21d8b67fdc8a90c74427fe00f7dc5ab.jpg" alt="" width={100} />
                              </div>
                              <div className="service-content">
                                  <h4>Soler Sytem</h4>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi inventore dolorum tempore quam sed dolorem eligendi, numquam voluptates rem laboriosam.</p>
                              </div>
                          </div>
                      </Col>
                      <Col md={3}>
                          <div className="service-item">
                              <div className="service-logo">
                                  <img src="https://i.pinimg.com/originals/e2/1d/8b/e21d8b67fdc8a90c74427fe00f7dc5ab.jpg" alt="" width={100} />
                              </div>
                              <div className="service-content">
                                  <h4>Star Line</h4>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi inventore dolorum tempore quam sed dolorem eligendi, numquam voluptates rem laboriosam.</p>
                              </div>
                          </div>
                      </Col>
                     
                  </Row>
              </Container>
          </section>
    </>
  )
}

export default Home
