import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col, Container, Row,Card ,Button} from 'react-bootstrap'

export class SmallCard extends Component {
    

    render() {
        return (
            <div>
                <Container fluid className="bg-light">
                    <Row>
                        <Col md={4} >
                        <Card className="smlmain smlsub bdr ">
  <Card.Body className="bg-primary text-white"><i class="fa fa-plane fa-1x "></i> FREE SHIPPING WORLDWIDE</Card.Body>
                        </Card>
                        </Col>
                        <Col md={4} >
                        <Card className="smlmain smlsub bdr ">
  <Card.Body className="bg-danger text-white"><i class="fa fa-refresh fa-1x "></i> 100% MONEY BACK - 48 HOURS</Card.Body>
                        </Card>
                        </Col>
                        <Col md={4}>
                        <Card className="smlmain smlsub bdr ">
  <Card.Body className="bg-warning text-white"><i class="fa fa-clock-o fa-1x "></i> 24/7 ONLINE CUSTOMER SUPPORT</Card.Body>
                        </Card>
                        </Col>
                    </Row>

                </Container>
                <Container fluid>
                    <Row>
                        <Col md={4} className="bg-light"></Col>
                        <Col md={4} className="text-center bg-light">
                        <h4>FEATURED COLLECTIONS</h4>
                        <hr/>
                        </Col>
                        <Col md={4} className="bg-light"></Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row>
                        <Col md={2} className="bg-light"></Col>
                        <Col md={8} className="text-center bg-light nav2 text-center">
                        
                       <Button className="b1 btn bg-light text-dark " variant="outline-light" href="#">NEW ARRIVAL</Button>
                       <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
                       <Button className="b1 btn bg-light text-dark " href="#" variant="outline-light">CLOTHING</Button>
                       <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
                       <Button className="b1 btn bg-light text-dark " href="#" variant="outline-light">HATS</Button>
                       <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
                       <Button className="b1 btn bg-light text-dark " href="#" variant="outline-light">SHOES</Button>
                       <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
                       <Button className="b1 btn bg-light text-dark " href="#" variant="outline-light">BAGS</Button>
                       <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
                       <Button className="b1 btn bg-light text-dark " href="#" variant="outline-light">ACCESORIES</Button>
                        </Col>
                        <Col md={2} className="bg-light"></Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}

export default SmallCard
