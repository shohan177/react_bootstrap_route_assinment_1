import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Index = () => {
  return (
    <>
      <h3 className="py-4">Welcome</h3>
        <Row>
            <Col md={3} className="pendingBox bg-info shadow">
                <div class="d-flex justify-content-between p-3">
                    <div class="pt-2">
                    <h6>Pending</h6>
                    </div>
                    <div class="number d-flex justify-content-center align-items-center">
                    02
                    </div>
                </div>
            </Col>
            <Col md={3} className="pendingBox bg-light shadow">
                <div class="d-flex justify-content-between p-3">
                    <div class="pt-2">
                    <h6>Pending</h6>
                    </div>
                    <div class="number d-flex justify-content-center align-items-center">
                    02
                    </div>
                </div>
            </Col>
            <Col md={3} className="pendingBox bg-warning shadow">
                <div class="d-flex justify-content-between p-3">
                    <div class="pt-2">
                    <h6>Pending</h6>
                    </div>
                    <div class="number d-flex justify-content-center align-items-center">
                    02
                    </div>
                </div>
            </Col>
        </Row>
    </>
  )
}

export default Index
