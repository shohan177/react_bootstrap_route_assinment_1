import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import about_image from '../../../car4.gif'
import about_image_self_driving from '../../../cars.gif'
import './About.css'

const About = () => {
  return (
    <>
      <section className='about'>
              <Container>
                  <Row>
                      <Col md={6}>
                         <div className="about-image">
                              <img src={about_image} alt="" />
                         </div>
                      </Col>
                      <Col md={6}>
                          <div className="about-container">
                              <h2>Lorem ipsum dolor sit amet  Maiores, hic?</h2>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae similique, cumque vitae enim fugiat ipsa ea animi aut ipsum fugit numquam recusandae ducimus totam aliquid magnam odit laborum voluptatum cum. Alias, consequatur! Hic cum nihil fuga sunt autem dolorem consequatur voluptates aspernatur iusto, ducimus distinctio dignissimos laborum maxime quae illo.</p>

                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, accusamus? Dolor totam odit pariatur itaque debitis at consectetur blanditiis iusto quisquam placeat reiciendis dolores et quod excepturi voluptate, exercitationem accusamus iste officia eligendi labore impedit tempora amet tempore natus? Veniam voluptatibus necessitatibus optio, aspernatur cupiditate iure voluptas iusto nam quas.</p>
                          </div>
                      </Col>
                  </Row>
              </Container>
      </section>
      <section className='about'>
              <Container>
                  <Row>
                      <Col md={6}>
                          <div className="about-container">
                              <h2>Lorem ipsum dolor sit amet  Maiores, hic?</h2>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae similique, cumque vitae enim fugiat ipsa ea animi aut ipsum fugit numquam recusandae ducimus totam aliquid magnam odit laborum voluptatum cum. Alias, consequatur! Hic cum nihil fuga sunt autem dolorem consequatur voluptates aspernatur iusto, ducimus distinctio dignissimos laborum maxime quae illo.</p>

                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, accusamus? Dolor totam odit pariatur itaque debitis at consectetur blanditiis iusto quisquam placeat reiciendis dolores et quod excepturi voluptate, exercitationem accusamus iste officia eligendi labore impedit tempora amet tempore natus? Veniam voluptatibus necessitatibus optio, aspernatur cupiditate iure voluptas iusto nam quas.</p>
                          </div>
                      </Col>
                      <Col md={6}>
                         <div className="about-image">
                              <img src={about_image_self_driving} alt="" />
                         </div>
                      </Col>
                  </Row>
              </Container>
      </section>
    </>
  )
}

export default About
