import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container,Row,Col } from 'react-bootstrap'

export class Foot extends Component {
    

    render() {
        return (
            <div className="footbg" style={{marginTop:"50px"}}>
                <Container fluid>
                    <Row>
                        <Col md={5}></Col>
                        <Col md={2}>
                        <img src = "Images/tomellis.jpg" className = "img-circle mar" style={{height: "70px", width: "70px",textAlign:"center",marginLeft:"22mm",marginTop:"15mm",borderRadius:"50% 50%"}}/>
                        </Col>
                        <Col md={5}></Col>
                    </Row>
                    
                </Container>
                <Container fluid className="mar">
                    <Row>
                        <Col md={3}></Col>
                        <Col md={6} className="text-white text-center">
                        <h4 style={{fontStyle:"italic",fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}> Your time is limited, so don't waste it living someone else's life.
             Don't be trapped by dogma – which is living with the results of other people's thinking.</h4><br/><br/>
             <span style={{fontWeight:"bold"}}>Tom Ellis</span><br/>
             <span style={{fontStyle:"italic",fontSize:"smaller",fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"}}>Actor</span>
                        </Col>
                        <Col md={3}></Col>

                    </Row>

                </Container><br/><br/>
                <div className="text-white" id="d1">
        <i className="fa fa-facebook fa-1x"></i>&nbsp;&nbsp;
        <span>FACEBOOK</span>
      </div>
      <div className="bg-primary text-white" id="d2">
        <i className="fa fa-twitter fa-1x" ></i>&nbsp;&nbsp;
        <span>TWITTER</span>
      </div>
      <div className="text-white" id="d3">
        <i className="fa fa-instagram fa-1x" ></i>&nbsp;&nbsp;
        <span>INSTAGRAM</span>
      </div>
      <div className="text-white" id="d4">
        <i className="fa fa-dribbble fa-1x" ></i>&nbsp;&nbsp;
        <span>DRIBBBLE</span>
      </div>
      <div className="bg-danger text-white" id="d5">
        <i className="fa fa-pinterest fa-1x" ></i>&nbsp;&nbsp;
        <span>PINTEREST</span>
      </div><br/><br/>
      <Container fluid className="clr">
          <Row>
              <Col md={5}></Col>
              <Col md={2}>
              <img src = "Images/Decathlonl_ogo.png" class = "img-circle mar" style={{height:"35px",width:"35px",textAlign:"center",marginLeft:"22mm",marginTop:"15mm",borderRadius:"50% 50%"}}/>
              </Col>
              <Col md={5}></Col>
          </Row>

      </Container>
      <Container fluid className="text-center text-white">
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Reiciendis quia voluptates in aspernatur iure deserunt error ex quam, repudiandae optio
             veniam! Reiciendis voluptas atque porro quasi itaque, nulla blanditiis doloribus?</p>
                </Col>
                <Col md={3}></Col>
            </Row>
      </Container>
      <Container fluid>
          <Row>
              <Col md={5}></Col>
              <Col md={2} style={{paddingLeft:"27mm"}}>
              <img src="Images/bluedot.png" className="img-fluid" alt="Responsive image" style={{height: "6px",width: "6px"}}/>&nbsp;
              <img src="Images/reddot.png" className="img-fluid" alt="Responsive image" style={{height: "6px",width: "6px"}}/>&nbsp;
              <img src="Images/yellowdot.png" className="img-fluid" alt="Responsive image" style={{height: "6px",width: "6px"}}/>

              </Col>
              <Col md={5}></Col>
          </Row>
      </Container><br/><br/>
      <Container fluid>
          <Row>
              <Col md={3}></Col>
              <Col md={6} style={{paddingLeft:"165px"}}>
              <img src="Images/paypal.jpg" className="img-fluid" alt="Responsive image" style={{height: "25px",width: "50px"}} />&nbsp;
              <img src="Images/visa.png" className="img-fluid" alt="Responsive image" style={{height: "25px",width: "50px"}} />&nbsp;
              <img src="Images/discover.png" className="img-fluid" alt="Responsive image" style={{height: "25px",width: "50px"}} />&nbsp;
              <img src="Images/americanexpress.png" className="img-fluid" alt="Responsive image" style={{height: "25px",width: "50px"}} />&nbsp;
              <img src="Images/mastercard.png" className="img-fluid" alt="Responsive image" style={{height: "25px",width: "50px"}} />&nbsp;
              <img src="Images/maestro.jpg" className="img-fluid" alt="Responsive image" style={{height: "25px",width: "50px"}} />

              </Col>
              <Col md={3}></Col>
          </Row>
      </Container>
                
            </div>
        )
    }
}

export default Foot
