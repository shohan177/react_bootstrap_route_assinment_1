import React from 'react';
import { Form } from 'react-bootstrap';
import './Shop.css'

const SideBar = ({ products }) => {

    let handelSerach = (e) => {
        
        fetch('http://localhost:7000/product?q='+e.target.value)
        .then(data => data.json())
        .then(data => products(data))
        
        
    }
   return (
       <>
           <div className="side-bar shadow ">
           <Form.Group className=' py-3'>
                <Form.Control name='name' onChange={handelSerach} placeholder='product search'></Form.Control>
            </Form.Group>
               <Form.Group>
                   <br/>
                    <p className='float-start mx-2'>Product Category</p>
                   <Form.Check
                    inline
                    label="new product"
                    name="group1"
                    />
                   <Form.Check
                    inline
                    label="new product"
                    name="group2"
                    />
                   <Form.Check
                    inline
                    label="new product"
                    name="group3"
                    />
                   <Form.Check
                    inline
                    label="new product"
                    name="group4"
                   />
                   
                   <br/>
                   <br/>
                    <p className='float-start mx-2'>Price Range</p>
               
            </Form.Group>
               
            </div>
        
        </>
  );
};

export default SideBar;
