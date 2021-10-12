import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Container, Form,Row,Col} from 'react-bootstrap'
import Foot from './Foot';
const regForName =RegExp(/^[A-Za-z]/);
const regForMobile=RegExp(/^[1-9]\d{9}$|^[1-9]\d{9}$/)
const regForEmail=RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)


export class ContactUs extends Component {
    constructor(props) {
        super(props)
        this.state = { errors:{
            fname:'',
            lname:'',
           mobile:'',
            email:''
            
            
        } }
    }
    handle = (event) => {
        const { name, value } = event.target
       // this.setState({ [name]: value })
        let errors=this.state.errors;
        switch(name){
            case 'fname':
                errors.fname=regForName.test(value)?'':'Enter Valid First Name';
                break;
            case 'lname':
                errors.lname=regForName.test(value)?'':'Enter Valid Last Name';
                break;
            case 'mobile':
                errors.mobile=regForMobile.test(value)?'':'Enter Valid Mobile Number';
                break;
            case 'email':
                errors.email=regForEmail.test(value)?'':'Enter Valid Email';
                break;
            
            }
            this.setState({errors,[name]:value},()=>{
                console.log(errors)
            })
    }
    formSubmit=(event)=>{
        event.preventDefault();
        if(this.validate(this.state.errors))
        {
            alert("Details Added Successfully !!!");
           
        }
        else {
            alert("Please Enter Valid Details");
        }
     }
      validate=(errors)=>{
         let valid=true;
         Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
         return valid;
     }   


    render() {
        const {errors}=this.state;
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={4}></Col>
                        <Col md={4} className="text-center" style={{marginTop:"50px"}}>
                            <h2>Contact Us</h2>
                            <h4>Register</h4>
                            <Form onSubmit={this.formSubmit}>
                            First Name: <input type="text" name="fname" id="fname" value={this.fname} placeholder="Enter Name" onChange={this.handle} style={{width: "100%"}}/>
                            {errors.fname.length>0 && 
            <span style={{color:'red'}}>{errors.fname}</span>}<br/>
              Last Name:  <input type="text" id="lname" name="lname" placeholder="Last Name" value={this.lname} onChange={this.handle} style={{width: "100%"}}/>
              {errors.lname.length>0 && 
            <span style={{color:'red'}}>{errors.lname}</span>}<br/>
               Mobile number:<input type="text" id="mobile" name="mobile" value={this.mobile}  placeholder="Enter Mobile Number"  onChange={this.handle} style={{width: "100%"}}/>
               {errors.mobile.length>0 && 
            <span style={{color:'red'}}>{errors.mobile}</span>}<br/>
               Email:<input type="email" id="email" placeholder="Enter Email" value={this.email} name="email" onChange={this.handle} style={{width: "100%"}}/>
               {errors.email.length>0 && 
            <span style={{color:'red'}}>{errors.email}</span>}<br/>
              <input type="submit" id="sub" value="Register" />
              <input type="reset" value="Reset"/><br/><br/>
                            </Form>
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                </Container>
                <Foot/>
            </div>
        )
    }
}

export default ContactUs
