import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
  return (
    <>
       <div className="dashboard pb-5">
              <Container>
                  <Row>
                      <Col md={3}>
                        <div className="userSidebar shadow">
                            <section className="d-flex justify-content-center">
                            <div className='pt-4'>
                                <img
                                class="userDashImg img-fluid"
                                src="https://ritecaremedicalofficepc.com/wp-content/uploads/2019/09/img_avatar.png"
                                alt=""
                                width="120px"
                                />
                                <h5 class="userNameColor text-center py-3">Mr. Shohan</h5>
                            </div>
                            </section>
                            <section>
                            <div class="d-flex justify-content-center">
                                <div>
                                
                                <div>
                                    <Link class="btn btn-lightWhite my-1 p-2" to="/Dashboard">
                                    dashboard
                                    </Link>
                                </div>
                                <div>
                                   <Link class="btn btn-lightWhite my-1 p-2" to="/Dashboard/payment">
                                    TodoList
                                   </Link>
                                </div>
                                <div>
                                   <Link class="btn btn-lightWhite my-1 p-2" to="/Dashboard/profile">
                                    Profile
                                   </Link>
                                </div>
                                <div>
                                   <Link class="btn btn-lightWhite my-1 p-2" to="/Dashboard/product">
                                    Product
                                   </Link>
                                </div>
                                <div>
                                   <Link class="btn btn-lightWhite my-1 p-2" to="/Dashboard/password">
                                    Security
                                   </Link>
                                </div>
                                <div>
                                   <Link id="user-logout" class="btn btn-lightWhite my-1 p-2" to="/">
                                    Logout
                                   </Link>
                                </div>
                                </div>
                            </div>
                            </section>
                         </div>
                      </Col>
                      <Col md={9} className='px-5 bg-light shadow rounded-3 py-5'>
                          <Outlet></Outlet>
                      </Col>
                    </Row>
              </Container>       
      </div>
    </>
  )
}

export default Dashboard
