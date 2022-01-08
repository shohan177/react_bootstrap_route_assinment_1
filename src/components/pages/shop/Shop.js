import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Shop.css'

const Shop = () => {
  return (
    <>
          <div className="shop">
              
                <Container>
                    <Row>
                        <Col md={3}>
                        <div className="shop-item">
                            <div className="shop-logo">
                                <img src="" alt="" width={100} circle={true}/>
                            </div>
                            <div className="shop-content">
                                  <h4>Soler Sytem</h4>
                                  <h5>154$</h5>
                                  <span>200$</span>
                            </div>
                            <div className="add-to-card">
                                <button>add to card</button>
                            </div>
                        </div>
                        </Col>
                    </Row>      
            </Container>
        </div>
    </>
  )
}

export default Shop
