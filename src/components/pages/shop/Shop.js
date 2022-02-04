import {React , useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Shop.css'
import Skeleton from 'react-loading-skeleton'
import Product from './Product.js'
import SideBar from './SideBar'


const Shop = () => {
    const [products, setProducts] = useState(null);
    console.log(products);
    useEffect(() => {
        fetch('http://localhost:7000/product')
        .then(data => data.json())
        .then(data => setProducts(data))
    }, [])

  return (
    <>
          <div className="shop">
              
              <Container>
                  <Row>
                      <Col md={2} className='sidebar'>
                   
                        <SideBar products={setProducts} />
                      </Col>
                      <Col md={10}>
                      <Row>
                      {products ? products.map(data => 
                              
                          <Product product={data} />
                          
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
                      </Col>
                  </Row>
    
            </Container>
        </div>
    </>
  )
}

export default Shop
