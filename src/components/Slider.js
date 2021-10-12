import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Carousel} from 'react-bootstrap'

export class Slider extends Component {
    

    render() {
        return (
            <div>
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="Images/running.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="Images/hiking.jpg"
      alt="Second slide"
    />

 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="Images/cycling.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
            </div>
        )
    }
}

export default Slider
