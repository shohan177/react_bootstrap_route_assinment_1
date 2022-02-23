import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Button, CloseButton, Form, FormControl, FormGroup, FormLabel, Modal } from 'react-bootstrap'


const ProductModal = ({ modal, setModal }) => {
    const[category, setCategory] = useState([])
    useEffect(() => {
        axios.get('http://localhost:7000/category').then(res => {
            setCategory(res.data)
        })
    },[])
  return (
    <>
          <Modal show={modal} onHide={() => setModal(false)}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
              <Modal.Header>
                <Modal.Title>
                    Add product
                  </Modal.Title> 
                  <CloseButton onClick={()=>setModal(false)}></CloseButton>

              </Modal.Header>
              <Modal.Body>
                  <Form>
                  <FormGroup>
                        <FormLabel>Name</FormLabel>
                        <FormControl></FormControl>   
                      </FormGroup>
                      <FormGroup>
                      <FormLabel>Product Category</FormLabel>
                      <Form.Select aria-label="Default select example">
                        <option disabled>select category</option>
                        {category ? category.map(category => 
                            <option value={category.id}>{category.name}</option>
                        ):""}      
                        </Form.Select>
                      </FormGroup>
                  <FormGroup>
                        <FormLabel>Price</FormLabel>
                        <FormControl></FormControl>   
                   </FormGroup>
                  <FormGroup>
                        <FormLabel>Sell Price</FormLabel>
                        <FormControl></FormControl>   
                   </FormGroup>
                  <FormGroup>
                        <FormLabel>Image Url</FormLabel>
                        <FormControl></FormControl>   
                   </FormGroup>
                      <FormGroup className='py-2'>
                          <Button type="submit">Save</Button>
                   </FormGroup>
                  </Form>
              </Modal.Body>   
              <Modal.Footer>

              </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProductModal
