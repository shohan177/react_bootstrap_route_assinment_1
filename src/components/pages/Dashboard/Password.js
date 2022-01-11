import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Password = () => {
  return (
    <>
          <Row>
              <Col md={6} className='set-password p-4 bg-white'>
                <p>Enter Current Password</p>
                <div className="my-4">
                    <input type="password" className="form-control select-forms d-inline" id="exampleFormControlInput1" placeholder="*********" />
                    <i className="fa fa-eye d-inline cursor-pointer show-password" aria-hidden="true"></i>
                </div>
                <div>
                    <button id="confirm-pass" className="btn password-btn text-white py-2 px-5 d-inline ">Next</button>
                    <p className="d-inline text-info px-5 cursor-pointer">Forget Password</p>
                </div>
              </Col>
      </Row>
    </>
  )
}

export default Password
