import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import ProductModal from './ProductModal'

const ProductIndex = () => {
  const [modal, setModal] = useState(false)
  const [product, setProduct] = useState([]);
  
  const getAllProduct = () => {
    axios.get('http://localhost:7000/product').then(res => {
      console.log(res.data)
      setProduct(res.data);
    })
  }

  console.log(product);
  useEffect(() => {
    
    getAllProduct()

  },[])
  return (
    <>
       <Row className='py-4'>
            <Col md={10}>
            <h3>Product Tabel</h3>
            </Col>
            <Col md={2}>
            <Button onClick={()=>setModal(true)}>Add</Button>
            </Col>
        </Row>
      <ProductModal modal={modal} setModal={setModal} getAllProduct={getAllProduct}/>
      <table className="payment-table">
              <tr id="payment-table-head">
                  <th>Product Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>status</th>
                  <th>Action</th>
              </tr>
      
        {product? product.map(data =>
                
          <tr className="payment-table-item">
            <td>{data.name}</td>
            <td>
              <img src={data.img} alt="" width={60} />
            </td>
            <td>{data.price}</td>
            <td>Active</td>
            <td className='d-flex'>
              <button className='btn btn-danger'>Del</button>
              <button className='btn btn-success'>Edit</button>
            </td>
          </tr>
        ) :
          <tr>No Product Found</tr>
        }
        

      </table>
    </>
  )
}

export default ProductIndex
