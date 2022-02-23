import React from 'react'
import { useState } from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import ProductModal from './ProductModal'

const ProductIndex = () => {
    const[modal,setModal] = useState(false)
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
          <ProductModal modal={modal} setModal={setModal}/>
      <table className="payment-table">
              <tr id="payment-table-head">
                  <th>Product Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>sell</th>
                  <th>status</th>
                  <th>Date</th>
                  <th>Action</th>
              </tr>
      
              
              <tr className="payment-table-item">
                <td>shohan</td>
                <td>
                  <img src="https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg" alt="" width={60}/>
                </td>
                <td>12</td>
                <td>fakf</td>
                <td>fakf</td>
                <td>fakf</td>
                <td className='d-flex'>
                    <button className='btn btn-danger'>Del</button>
                    <button className='btn btn-success'>Edit</button>
                </td>
              </tr>
        
        

      </table>
    </>
  )
}

export default ProductIndex
