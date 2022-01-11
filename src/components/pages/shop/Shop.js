import {React , useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Shop.css'
import Skeleton from 'react-loading-skeleton'

const Shop = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(data => setProducts(data))
    }, [])

  return (
    <>
          <div className="shop">
              
                <Container>
                  <Row>
                      {products ?
                          products.map(data =>        
                        <Col md={3}>
                        <div className="shop-item">
                            <div className="shop-logo">
                                <img src={data.image} alt="" width={100} />
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
                        ) : [1, 2, 3, 4, 5, 6,7,8].map(data =>
                            
                            <Col md={3}>
                            <div className="shop-item">
                                <div className="shop-logo">
                                <Skeleton height={150} width={150}></Skeleton>
                                </div>
                                <div className="shop-content">
                                <Skeleton height="25px" width="80%" className='py-3'></Skeleton>
                                    <Skeleton width="40%" ></Skeleton>
                                    <Skeleton width="40%"></Skeleton>
                                </div>
                                <div className="add-to-card">
                                    <Skeleton width="50%" height="40px"></Skeleton>
                                </div>
                            </div>
                            </Col>
                        )}
                      
                      
                      
                      
                    </Row>      
            </Container>
        </div>
    </>
  )
}

export default Shop
