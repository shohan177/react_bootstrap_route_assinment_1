import React from 'react'
import { Row, Col } from 'react-bootstrap';

const Profile = () => {
  return (
    <>
      <Row>
              <Col md={6} className='profile-head'>
                    <p>Welcome</p>
                    <h1>Mr. Shohan</h1>
              </Col>
              <Col md={6} className='profile-edit-imge'>
                    <div className="image-container">
                        <img src="https://ritecaremedicalofficepc.com/wp-content/uploads/2019/09/img_avatar.png" alt=""/>
                    </div>
              </Col>
      </Row>
    </>
  )
}

export default Profile
