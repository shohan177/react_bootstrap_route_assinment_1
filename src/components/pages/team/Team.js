import {React , useState, useEffect} from 'react'
import './Team.css'
import { Col, Container, Row } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'

const Team = () => {
    const [users, setUsers] = useState()
    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/photos')
                .then(data => data.json())
                .then(data => setUsers(data))
    },[])
    
    console.log(users);
  return (
    <>
      <div className="team">
      <Container className='py-5'>
                  <Row>
                      <div className="service-title">
                        <h3>Our Team</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, sit!</p>
                      </div>
                  </Row>
                  <Row>
                      {    users?
                            users.map(data => 
                            
                            <Col md={3}>
                            <div className="service-item">
                                <div className="service-logo">
                                    <img src={data.url} alt="" width={100} circle={true}/>
                                </div>
                                <div className="service-content">
                                    <h4>Soler Sytem</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi inventore dolorum</p>
                                </div>
                            </div>
                            </Col>
                            
                          ) : [1, 2, 3, 4, 5, 6,7,8].map(data =>
                            
                            <Col md={3}>
                            <div className="service-item">
                                <div className="service-logo">
                                    <Skeleton height={150} width={150} circle={true}></Skeleton>
                                </div>
                                <div className="service-content">
                                <Skeleton height="25px" width="100%" ></Skeleton>
                                  <Skeleton></Skeleton>
                                  <Skeleton></Skeleton>
                                  <Skeleton></Skeleton>
                                  <Skeleton></Skeleton>
                                </div>
                            </div>
                            </Col>
                        )
                    
                    
                    
                        }
                      
                 
                     
                  </Row>
              </Container>    
      </div>
    </>
  )
}

export default Team
