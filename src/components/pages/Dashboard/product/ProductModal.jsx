import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Button, CloseButton, Form, FormControl, FormGroup, FormLabel, Modal } from 'react-bootstrap'
import Swal from 'sweetalert2'


const ProductModal = ({ modal, setModal, getAllProduct }) => {
  const [category, setCategory] = useState([])

    useEffect(() => {
        axios.get('http://localhost:7000/category').then(res => {
            setCategory(res.data)
        })
    }, [])

  const HandelProductSubmit = (e) => {
    e.preventDefault()
    
    let form_data = new FormData(e.target)
    let data = Object.fromEntries(form_data.entries())

    axios.post('http://localhost:7000/product', {
      id: null,
      name: data.name,
      img: data.img_url,
      price: data.price,
      category: data.category
    }).then(res => {
      getAllProduct()
      setModal(false)

      Swal.fire({
        position: 'center',
        icon: 'success',
        title:  data.name + 'Add seccesfully !',
        showConfirmButton: false,
        timer: 1500,
        customClass: 'sweetalert-sm'
      })
    });
    
}
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
                  <Form onSubmit={HandelProductSubmit} method="POST">
                  <FormGroup>
                        <FormLabel>Name</FormLabel>
                        <FormControl name="name"></FormControl>   
                      </FormGroup>
                      <FormGroup>
                      <FormLabel>Product Category</FormLabel>
                      <Form.Select aria-label="Default select example" name="category">
                        <option disabled>select category</option>
                        {category ? category.map(category => 
                            <option value={category.id}>{category.name}</option>
                        ):""}      
                        </Form.Select>
                      </FormGroup>
                  <FormGroup>
                        <FormLabel>Price</FormLabel>
                        <FormControl name="price"></FormControl>   
                   </FormGroup>
                  <FormGroup>
                        <FormLabel>Sell Price</FormLabel>
                        <FormControl name="sell_price"></FormControl>   
                   </FormGroup>
                  <FormGroup>
                        <FormLabel>Image Url</FormLabel>
                        <FormControl name="img_url"></FormControl>   
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
