import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

const Product = ({ product }) => {

    return(
    <>
    
        <Col md={3}>
            <div className="shop-item">
                <div className="shop-logo">
                    <img src={product.image} alt="" width={100} />
                </div>
                <div className="shop-content">
                        <h4>Soler Sytem</h4>
                        <h5>{product.price}$</h5>
                        <span>200$</span>
                </div>
                <div className="add-to-card">
                    <button>add to card</button>
                </div>
            </div>
        </Col>
    
    </>);
};

export default Product;
