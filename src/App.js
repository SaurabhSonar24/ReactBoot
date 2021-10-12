import logo from './logo.svg';
import './App.css';
import Navbar1 from './components/Navbar1';
//import {Navbar,NavDropdown,Container,Nav} from 'react-bootstrap'
import {Button,Container,Row,Col,NavDropdown,Navbar,Nav} from 'react-bootstrap'
// import Slider from './components/Slider';
// import SmallCard from './components/SmallCard';
// import ImgCard from './components/ImgCard';
// import Foot from './components/Foot';
import ContactUs from './components/ContactUs';
import Combine from './components/Combine';
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom'


function App() {
  return (

    <div className="bg-light">
      <Router>
                <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#home"><img src="Images/Decathlonl_ogo.png" width="30" height="30" class="d-inline-block align-top"style={{paddingLeft:"-50px"}} alt=""/>Decathlon</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home" style={{paddingLeft:"280px"}}>HOME</Nav.Link>
        <Nav.Link href="#link">SHOP</Nav.Link>
        <Nav.Link href="#home">PICNIC</Nav.Link>
        <Nav.Link href="#home">PAGE</Nav.Link>
        <Nav.Link href="#home">PROMOTION</Nav.Link>
        <Nav.Link href="#home">BLOG</Nav.Link>
        <Nav.Link ><Link to="/ContactUs" style={{Color:"black"}}>Contact</Link></Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#" style={{paddingLeft:"310px"}}><i class="fa fa-search fa-1x"></i></Nav.Link>
        <Nav.Link href="#"><i class="fa fa-shopping-cart fa-1x"></i></Nav.Link>
        <Nav.Link href="#"><i class="fa fa-bars fa-1x"></i></Nav.Link>
        
        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Switch>
      <Route path="/"  exact component={Combine}/>
      <Route path="/ContactUs" exact component={ContactUs}/>
      
      
      
      </Switch>
{/* <Slider/>
<SmallCard/>
<ImgCard/>
<Foot/> */}
{/* <Combine/> */}
<br/>
<Container fluid>
      <Row>
        <Col md={2}></Col>
        <Col md={8} className="text-center">
        <span>Copyright &copy;2016 Designed by</span>
        <span className="text-primary"> Azuretheme </span>
        <span>- All Rights Reserved </span>
        </Col>
        <Col md={2}></Col>
      </Row>
</Container>

</Router>
</div>
  );
}

export default App;
