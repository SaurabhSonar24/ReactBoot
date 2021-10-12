import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from './Slider'
import SmallCard from './SmallCard'
import ImgCard from './ImgCard'
import Foot from './Foot'

export class Combine extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <Slider/>
<SmallCard/>
<ImgCard/>
<Foot/>
            </div>
        )
    }
}

export default Combine
