import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import './Shop.css'

const SideBar = ({ setProducts, products }) => {

    const [category, setCategory] = useState([]);
    const [categoryProduct, setcategoryProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/category')
        .then(category => category.json())
        .then(category => setCategory(category))
     
    },[])

    let handelSerach = (e) => {
        
        fetch('http://localhost:7000/product?q='+e.target.value)
        .then(data => data.json())
        .then(data => setProducts(data))
        
    }

    let handelCategory = (e) => {
        fetch('http://localhost:7000/product?category='+e.target.value)
        .then(data => data.json())
        .then(data => setProducts(data))
        
    }
   return (
       <>
           <div className="side-bar shadow">
           <Form.Group className=' py-3'>
                <Form.Control name='name' onChange={handelSerach} placeholder='product search'></Form.Control>
            </Form.Group>
               
                   <br/>
                   <p className='float-start mx-2'>Product Category</p>
                   {category.map(data => 
                    <Form.Group className='text-start'>
                        <Form.Check
                            inline
                            label={data.name}
                            value={data.slug}
                            onChange={handelCategory}
                           
                       />
                      </Form.Group>
                    )}
                           
                    
                  
                   
                   <br/>
                   <br/>
                    <p className='float-start mx-2'>Price Range</p>
               
           
               
            </div>
        
        </>
  );
};

export default SideBar;
